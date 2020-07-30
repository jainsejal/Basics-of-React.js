import React from "react";
import ReactDOM from "react-dom";
import pi, {DoublePi, TriplePi} from "./math.js"

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{DoublePi()}</li>
    <li>{TriplePi()}</li>
  </ul>,
  document.getElementById("root")
);
