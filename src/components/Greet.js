import React from "react";

// function Greet() {
//   return <h1>Good morning!!!</h1>;
// }
const Greet = (props) =>
  //  <h1>Good morning</h1>;
  {
    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement(
    //     "h1",
    //     { id: "greet", className: "greetClass" },
    //     "Good Morning"
    //   )
    // );
    return <h1>Good morning {props.name}</h1>;
  };
export default Greet;
