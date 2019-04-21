import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import LogoBanner from "./components/logoBanner";
import MainEventPage from "./MainEventPage";
import CreateEvent from "./createEvent";

//testing git push
//testing taimoor

//ReactDOM.render(<CreateWebPage />, document.getElementById("root"));

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <div>
        <Route exact path="/" component={LogoBanner} />
        <Route exact path="/events" component={MainEventPage} />
        <Route exact path="/create" component={CreateEvent} />
      </div>
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
