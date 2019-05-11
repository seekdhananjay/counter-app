import React from "react";

const Decrement = props => {
  return (
    <div id="decrement">
      <button id="decrement-button" onClick={props.decrementCount}>
        -1
      </button>
    </div>
  );
};
export default Decrement;
