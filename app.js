'use strict';

const path = require('path');
const Koa = require('koa');
const mount = require('koa-mount');
const compress = require('koa-compress');
const session = require('koa-session');
const views = require('koa-views');
const morgan = require('koa-morgan');
const bodyParser = require('koa-better-body');
const serveStatic = require('koa-static');
const convert = require('koa-convert');
const cons = require('consolidate');
const nunjucks = require('nunjucks');
const _ = require('lodash');

const config = require('./config/env');
const logger = require('./mw/logger');
const index = require('./routes/index');
const apiRouter = require('./routes/proxy');
const sysUtils = require('./config/utils');

const PORT = config.getListeningPort();
const DEV_MODE = config.isDevMode();
const DEFAULT_PREFIX_KEY = 'defaultPrefix';
const API_ENDPOINTS = config.getApiEndPoints();

//and initialize it with
const app = new Koa();
app.env = config.getNodeEnv() || 'development';
app.keys = ['react-cmp'];
app.proxy = true;

app.use(morgan(DEV_MODE ? 'dev' : 'tiny'));
app.use(compress());

let staticPrefix = path.join(config.getAppPrefix(), config.getStaticPrefix() || '/');
if(sysUtils.isWindows()) {
  staticPrefix = sysUtils.replaceBackwardSlash(staticPrefix);
}
app.use(mount(
  staticPrefix,
  serveStatic(path.join(process.cwd(), 'build/app'),
    {
      // one month cache for prod
      maxage: DEV_MODE ? 0 : 2592000000,
      gzip: false,
    }
  )
  )
);

app.use(session(app));
app.use(convert(bodyParser({})));

const viewsPath = path.join(process.cwd(), 'build/app');
cons.requires.nunjucks = nunjucks.configure(viewsPath, {
  autoescape: true,
  noCache: DEV_MODE,
  tags: {
    variableStart: '{=',
    variableEnd: '=}'
  }
});

app.use(views(viewsPath, {
  map: {
    html: 'nunjucks'
  }
}));

app.use(index.routes());

//api proxy
if(config.isNodeProxyEnabled() && !_.isEmpty(API_ENDPOINTS)) {
  for(const prefix in API_ENDPOINTS) {
    if(API_ENDPOINTS.hasOwnProperty(prefix) && prefix !== DEFAULT_PREFIX_KEY) {
      let endPoint = API_ENDPOINTS[prefix];
      if ('string' !== typeof endPoint) {
        endPoint = endPoint.endpoint;
      }
      app.use(apiRouter.handleApiRequests(prefix, endPoint));
      logger.info('Node proxy[' + endPoint + '] enabled for path: ' + prefix);
    }
  }
}

app.on('error', err => {
  logger.error(err);
});

//and then give it a port to listen for
app.listen(PORT, '0.0.0.0');
logger.info(`Koa listening on port ${PORT}`);