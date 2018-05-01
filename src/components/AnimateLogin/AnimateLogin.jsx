/**
 * Created by summer on 2018/5/1.
 */
import React, { Component } from 'react';
import classnames from 'classnames';

import './AnimateLogin.scss';

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
      emailBottom: 18,
      emailFocused: true,
      pwdFocused: false
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
      pwdBottom: 18,
      emailFocused: false,
      pwdFocused: true
    });
  };

  render() {
    const emailTranslate = {
      transition: 'bottom .1s linear',
      bottom: `${this.state.emailBottom}px`
    };
    const pwdTranslate = {
      transition: 'bottom .1s linear',
      bottom: `${this.state.pwdBottom}px`
    };
    const borderNoAnimate = {
      borderBottom: '2px solid #0d8aee'
    };
    const borderAnimate = {
      transition: 'border-bottom .5s ease-out',
      borderBottom: '1px solid #ddd'
    };
    return (
      <div className="animate-login-wrapper">
        <section className="site-container">
          <section className="card">
            <h3>Login</h3>
            <form>
              <div className="form-wrap">
                <input type="email" style={this.state.emailFocused ? borderNoAnimate : borderAnimate} value={this.state.email} onFocus={this.onEmailFocus} onChange={this.onEmailInput} className="form-input" name="email"/>
                <label style={emailTranslate} className="form-label" htmlFor="email">
                  <span className="form-label-content">Email</span>
                </label>
              </div>
              <div className="form-wrap">
                <input type="text" style={this.state.pwdFocused ? borderNoAnimate : borderAnimate} value={this.state.password} onFocus={this.onPasswordFocus} onChange={this.onPasswordInput} className="form-input" name="password"/>
                <label style={pwdTranslate} className="form-label" htmlFor="password">
                  <span className="form-label-content">Password</span>
                </label>
              </div>
              <div className={classnames('form-submit-wrap', {'pulse infinite': (!!this.state.email && !!this.state.password)})}>
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