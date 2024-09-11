import React from "react";
import ReactDOM from "react-dom";

const fName = "Rui";
const lName = "Sousa";
const year = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {fName + " " + lName}.</p>
    <p>Copyright &copy; {year}</p>
  </div>,
  document.getElementById("root")
);
