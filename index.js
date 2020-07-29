//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const name = "Sejal Jain";
const currentYear = new Date().getFullYear();
const img = "https://picsum.photos/200";
const customStyle = {
  color : "blue",
  fontSize : "16px",
  border : "1px solid grey"
}
customStyle.color = "purple";

//It should display a h1 heading.
ReactDOM.render(
  <div>
    <h1 style = {{color: "red"}}>Created by {name}!</h1>
    <h3> My favourite food items:</h3>
    <ul style ={customStyle}>
      <li> Pani Puri </li>
      <li> Noodles </li>
      <li> Pizza </li>
    </ul>
    <p> My lucky number is {Math.round(Math.random() * 10)}</p>
    <p>Copyright {currentYear}.</p>
    <div>
      <img src = {img + "?grayscale"} />
      <img className = "food-img" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIfjkgzuJVB53eSgj_hunTHm39oHmA9wvR5g&usqp=CAU"/>
      <img className = "food-img" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRw-p9ekj_18G4A-SmlTjJYqjHnVwqjaT8zqA&usqp=CAU"/> 
      <img className = "food-img" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQP8GyC1-6RwZkF72eU2SItNmYOAKFHAbxkcQ&usqp=CAU"/>
    </div>
  </div>,
  document.getElementById("root");
)
