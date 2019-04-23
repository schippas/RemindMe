import React, { Component } from "react";
import Login from "./login";
import SignUp from "./signup";
import "./logoBanner.css";

class LogoBanner extends Component {

onSignUp(){
  
}

  render() {
    return (
      
      <div className= "page_background"> 

          <h1 className ="headerBar">RemindMe</h1>

          <div className = "box"> 
              <div className = "yellow_line"> </div>
                  
                <div className = "login_left">   
                         <Login />
                </div>      

                <div className = "signup_right">
                            <SignUp />
                </div>     
          
          </div>

      </div>
   
   
   
   
   );
  }
}

export default LogoBanner;
