import React, { Component } from "react";
import "./logoBanner.css";

class Login extends Component {
  state = {
    loginClicked: false
  };

  authenticateLogin() {
    let email = document.getElementById("userEmail");
    let pword = document.getElementById("userPwd");
    console.log(email);
    console.log(pword);
  }

  handleLogIn() {
    console.log("handle log in");
    this.authenticateLogin();
  }

  render() {
    return (
      <div className={"backStyle"}>
        <h1>Log In: </h1>
        <form>
          <fieldset>
            <p>
              <label>Email: </label>
              <input type="text" id="userEmail" />
            </p>
            <p>
              <label>Password: </label>
              <input type="password" id="userPwd" />
            </p>
          </fieldset>
          <button onClick={this.handleLogIn}>Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;
