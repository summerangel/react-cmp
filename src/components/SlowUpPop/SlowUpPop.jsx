/**
 * Created by summer on 07/04/2018.
 */
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './SlowUpPop.scss';

class SlowUpPop extends Component {
  static propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func
  };

  static defaultPropTypes = {
    show: false
  };

  render() {
    return (
      <div className={classnames('slow-up-pop', {show: this.props.show})}
           onClick={this.props.onClose}
      >
        {/*<div className="layer-mask"></div>*/}
        <div className="content-body">
          我是慢慢出来的弹出层
        </div>
      </div>
    );
  }
}

export default SlowUpPop;