import React from "react";
import Login from "./Login";

var loggedOn = false;
var currentTime = new Date().getHours();

function log() {}

function App() {
  return (
    <div className="container">
      {
        //ternary
        /* loggedOn ? <h1>Hello</h1> : <Login />} */
        //&& operator
        currentTime > 16 && <h1>Take Rest Man!</h1>
      }
    </div>
  );
}

export default App;
