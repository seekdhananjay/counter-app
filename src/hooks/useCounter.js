import { useState, useEffect } from "react";

const useCounter = props => {
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

  return [count, incrementCount, decrementCount];
};
export default useCounter;
