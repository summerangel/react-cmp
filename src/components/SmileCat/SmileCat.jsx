/**
 * Created by summer on 2018/4/27.
 */
import React, { Component } from 'react';

import './SmileCat.scss';

class SmileCat extends Component {

  render() {
    return (
      <div className="smile-cat-wrapper">
        {/*脸*/}
        <div className="cat-face">
          {/*头发*/}
          <div className="cat-hair">
            <div></div>
          </div>
          {/*眼睛*/}
          <div className="cat-eye">
            <div className="eye left">
              <div className="eye-circle">
                <div className="eye-core"></div>
              </div>
              <div className="eye-bottom"></div>
              <div className="face-red"></div>
            </div>
            <div className="eye right">
              <div className="eye-circle">
                <div className="eye-core"></div>
              </div>
              <div className="eye-bottom"></div>
              <div className="face-red"></div>
            </div>
          </div>
          {/*鼻子*/}
          <div className="cat-nose"></div>
          {/*嘴巴*/}
          <div className="cat-mouth">
            <div className="mouth left"></div>
            <div className="mouth right"></div>
          </div>
        </div>
        {/*耳朵*/}
        <div className="cat-ear">
          <div className="ear left"></div>
          <div className="ear right"></div>
        </div>
      </div>
    );
  }
}

export default SmileCat;