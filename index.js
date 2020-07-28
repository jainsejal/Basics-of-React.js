//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//It should display a h1 heading.
ReactDOM.render(
  <div>
    <h1> My favourite food items:</h1>
    <ul>
      <li> Pani Puri </li>
      <li> Noodles </li>
      <li> Pizza </li>
    </ul>
  </div>,
  document.getElementById("root");
)
