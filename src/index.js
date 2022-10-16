// first import React && ReactDom dependencies
import React from "react";
import ReactDom from "react-dom";
// ReactDom package provides DOM specific methods
// that can be used at top level of app
import App from "./components/App";

// render() : only render one html element
// render App component(App.jsx)
ReactDom.render(<App />, document.getElementById("root"));
