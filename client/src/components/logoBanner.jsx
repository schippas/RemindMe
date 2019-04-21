import React, { Component } from "react";
import Login from "./login";
import SignUp from "./signup";
import "./logoBanner.css";

class LogoBanner extends Component {
  render() {
    return (
      <div className="logo">
        <div className="backStyle">
          <Login />
          <SignUp />
        </div>
      </div>
    );
  }
}

export default LogoBanner;
