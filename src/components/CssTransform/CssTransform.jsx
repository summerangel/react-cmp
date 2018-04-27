/**
 * Created by summer on 2018/4/27.
 */
import React, { Component } from 'react';

import './CssTransform.scss';

class CssTransform extends Component {

  render() {
    return (
      <div className="css-transform-wrapper">
        <div className="box">box0</div>
        <div className="box box-one">box1</div>
        <div className="box box-two">box2</div>
        <div className="box box-three">box3</div>
        <div className="box box-four">box4</div>
        <div className="box box-five">box5</div>
      </div>
    );
  }
}

export default CssTransform;