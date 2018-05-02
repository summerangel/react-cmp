/**
 * Created by summer on 2018/5/1.
 */
import React, { Component } from 'react';
import classnames from 'classnames';

import './AnimateLogin.scss';
import 'animate.css';

class AnimateLogin extends Component {
  state = {
    email: '',
    password: '',
    emailBottom: 0,
    pwdBottom: 0,
    emailFocused: false,
    pwdFocused: false,
    isSubmitAnimate: false
  };

  onEmailInput = (e) => {
    e.preventDefault();
    const email = e.target.value;
    this.setState({
      email
    });
  };

  onEmailFocus = (e) => {
    e.preventDefault();
    this.setState({
      emailBottom: 15,
      emailFocused: true
    });
  };

  onEmailBlur = (e) => {
    e.preventDefault();
    this.setState({
      emailBottom: 15,
      emailFocused: false
    });
  };

  onPasswordInput = (e) => {
    e.preventDefault();
    const password = e.target.value;
    this.setState({
      password
    });
  };

  onPasswordFocus = (e) => {
    e.preventDefault();
    this.setState({
      pwdBottom: 15,
      pwdFocused: true
    });
  };

  onPasswordBlur = (e) => {
    e.preventDefault();
    this.setState({
      emailBottom: 15,
      pwdFocused: false
    });
  };

  render() {
    const emailTranslate = {
      transition: 'all .1s linear',
      bottom: `${this.state.emailBottom}px`,
      fontSize: '.9em'
    };
    const pwdTranslate = {
      transition: 'all .1s linear',
      bottom: `${this.state.pwdBottom}px`,
      fontSize: '.9em'
    };
    return (
      <div className="animate-login-wrapper">
        <section className="site-container">
          <section className="card">
            <h3>Login</h3>
            <form>
              <div className="form-wrap">
                <input type="email" value={this.state.email} className="form-input" name="email"
                       onFocus={this.onEmailFocus}
                       onChange={this.onEmailInput}
                       onBlur={this.onEmailBlur}
                />
                <div className={classnames({'horizontal-line': this.state.emailFocused, 'horizontal-line-animate': !this.state.emailFocused})}></div>
                <label style={!!this.state.emailFocused ? emailTranslate : {}} className="form-label" htmlFor="email">
                  <span className="form-label-content">Email</span>
                </label>
              </div>
              <div className="form-wrap">
                <input type="text" value={this.state.password} className="form-input" name="password"
                       onFocus={this.onPasswordFocus}
                       onChange={this.onPasswordInput}
                       onBlur={this.onPasswordBlur}
                />
                <div className={classnames({'horizontal-line': this.state.pwdFocused, 'horizontal-line-animate': !this.state.pwdFocused})}></div>
                <label style={!!this.state.pwdFocused ? pwdTranslate : {}} className="form-label" htmlFor="password">
                  <span className="form-label-content">Password</span>
                </label>
              </div>
              <div className={classnames('form-submit-wrap', {'animated pulse infinite': (!!this.state.email && !!this.state.password)})}>
                <div className="form-input-submit">
                  <button type="submit" name="submit" className="btn">Submit</button>
                </div>
              </div>
            </form>
          </section>
        </section>
      </div>
    );
  }
}

export default AnimateLogin;