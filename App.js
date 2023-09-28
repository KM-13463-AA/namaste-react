import React from "react"
import ReactDOM from "react-dom/client";
import Headings from "./src/Headings";
import Header from "./src/Header";

// React Element using createElement
const headingUsingCreateElement = React.createElement(
  "div",
  {className:"title"},
  [
  React.createElement("h1",{},"Namaste React"),
  React.createElement("h2",{},"A beginner-friendly crash course"),
  React.createElement("h3",{},"by Akshay Saini")
]);

// React Element using Jsx
const headingUsingJsx = <div className="title">
  <h1>Namaste React</h1>
  <h2>A beginner-friendly crash course</h2>
  <h3>by Akshay Saini</h3>
</div>

//Main Component
const Body = () => (
  <div id="body">
    <Header />
    <Headings />
  </div>

);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body />);

