import React, { Component, Fragment } from "react";

import Counter from "../components/counter";
import Increment from "../components/increment";
import Decrement from "../components/decrement";

class CounterApp extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      count: 0,
      status: "Counter App"
    };
    this.incrementHandler = this.incrementHandler.bind(this);
    this.decrementHandler = this.decrementHandler.bind(this);
  }
  incrementHandler() {
    this.setState((previousState, props) => {
      return {
        count: previousState.count + props.steps,
        status: "Counter App :Going UP"
      };
    });
  }
  decrementHandler() {
    this.setState((previousState, props) => {
      return {
        count: previousState.count - props.steps,
        status: "Counter App :Going DOWN"
      };
    });
  }
  componentDidMount() {
    document.title = this.state.status;
  }
  componentDidUpdate() {
    document.title = `${this.state.status}`;
    // throw new Error("manual error to test the error boundary");
  }
  render() {
    return (
      <Fragment>
        <Counter count={this.state.count} />
        <Increment incrementCount={this.incrementHandler} />
        <Decrement decrementCount={this.decrementHandler} />
      </Fragment>
    );
  }
}
export default CounterApp;
