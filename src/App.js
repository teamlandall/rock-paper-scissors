import React, { Component } from 'react';
import logo from './images/dp_logo.png';
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
      image: null,
      kidsScore: 0,
      compScore: 0
    }
  }

  playGame() {

    const { prompt, image } = this.state;

    if (image) this.setState({image: null});
    if (prompt === 'Scissor') this.setState({prompt: 'Ready'});

    setTimeout(() => {
      this.setState({prompt: 'Rock'});
    }, 750);

    setTimeout(() => {
      this.setState({ prompt: 'Paper' });
    }, 1500);

    setTimeout(() => {
      this.setState({ prompt: 'Scissor' });
    }, 2250);

    setTimeout(() => {
      this.setState({ image: IMAGES[Math.floor(Math.random() * 3)] });
    }, 3000);
  }


  render() {
    const { prompt, image, kidsScore, compScore } = this.state;

    return (
      
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Rock Paper Scissor Challenge</h2>
        </div>

        <div className="row">
          <div className="col-md-6"> 
            <h2> Kid's Score </h2> 
          </div>
          <div className="col-md-6"> 
            <h2>Computer Score</h2> 
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 score-count"> {kidsScore} </div>
          <div className="col-md-6 score-count"> {compScore} </div>
        </div>

        <div className="row">
          <div className="col-md-6"> 
             <button
              type="button"
              className="btn btn-success btn-lg"
              onClick={() => this.setState({kidsScore: kidsScore + 1}) }
            >
              +1
            </button>
          </div>
          <div className="col-md-6"> 
            <button
              type="button"
              className="btn btn-success btn-lg"
              onClick={() => this.setState({ compScore: compScore + 1 }) }
            >
              +1
            </button>
          </div>
        </div>

        { !image ? 
          <p className="App-intro prompt-text">
            {prompt}
          </p>
          :
          <p className="App-intro">
            <img src={`${image}`}  className="image" alt=''/>
          </p>
        }
        <button 
          type="button" 
          className="btn btn-success btn-lg"
          onClick={() => this.playGame()}
        >
          {image ? 'Play Again' : 'Play'}
        </button>
      </div>
    );
  }
}

export default App;