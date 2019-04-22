import React, { Component } from "react";
import "./logoBanner.css";

class Login extends Component {
  state = {};

handleLogIn() {
	console.log("handle log in");
	var email = document.getElementById('email_id').value;
	var password = document.getElementById('password_id').value;
	
     	document.getElementById('email_id').value = "";
     	document.getElementById('password_id').value = ""; 

	var data = JSON.stringify({"email":email, "password":password});

	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "/api/login", true);
     	xhttp.setRequestHeader("Content-Type", "application/json");

xhttp.send(data);
};
  render() {
    return (
      <div>
        <h1 className = "login_title">Log In </h1>

            <div>
              <label className= "login_fields"> Email: </label>
              <input className='inputs' type="text" id="email_id" />
            </div>

            <div>
              <label className= "login_fields"> Password: </label>
              <input className='inputs' type="password" id="password_id" />
            </div>



        <div>
      
          <button className= "submit_button" id="login_button" onClick={() => this.handleLogIn()}> Login </button>{' '}
          <button className= "submit_button" id="forgot_button" onClick={() => this.handleLogIn()}>Forgot password</button>{' '}

        </div>

      </div>
    );
  }
}

export default Login;
