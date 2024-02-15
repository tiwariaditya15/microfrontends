import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Greeter from "remote/Greeter";
import Counter from "remote/VerySecretComponent";
import SolidApp from "solid_remote/SolidApp";
import "./index.scss";

const App = () => {
  const divRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      SolidApp({ ref: document.getElementById("app") });
    }, 5000);
  }, []);
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: host</div>
      <Greeter />
      <Counter />
      <div ref={divRef}></div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
