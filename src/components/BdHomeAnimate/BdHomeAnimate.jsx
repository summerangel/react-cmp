/**
 * Created by summer on 2018/5/2.
 */
import React, { Component } from 'react';
import lottie  from 'lottie-web';

import env from 'modules/env';

import './BdHomeAnimate.scss';

class BdHomeAnimate extends Component {

  componentDidMount = () => {
    lottie.loadAnimation({
      container: this.lottieRef,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: `${env.prefix}assets/ifeimages/data.json`
    });
  };

  render() {
    return (
      <div className="bd-home-animate-wrapper">
        <div ref={(ref) => {this.lottieRef = ref;}} className="home-wrap">

        </div>
      </div>
    );
  }
}

export default BdHomeAnimate;