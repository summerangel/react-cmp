/**
 * Created by summer on 15/03/2018.
 */
import React, { Component } from 'react';

import CircleProgress from 'components/CircleProgress';
import './ElectronicLock.scss';

const CIRCLE_RADIUS = 175;

const LOCK_STATUS_COLORS = [
  {
    strokeOne: '#39EBC2',
    bgOne: 'rgba(57,235,194,0.08)',
    bgTwo: 'rgba(57,235,194,0.06)',
    bgThree: 'rgba(57,235,194,0.04)',
    bgFour: '#39EBC2',
  },{
    strokeOne: '#EA705A',
    bgOne: 'rgba(234,112,90,0.08)',
    bgTwo: 'rgba(234,112,90,0.06)',
    bgThree: 'rgba(234,112,90,0.04)',
    bgFour: '#EA705A',
  },{
    strokeOne: '#D6D6D6',
    bgOne: 'rgba(214,214,214,0.08)',
    bgTwo: 'rgba(214,214,214,0.06)',
    bgThree: 'rgba(214,214,214,0.04)',
    bgFour: '#D6D6D6',
  }
];

class ElectronicLock extends Component {
  state = {
    lockValue: 0,
    onlineText: '离线',
    countRise: 0
  };

  componentDidMount = () => {
    setTimeout(() => {
      const { lockValue } = this.state;
      if (lockValue < 0) {
        this.setState({
          lockValue: 0
        })
      } else if (lockValue > 100) {
        this.setState({
          lockValue: 100
        })
      } else {
        this.setState({
          lockValue: 80
        })
      }
    }, 500)
    nextTick(() => {
      setTimeout(() => {
        const durationCount = 450 / this.state.lockValue;
        let count = 0;
        var countInterVal = setInterval(() => {
          if(count < this.state.lockValue){
            count++;
            this.setState({
              countRise: count
            })
          } else{
            clearInterval(countInterVal);
          }
        }, durationCount);
      }, 500);
    });
  };

  render() {
    const colorStatus = LOCK_STATUS_COLORS[0];
    const {
      lockValue,
      onlineText
    } = this.state;
    return (
      <div className="electronic-lock-wrapper">
        <CircleProgress
          radius={CIRCLE_RADIUS}
          value={lockValue / 100}
          colorStatus={colorStatus}
        >
          <div className="circle-progress__online">
            {onlineText}
          </div>
          <div className="circle-progress__text">
            电池电量{this.state.countRise}%
          </div>
        </CircleProgress>
      </div>
    )
  }
}

export default ElectronicLock;
