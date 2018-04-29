/**
 * Created by summer on 2018/4/29.
 */
import React, { Component } from 'react';

import './ThreeDTransform.scss';

class ThreeDTransform extends Component {

  render() {
    return (
      <div className="three-d-transform-wrapper">
        <div className="viewport">
          <div className="cube">
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ThreeDTransform;