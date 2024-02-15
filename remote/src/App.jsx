import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Greeter from "./Greeter";
import Counter from "./Counter";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: remote</div>
    <Greeter />
    <Counter />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
