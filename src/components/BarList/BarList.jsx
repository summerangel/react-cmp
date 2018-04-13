/**
 * Created by summer on 2018/4/13.
 */
import React, { Component } from 'react';

import './BarList.scss';

class BarList extends Component {

  render() {
    return (
      <div class='bar-list'>
        <div class='bar-item'>
          <div class='name'>优惠券管理</div>
          <div class='right-arrow'>暂无设置</div>
        </div>
        <div class='bar-item'>
          <div class='name'>满减活动</div>
          <div class='right-arrow'>暂无设置</div>
        </div>
      </div>
    )
  }
}

export default BarList;