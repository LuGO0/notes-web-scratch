import React from "react";
import ReactDOM from "react-dom";

// adding ./ is important since it thinks its a node module otherwise
import Pet from "./Pet";

// this creates a component that can be rendered

//JS

// const App = () => {
//   console.log("running");
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "foo"),
//     Pet()
//   );
// };

// JSX

// first I will make it work then refactor it to include everything in seperate useful files.

const App = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder="title"/>
                <input type="text" placeholder="details"/>

                <button>Submit</button>
            </form>
        </div>
    )
}

// render it now.
ReactDOM.render(App(), document.getElementById("root"));
