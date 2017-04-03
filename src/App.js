import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import rock from './images/rock.jpeg';
import scissors from './images/scissors.jpg';
import paper from './images/paper.jpg';

const IMAGES = [rock, paper, scissors];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      prompt: 'Ready',
      image: null
    }
  }

  playGame() {
    setTimeout(() => {
      this.setState({prompt: 'Rock'});
    }, 1000);

    setTimeout(() => {
      this.setState({ prompt: 'Paper' });
    }, 2000);

    setTimeout(() => {
      this.setState({ prompt: 'Scissor' });
    }, 3000);

    setTimeout(() => {
      this.setState({ image: IMAGES[Math.floor(Math.random() * 2)] });
    }, 4000);
  }


  render() {
    const { prompt, image } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {prompt}
        </p>

        <p className="App-intro">
          <img src={`${image}`} alt=''/>
        </p>

        <button 
          type="button" 
          className="btn btn-primary"
          onClick={() => this.playGame()}
        >
          Play
        </button>
      </div>
    );
  }
}

export default App;
