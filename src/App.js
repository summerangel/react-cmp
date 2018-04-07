import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import nextTick from 'browser-next-tick';

import ElectronicLock from 'containers/ElectronicLock';
import Demo from 'containers/Demo';

window.nextTick = nextTick;

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<ElectronicLock />*/}
        <Demo />
      </div>
    );
  }
}

export default App;
