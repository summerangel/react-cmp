/**
 * Created by summer on 31/03/2018.
 */
import React, { Component } from 'react';

import './Arrow.scss';

class Arrow extends Component {

  render() {
    return (
      <div className="arrow-wrap">
        <div className="arrow_left">
          <div className="triangle_top"></div>
          <div className="triangle_bottom"></div>
        </div>

        {/* simpler code to realize */}
        <div className="arrow-right"></div>
        <div className="ribbon"></div>
      </div>
    )
  }
}

export default Arrow;