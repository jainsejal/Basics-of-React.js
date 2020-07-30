import React from "react";
import ReactDOM from "react-dom";
import pi, {DoublePi, TriplePi} from "./math.js"

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{DoublePi()}</li>
    <li>{TriplePi()}</li>
    <li>{add(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
