import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CircleProgress.scss';

const styles = {
  wrap: {
    display: 'inline-block',
    position: 'relative',
  },
};

class CircleProgress extends Component {
  static propTypes = {
    radius: PropTypes.number.isRequired,
    value: PropTypes.number, //please give the percent value
    colorStatus: PropTypes.object
  };

  static defaultPropTypes = {
    radius: 175,
    value: 1,
    colorStatus: {
      bgOne: '', //the biggest circle, count from the outside one
      bgTwo: '',
      bgThree: '',
      bgFour: '',
      strokeOne: '', //represents for the process bar's stroke color
    }
  };

  render = () => {
    const {
      radius,
      value = 1,
      children,
      colorStatus: {
        bgOne,
        bgTwo,
        bgThree,
        bgFour,
        strokeOne
      }
    } = this.props;
    const pct = (1 - value) * (1.4) * Math.PI * 100;

    return (
      <div className="circle-progress">
        <div className="circle-progress__wrap" style={styles.wrap}>
          <svg width={radius * 2} height={radius * 2} viewBox="0 0 350 350" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle className="circle-progress__background3" r="175" cx="175" cy="175" fill={bgOne} />
            <circle className="circle-progress__background2" r="130" cx="175" cy="175" fill={bgTwo} />
            <circle className="circle-progress__background1" r="90" cx="175" cy="175" fill={bgThree} />
            <circle className="circle-progress__bar" r="70" cx="175" cy="175" fill="transparent" stroke={strokeOne} strokeDasharray={(1.4) * Math.PI * 100} strokeDashoffset={pct}  />
            <circle className="circle-progress__background" r="60" cx="175" cy="175" fill={bgFour} />
          </svg>
          {children}
        </div>
      </div>
    );
  };
}

export default CircleProgress;
