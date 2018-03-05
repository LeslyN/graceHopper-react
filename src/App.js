import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/Header';
import Main from './components/Main';
import Aside from './components/Aside';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="col-12">
          <Header/>
          <Main/>
          <Aside/>
        </div>
      </div>
    );
  }
}

export default App;
