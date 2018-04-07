/**
 * Created by summer on 07/04/2018.
 */
import React, { Component } from 'react';
import Arrow from 'components/Arrow';
import './Demo.scss';

class Demo extends Component {

  render() {
    return (
      <div className="demo-wrapper">
        <div className="arrow-demo">
          <Arrow />
        </div>

      </div>
    )
  }
}

export default Demo;