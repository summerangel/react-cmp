/**
 * Created by summer on 07/04/2018.
 */
import React, { Component } from 'react';
import Arrow from 'components/Arrow';
import SlowUpPop from 'components/SlowUpPop';
import './Demo.scss';

class Demo extends Component {
  state = {
    openPopUp: false
  };

  togglePopUp = (e) => {
    e && e.preventDefault();
    e && e.stopPropagation();
    this.setState({
      openPopUp: !this.state.openPopUp
    });
  };

  render() {
    return (
      <div className="demo-wrapper">
        <div className="arrow-demo">
          <Arrow />
        </div>
        <div className="click-me" onClick={this.togglePopUp}>
          点我慢慢出来框
        </div>
        <SlowUpPop show={this.state.openPopUp} onClose={this.togglePopUp} />
      </div>
    );
  }
}

export default Demo;