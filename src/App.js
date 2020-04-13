import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#fff'
};

let fakeServerData = {
  user: {
    name: 'Fernando',
    playlists: [
      {
        name: 'My favorites',
        songs: ['Beat It','Billy Jean','Hasta la Raiz','Aventurera']
      },
      {
        name: 'Discover Weekly',
        songs: ['Le song', 'The Song','Sången']
      },
      {
        name: 'Valentine\'s Day Songs',
        songs: ['Si tu supieras','Abrazame','Querida']
      },
      {
        name: 'Road Trip',
        songs: ['Aventurera','Hasta la Raiz','Perfume de Gardenia','Farolito']
      }
    ]
  } 
};

class Aggreagate extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2>{this.props.playlists && this.props.playlists.length} Text</h2>
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
  constructor() {
    super();
    this.state = {serverData: {}}
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeServerData});
    }, 1000); 
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
        <div>
          <h1 style={{...defaultStyle, 'font-size': '54px'}}>
          {this.state.serverData.user && 
            this.state.serverData.user.name}'s Playlist
          </h1>
            <Aggreagate playlists="{this.state.serverData.user.playlists}"/>
            <Aggreagate/>

          <Filter/>
          <PlayList/>
          <PlayList/>
          <PlayList/>
          <PlayList/>
        </div> : <h1>'Loading...'</h1>
        }
      </div>
    );
  }
}

export default App;
