//Using Vanilla JS
const heading = document.createElement("h1");
heading.innerText = "I am created with Vanilla JS dynamically";
heading.className="headingJS";
document.body.append(heading);

//React Element creation 
const element = React.createElement(
  "div",
  {id:"parent"},
  [
    React.createElement(
      "h1",
      { id: "child1" },
      "child1 with Reactjs"
    ),
    React.createElement(
      "h1",
      { id: "child2" },
      "child2 with Reactjs"
    )
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

// In this my react element is printed first then vanilla js one
