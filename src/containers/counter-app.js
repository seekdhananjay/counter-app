import React, { Component, Fragment, useState, useEffect } from "react";

import Counter from "../components/counter";
import Increment from "../components/increment";
import Decrement from "../components/decrement";

const CounterApp = props => {
  const [count, changeCount] = useState(0);
  const [status, changeStatus] = useState("Counter App");
  
  useEffect(() => {
    document.title = `${status}`;
    // throw new Error("manual error to test the error boundary");
  });
  
  const incrementCount = () => {
    const newCount = count + props.steps;
    changeCount(newCount);
    changeStatus("Counter App :Going UP");
  };
  
  const decrementCount = () => {
    const newCount = count - props.steps;
    changeCount(newCount);
    changeStatus("Counter App :Going DOWN");
  };
  
  return (
    <Fragment>
      <Counter count={count} />
      <Increment incrementCount={incrementCount} />
      <Decrement decrementCount={decrementCount} />
    </Fragment>
  );
};
export default CounterApp;
