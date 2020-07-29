//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const time = new Date().getHours(2019, 1, 1, 10);

let greeting;

let customStyle = {
  color: ""
};

if (time < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (time < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 style={customStyle} className="heading">
    {" "}
    {greeting}{" "}
  </h1>,
  document.getElementById("root")
);
