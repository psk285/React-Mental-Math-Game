import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    const valuesArray = this.makeNewQuestion();
    this.state = {
      value1: valuesArray[0],
      value2: valuesArray[1],
      value3: valuesArray[2],
      proposedAnswer: valuesArray[3],
      numQuestions: 0,
      numCorrect: 0,
    };
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }
  makeNewQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = value1 + value2 + value3;
    return [value1, value2, value3, proposedAnswer];
  };
  handleClick1(e) {
    e.preventDefault();
    if (
      this.state.proposedAnswer ===
      this.state.value1 + this.state.value2 + this.state.value3
    ) {
      this.setState((prevState) => ({ numCorrect: prevState.numCorrect + 1 }));
    }
    this.setState((prevState) => ({
      numQuestions: prevState.numQuestions + 1,
    }));

    this.setState({
      value1: Math.floor(Math.random() * 100),
      value2: Math.floor(Math.random() * 100),
      value3: Math.floor(Math.random() * 100),
    });
  }
  handleClick2(e) {
    e.preventDefault();
    if (
      this.state.proposedAnswer !==
      this.state.value1 + this.state.value2 + this.state.value3
    ) {
      this.setState((prevState) => ({ numCorrect: prevState.numCorrect + 1 }));
    }
    this.setState((prevState) => ({
      numQuestions: prevState.numQuestions + 1,
    }));

    this.setState({
      value1: Math.floor(Math.random() * 100),
      value2: Math.floor(Math.random() * 100),
      value3: Math.floor(Math.random() * 100),
      proposedAnswer: this.state.value1 + this.state.value2 + this.state.value3,
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={this.handleClick1}>True</button>
          <button onClick={this.handleClick2}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
