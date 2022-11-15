import React from "react";
import ReactDOM  from "react-dom";

// adding ./ is important since it thinks its a node module otherwise
import Pet from "./Pet";

// this creates a component that can be rendered
const App = () => {
  console.log("running");
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "foo"),
    Pet()
  );
};

// render it now.
ReactDOM.render(App(), document.getElementById("root"));
