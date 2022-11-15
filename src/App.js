const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, "heading2"),
    React.createElement("h3", {}, "headisng31"),
    React.createElement("h3", {}, "heading32"),
  ]);
};

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
