import React, { Component } from "react";
import "./login.css";

class SignUp extends Component {
  state = {};

  handleSignUp() {
    var email = document.getElementById('userEmail').value; 
    var password = document.getElementById('userPwd').value; 
    var username = document.getElementById('userName').value; 

    document.getElementById('userEmail').value = ""; 
    document.getElementById('userPwd').value = ""; 
    document.getElementById('userName').value = ""; 
    
    var obj = JSON.stringify({"username":username, "password":password, "email":email});

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/signup" , true);
    xhttp.setRequestHeader("Content-Type", "application/json");
     
    //  var response = JSON.parse(this.responseText);
    //  console.log(response);
     xhttp.send(obj);
  }

  render() {
    return (
      <div className={"backStyle"}>
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
          <button onClick={this.handleSignUp}>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
