import React from "react";
import ReactDOM from "react-dom";
import "./CssMagic.css";
import "./bootstrap.css";
// import Index from "./components/Index.jsx";
import * as serviceWorker from "./serviceWorker";
import Routes from "./components/Routes";

ReactDOM.render(<Routes />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.register();
