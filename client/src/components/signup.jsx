import React, { Component } from "react";
import "./logoBanner.css";

class SignUp extends Component {
  state = {};

  onClickSignUp() {
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

        <div>
          <h1 className= "signup_title">Sign Up </h1>
                    
                <div>
                    <label className= "signup_fields"> Enter your Name: </label>
                    <input type="text" id="userName" />
                 </div>

                 <div>
                  <label className= "signup_fields2"> Enter your Email: </label>
                  <input type="text" id="userEmail" />
                </div>

                <div>
                  <label className= "signup_fields3"> Enter your Password: </label>
                  <input type="password" id="userEmail" />
                </div>

                <div> 
                  <button className= "submit_button" id="signup_button" onClick={this.onClickSignUp}> Sign Up </button>
                </div> 

              </div>
    );
  }
}

export default SignUp;
