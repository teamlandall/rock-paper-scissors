import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      test: 'Ready'
    }
  }

  playGame() {
    setTimeout(() => {
      this.setState({test: 'Rock'});
    }, 1000);

    setTimeout(() => {
      this.setState({ test: 'Paper' });
    }, 2000);

    setTimeout(() => {
      this.setState({ test: 'Scissor' });
    }, 3000);
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {this.state.test}
        </p>

        <button 
          id="play-button"
          onClick={() => this.playGame()}
        >
          Play
        </button>
      </div>
    );
  }
}

export default App;
