/**
 * Created by summer on 2018/4/26.
 */
import React, { Component } from 'react';

import CssTest from 'components/CssTest';
import CssTransform from 'components/CssTransform';
import CssReverse from 'components/CssReverse';

import './IFETask.scss';

class IFETask extends Component {

  render() {
    return (
      <div className="ife-task-wrapper">
        <div className="task-title">IFE Task 1</div>
        <CssTest />
        <div className="task-title">IFE Task 2</div>
        <CssTransform />
        <div className="task-title">IFE Task 4</div>
        <CssReverse />
      </div>
    );
  }
}

export default IFETask;