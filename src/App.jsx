import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import nextTick from 'browser-next-tick';

import ElectronicLock from 'containers/ElectronicLock';
import Demo from 'containers/Demo';
import IfeTask from 'containers/IFETask';

window.nextTick = nextTick;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Demo}/>
            <Route exact path="/lock" component={ElectronicLock} />
            <Route exact path="/ife-task" component={IfeTask} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
