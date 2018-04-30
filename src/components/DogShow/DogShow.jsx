/**
 * Created by summer on 2018/4/30.
 */
import React, { Component } from 'react';
import classnames from 'classnames';

import env from 'modules/env';

import './DogShow.scss';

class DogShow extends Component {
  state ={
    currIndex: 1,
    dogs: [
      `${env.prefix}assets/ifeimages/dog/dog_one.jpg`,
      `${env.prefix}assets/ifeimages/dog/dog_two.jpg`,
      `${env.prefix}assets/ifeimages/dog/dog_three.jpg`,
      `${env.prefix}assets/ifeimages/dog/dog_four.jpg`,
      `${env.prefix}assets/ifeimages/dog/dog_five.jpg`,
    ]
  };

  mouseOverHandle = (index) => {
    this.setState({
      currIndex: index
    });
  };

  render() {
    //
    return (
      <div style={{height: window.innerHeight}} className="dog-show-wrapper">
        <div style={{backgroundImage: `url(${this.state.dogs[0]})`, height: window.innerHeight}} className={classnames('big-img', `animate-${this.state.currIndex}`)}></div>
        <div className="small-img-wrap">
          {
            this.state.dogs.map((dog, index) => {
              return (
                <div key={index} className="small-img" onMouseOver={(e) => {
                  e.preventDefault();
                  this.mouseOverHandle(index);
                }}>
                  <img src={dog} alt="small-dog"/>
                  <div className="img-mask"></div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default DogShow;