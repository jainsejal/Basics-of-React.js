//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
const fName = "Sejal";
const lName = "Jain";
//It should display a h1 heading.
ReactDOM.render(
  <div>
    <h1>Hello {fName} {lName}!</h1>
    <h3> My favourite food items:</h3>
    <ul>
      <li> Pani Puri </li>
      <li> Noodles </li>
      <li> Pizza </li>
    </ul>
    <p> My lucky number is {Math.round(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root");
)
