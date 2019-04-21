import React, { Component } from "react";

class SignUp extends Component {
  state = {};

  handleSignUp() {
<<<<<<< HEAD
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
     
     //var response = JSON.parse(this.responseText);
     //console.log(response);
     xhttp.send(obj);
=======
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
>>>>>>> 888486e2d261c07480b30890e84baa38eae213e7
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
