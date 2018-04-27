/**
 * Created by summer on 07/04/2018.
 */
import React, { Component } from 'react';
import Arrow from 'components/Arrow';
import SlowUpPop from 'components/SlowUpPop';
import BarList from 'components/BarList';
import CssTest from 'components/CssTest';
import './Demo.scss';

class Demo extends Component {
  state = {
    openPopUp: false
  };

  componentDidMount = () => {

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
          <div style={{ paddingLeft: '15px' }}>1、css实现向左箭头</div>
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

        <div className="test-wrapper">
          <div id="ease" className="test-block">
            test1
          </div>
          <div id="cubic-bezier" className="test-block">
            test2
          </div>
        </div>

        <div id="timings-demo">
          <div id="ease" className="demo-box">Ease</div>
          <div id="ease-in" className="demo-box">Ease-in</div>
          <div id="ease-out" className="demo-box">Ease-out</div>
          <div id="ease-in-out" className="demo-box">Ease-in-out</div>
          <div id="linear" className="demo-box">Linear</div>
          <div id="cubic-bezier" className="demo-box">Cubic-bezier</div>
        </div>

        <div className="threed-test">
          3d test
        </div>

        <SlowUpPop show={this.state.openPopUp} onClose={this.togglePopUp} />
      </div>
    );
  }
}

export default Demo;