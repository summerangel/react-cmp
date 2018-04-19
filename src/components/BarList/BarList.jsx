/**
 * Created by summer on 2018/4/13.
 */
import React, { Component } from 'react';

import './BarList.scss';

class BarList extends Component {

  render() {
    return (
      <div className='bar-list'>
        <div className='bar-item'>
          <div className='name'>优惠券管理</div>
          <div className='right-arrow'>暂无设置</div>
        </div>
        <div className='bar-item'>
          <div className='name'>满减活动</div>
          <div className='right-arrow'>暂无设置</div>
        </div>
      </div>
    )
  }
}

export default BarList;