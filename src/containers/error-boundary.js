import React, { Component } from "react";
import ReactDOM from "react-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: "",
      info: ""
    };
  }

  componentDidCatch(error, info) {
    console.info("INFO: ", JSON.stringify(info, null, 2), ", ERROR: ", error);
    /*
      If ever there is an error during rendering, in lifecycle methods, 
      and in constructors in any of its children components or any 
      subcomponent below it, the state of hasErroris changed to true.
    */
    this.setState({
      hasError: true,
      error: error.toString(),
      info: JSON.stringify(info, null, 2)
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div id="boundary-error">
          <h1>Oops!!! Something went wrong</h1>
          <h3>Error Info:</h3>
          <p>{this.state.info}</p>
          <h3>Error:</h3>
          <p>{this.state.error}</p>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}
export default ErrorBoundary;
