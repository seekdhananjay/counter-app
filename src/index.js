import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./containers/error-boundary";
import CounterApp from "./containers/counter-app";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <CounterApp steps={5} />
      </ErrorBoundary>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
