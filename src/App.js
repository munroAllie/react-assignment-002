import React, { Component } from 'react';
import './App.css';
import Validation from './validation';
import Char from './char';


class App extends Component {
  state = {
    userInput: ''
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1)
    const updatedtext = text.join('');
    this.setState({
      userInput: updatedtext
    })


  }

  onChangeHandler = (event) => {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const charList = this.state.userInput.split('').map((char, index) => {
      return <Char char={char} key={index} click={() => this.deleteCharHandler(index)} />
    })
    return (
      <div>
        <div className="header">
          <h1> React the complete guide</h1>
          <h2> Assignment 002 - Allie Munro </h2>
        </div>
        <input onChange={this.onChangeHandler} value={this.state.userInput}></input>
        <p className="userInput">{this.state.userInput}</p>
        <Validation length={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
