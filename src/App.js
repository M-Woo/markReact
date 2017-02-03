import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StackGrid, { transitions } from "react-stack-grid";

const { scaleDown } = transitions;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Film Pull</h2>
        </div>
        
    // <form id="searchbox" action="">
    // <input id="search" type="text" placeholder="Type here">
    // <input id="submit" type="submit" value="Search">
    // </form>
      
      
        <StackGrid
          appear={scaleDown.appear}
          appeared={scaleDown.appeared}
          enter={scaleDown.enter}
          entered={scaleDown.entered}
          leaved={scaleDown.leaved}
          columnWidth={150}>
        <div key="key1">Item 1</div>
        <div key="key2">Item 2</div>
        <div key="key3">Item 3</div>
        </StackGrid>
      </div>
    );
  }
}

export default App;
