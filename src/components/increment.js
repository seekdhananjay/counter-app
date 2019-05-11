import React from "react";

const Increment = props => {
  return (
    <div id="increment">
      <button id="increment-button" onClick={props.incrementCount}>
        +1
      </button>
    </div>
  );
};
export default Increment;
