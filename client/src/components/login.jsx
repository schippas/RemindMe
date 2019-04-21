import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  state = {};

  handleLogIn() {
    console.log("handle log in");
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
