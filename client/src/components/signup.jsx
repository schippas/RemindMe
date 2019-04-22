import React, { Component } from "react";
import "./logoBanner.css";

class SignUp extends Component {
  state = {};

  // SignUpPress() {
  //   window.location.replace("/create");
  // }

handleSignUp(){
	var email = document.getElementById('email_id1').value; 
    	var password = document.getElementById('password_id1').value; 
    	var username = document.getElementById('username_id1').value; 

     	document.getElementById('username_id1').value = ""; 
     	document.getElementById('password_id1').value = ""; 
     	document.getElementById('email_id1').value = ""; 

     	var data = JSON.stringify({"username":username, "password":password, "email":email});
     	var xhttp = new XMLHttpRequest();
     	xhttp.open("POST", "/api/signup" , true);
     	xhttp.setRequestHeader("Content-Type", "application/json");

       xhttp.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200) {
       
          var response = JSON.parse(this.responseText);
          console.log(response);
          
          if (response.status === 'okay') {
            window.location.replace("/create");
          }
          else
          {
            localStorage.account = ""
            // localStorage.token = ""
          }
        }
     };

       xhttp.send(data);

      
};


  render() {
    return (
	<div>  
        <h1 className= 'signup_title' >Sign Up</h1>

          <div>
            <label className='signup_fields'> Username:   </label>
            <input className='inputs2' type="text" id="username_id1"/>
        </div>

        <div>
            <label className='signup_fields' > Email address:  </label>
            <input className='inputs2' type="text" id="email_id1"/>
        </div>

        <div>
            <label className='signup_fields' > Password:  </label>
            <input className='inputs2' type="password" id="password_id1"/>
        </div>

        <div>
          	<button className="submit_button" id ="signup_button" onClick={() => this.handleSignUp()}>Submit</button>{' '}
          </div>
        
      </div>
    );
  }
}

export default SignUp;
