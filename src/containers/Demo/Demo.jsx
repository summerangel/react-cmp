/**
 * Created by summer on 07/04/2018.
 */
import React, { Component } from 'react';
import Arrow from 'components/Arrow';
import SlowUpPop from 'components/SlowUpPop';
import BarList from 'components/BarList';
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
        <div>
          <div style={{ paddingLeft: '15px' }}>1、样式实现向左箭头</div>
          <div className="arrow-demo">
            <Arrow />
          </div>
        </div>
        <br />
        <br />
        <div>
          <div style={{ paddingLeft: '15px' }}>2、条形样式（向右箭头css实现）</div>
          <BarList />
        </div>
        <br />
        <br />
        <div>
          <div style={{ paddingLeft: '15px' }}>3、慢慢弹窗（transform: translateY 实现）</div>
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