import React from "react";
import "./App.css";
import ComponentOne from "./Components/ComponentOne";
import ComponentTwo from "./Components/ComponentTwo";
import ComponentThree from "./Components/ComponentThree";

const App = (props) => {
  return (
    <div className="app">
      <h2>React Redux Sample App</h2>
      <ComponentOne />
      <ComponentTwo />
      <ComponentThree />
    </div>
  );
};

export default App;
