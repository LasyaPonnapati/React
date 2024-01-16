/* <div class="parent">
    <div class="child">
        <h1>i'am h1 tag</h1>
        <h2>i'am h1 tag</h2>
    </div>
    <div class="child2">
        <h1>i'am h1 tag</h1>
        <h2>i'am h1 tag</h2>
    </div>
</div> */

let heading = React.createElement("div",{className:"parent"},
[React.createElement("div",{className:"child"},[
   React.createElement("h1",{},"i'am h1 tag"),
   React.createElement("h2",{},"i'am h2 tag")
]),
React.createElement("div",{className:"child2"},[
    React.createElement("h1",{},"i'am h1 tag"),
    React.createElement("h2",{},"i'am h2 tag")
 ])]);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);