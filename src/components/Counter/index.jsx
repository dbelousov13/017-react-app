import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    //иммутабельность
    this.state = {
      counter: 0,
    };
    // this.increment = this.increment.bind(this);
  }

  increment = () => {
    // console.log("this.state.counter :>> ", this.state.counter);
    // this.state.counter++;
    const { counter } = this.state;
    console.log("setState ");
    this.setState({ counter: counter + 1 });
  };

  decrement = () => {
    const { counter } = this.state;
    this.setState({ counter: counter - 1 });
  };

  render() {
    const { counter } = this.state;
    return (
      <>
        <div>{counter}</div>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}> +</button>
      </>
    );
  }
}

export default Counter;
