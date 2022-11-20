import React from "react";

// const Pet = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, "heading2"),
//     React.createElement("h3", {}, "headisng31"),
//     React.createElement("h3", {}, "heading32"),
//   ]);
// };

// rewrite in Babel
const Pet = () => {
  return (
    <div>
      <h2>heading2</h2>
      <h3>heading31</h3>
      <h3>heading32</h3>
    </div>
  );
};

export default Pet;
