import React, { Component } from "react";

import Login from "./login";

import SignUp from "./signup";

class LogoBanner extends Component {
  backStyle = {
    backgroundColor: "aqua"
  };

  render() {
    // console.log("fuck this fucking pice of shite");
    return (
      <div style={this.backStyle} class="row">
        <div class="column" className="m-5">
          <Login />
        </div>
        <div class="column" className="m-5">
          <SignUp />
        </div>
      </div>
    );
  }
}

export default LogoBanner;
