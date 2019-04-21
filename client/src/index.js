import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import "bootstrap/dist/css/bootstrap.css";

import LogoBanner from "./components/logoBanner";
import Counter from "./components/counter";
import Login from "./components/login";
import SignUp from "./components/signup";

//testing git push

//ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(<LogoBanner />, document.getElementById("root"));

//ReactDOM.render(<Login />, document.getElementById("root"));

//ReactDOM.render(<SignUp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
