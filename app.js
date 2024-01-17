import React from "react";
import  ReactDOM from "react-dom/client";

let heading = React.createElement("h1",{id:"heading"},"lasya");
let root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(heading);