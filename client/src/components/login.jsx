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
    //this.authenticateLogin();
  }

  render() {
    return (
      <div>
        <h1 className="login_title">Log In </h1>

        <form>
          <fieldset>
            <p>
              <label className="login_fields"> Email: </label>
              <input type="text" id="userEmail" />
            </p>

            <p>
              <label className="login_fields"> Password: </label>
              <input type="password" id="userPwd" />
            </p>
          </fieldset>
        </form>

        <div>
          <button
            className="submit_button"
            id="login_button"
            onClick={this.handleLogIn}
          >
            {" "}
            Login{" "}
          </button>
          <button
            className="submit_button"
            id="forgot_button"
            onClick={this.handleLogIn}
          >
            Forgot password
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
