import React, { Component } from "react";
import Login from "./login";
import SignUp from "./signup";
import "./logoBanner.css";

class LogoBanner extends Component {

onSignUp(){
  
}

  render() {
    return (
      
      
      <div className="logo">
  
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
