//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
const name = "Sejal Jain";
const currentYear = new Date().getFullYear();
//It should display a h1 heading.
ReactDOM.render(
  <div>
    <h1>Created by {name}!</h1>
    <h3> My favourite food items:</h3>
    <ul>
      <li> Pani Puri </li>
      <li> Noodles </li>
      <li> Pizza </li>
    </ul>
    <p> My lucky number is {Math.round(Math.random() * 10)}</p>
    <p>Copyright {currentYear}.</p>
  </div>,
  document.getElementById("root");
)
