/**
 * Created by summer on 2018/4/26.
 */
import React, { Component } from 'react';
import classnames from 'classnames';

import './CssTest.scss';

class CssTest extends Component {

  state = {
    dynamicStyle: ''
  };

  switchStyle = (e) => {
    e.preventDefault();
    const isSwitched = !!this.state.dynamicStyle;
    this.setState({
      dynamicStyle: isSwitched ? '' : 'switched'
    });
  };

  render() {
    return (
      <div className="css-test-wrapper">
        <div className={classnames('text-style', this.state.dynamicStyle)}>
          前端学院
        </div>
        <div className={classnames('word-line', this.state.dynamicStyle)}></div>
        <div className="switch-style" onClick={this.switchStyle}>切换样式</div>
      </div>
    );
  }
}

export default CssTest;