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

  onClickLogin()
  {
     var email = document.getElementById('userEmail').value;
     var password = document.getElementById('userPwd').value;

     document.getElementById('userPwd').value = "";
     document.getElementById('userEmail').value = "";

     var obj = JSON.stringify({"email":email, "password":password});

     var xhttp = new XMLHttpRequest();
     xhttp.open("POST", "/api/login" , true);
     xhttp.setRequestHeader("Content-Type", "application/json");
     xhttp.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200) {
       
          var response = JSON.parse(this.responseText);
          console.log(response);

          if (response.status === 'okay') {
            localStorage.token = response.token;
            localStorage.account = response.account;
            window.location.replace("/profile/" + response.account)
          }
        }
     };
     xhttp.send(obj);

  }

  onClickForgot()
  {
    var email_reset = document.getElementById('forgot_button').value;
    document.getElementById('forgot_button').value = "";

    var obj = JSON.stringify({"email":email_reset});

     var xhttp = new XMLHttpRequest();
     xhttp.open("POST", "/api/reset_password" , true);
     xhttp.setRequestHeader("Content-Type", "application/json");
     xhttp.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200) {
       
          var response = JSON.parse(this.responseText);
          console.log(response);

        }
     };
     xhttp.send(obj);


  }

  render() {
    return (
      <div>
        <h1 className = "login_title">Log In </h1>
  
        <form>
          <fieldset>
            <p>
              <label className= "login_fields"> Email: </label>
              <input type="text" id="userEmail" />
            </p>

            <p>
              <label className= "login_fields"> Password: </label>
              <input type="password" id="userPwd" />
            </p>

          </fieldset>
       
        </form>

        <div>
      
          <button className= "submit_button" id="login_button" onClick={this.onClickLogin}> Login </button>
          <button className= "submit_button" id="forgot_button" onClick={this.onClickForgot}>Forgot password</button>

        </div>

      </div>
    );
  }
}

export default Login;
