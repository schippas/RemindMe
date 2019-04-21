import React, { Component } from "react";

class Login extends Component {
  state = {};

  handleLogIn() {
    console.log("handle log in");
  }

  render() {
    return (
      <div>
        <h1>Log inkdfnn: </h1>
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
        </form>
        <button onClick={this.handleLogIn}>Log In</button>
      </div>
    );
  }
}

export default Login;
