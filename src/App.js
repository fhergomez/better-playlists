import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#fff'
}

class Aggreagate extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2 style={{...defaultStyle}}>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={{defaultStyle}}>
        <img/>
        <input type="text"/>
      </div>
    );
  }
}

class PlayList extends Component {
  render(){
    return (
      <div style={{...defaultStyle, display: 'inline-block', width: '25%'}}>
        <img />
        <h3>PlayList Name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{...defaultStyle, 'font-size': '54px'}}>Title</h1>
        <Aggreagate/>
        <Aggreagate/>
        <Filter/>
        <PlayList/>
        <PlayList/>
        <PlayList/>
        <PlayList/>
      </div>
    );
  }
}

export default App;