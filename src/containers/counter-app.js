import React, { Component, Fragment } from "react";
import useCounter from "../hooks/useCounter";
import Counter from "../components/counter";
import Increment from "../components/increment";
import Decrement from "../components/decrement";

const CounterApp = props => {
  const [count, incrementCount, decrementCount] = useCounter(props);
  return (
    <Fragment>
      <Counter count={count} />
      <Increment incrementCount={incrementCount} />
      <Decrement decrementCount={decrementCount} />
    </Fragment>
  );
};
export default CounterApp;
