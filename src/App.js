import React from "react";
import ReactDOM from "react-dom";

// adding ./ is important since it thinks its a node module otherwise
import Pet from "./Pet";
import SearchParams from "./SearchParams";

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

// const URL = "https://dog.ceo/api/breeds/image/random";

// function addNewDog() {
//     const promise = fetch(URL);
//     promise
//     .then(function (response) {
//         const process = response.text;
//         console.log(process);
//         return process;
//     })
//     .then(function (responseProcessed) {
//         const dog = JSON.parse(responseProcessed);
//     });
// }

const App = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder="title"/>
                <input type="text" placeholder="details"/>
                <SearchParams/>
                <button>Submit</button>
            </form>
        </div>
    )
}


// render it now.
ReactDOM.render(App(), document.getElementById("root"));
