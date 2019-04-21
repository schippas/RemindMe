import React, { Component } from "react";

class SignUp extends Component {
  state = {};

  handleSignUp() {
    console.log("sign up");
	var username = document.getElementById('userName').value;
	var email = document.getElementById('userEmail').value;
	var password = document.getElementById('userPwd').value;
	var data = JSON.stringify({"username":username, "password":password, "email":email});
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "/signup", true);
	xhttp.setRequestHeader("Content-Type", "application/json");
	//xhttp.onreadystatechange = function () {
		
	//};
	xhttp.send(data);
  }

  render() {
    return (
      <div>
        <h1>Sign Up: </h1>
        <form>
          <fieldset>
            <p>
              <label>Enter Your Name:</label>
              <input type="text" id="userName" />
            </p>
            <p>
              <label>Enter Your Email:</label>
              <input type="text" id="userEmail" />
            </p>
            <p>
              <label>Enter A Password:</label>
              <input type="password" id="userPwd" />
            </p>
          </fieldset>
        </form>
        <button onClick={this.handleSignUp}>Sign Up</button>
      </div>
    );
  }
}

export default SignUp;
