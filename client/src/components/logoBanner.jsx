import React, { Component } from "react";
import Login from "./login";
import SignUp from "./signup";
import "./logoBanner.css";

class LogoBanner extends Component {
<<<<<<< HEAD

onSignUp(){
  
}

=======
>>>>>>> 34523e1866939ce667de13a95332847f7e7fa522
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
