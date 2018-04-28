/**
 * Created by summer on 2018/4/28.
 */
import React, { Component } from 'react';

import env from 'modules/env';

import './CssReverse.scss';

class CssReverse extends Component {

  render() {
    const front = `${env.prefix}assets/ifeimages/front.jpg`;
    const back = `${env.prefix}assets/ifeimages/back.jpg`;
    return (
      <div className="css-reverse-wrapper">
        <div className="img-container">
          <div className="front">
            <img src={front} alt="front"/>
          </div>
          <div className="back">
            <img src={back} alt="back"/>
          </div>
        </div>
      </div>
    );
  }
}

export default CssReverse;