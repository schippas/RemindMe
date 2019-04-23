import React, { Component } from "react";
import "./createEvent.css";

class CreateEvent extends Component {
  state = {};

  handleReturn() {
    window.location.replace("/events");
  }

  handleSubmit() {
    console.log("submitting event");
    window.location.replace("/events");
  }

  loginReturn() {
    window.location.replace("/");
  }

  render() {
    return (

      <div className="pg_bgd">

          <h1 className ="headerBar"> RemindMe </h1>

            <div className="options_bar">
                
                  <button id="create_event_btn" className="option_bar_button"> Create Event</button>
                  <button id="return_main_btn" className="option_bar_button2" onClick={this.handleReturn}> Return to Main Events Page </button>
                  <button id="login/signup" className="option_bar_button3" onClick={this.loginReturn}> Login/Signup </button>

            </div>


        {/* <div className="box">

                <h1>Event Details</h1>

                <p className="inside_the_box"> Event Name: </p>
                   <input type="text" id="eventName" />

                <p>Event Date:</p>
                    <input type="date" id="eventDate" />
              
                <p>Event Time:</p>
                   <input type="time" id="eventTime" />

                <p>Event Description:</p>
                    <input className= "TextBox" type="text" id="eventDetails" size="100" />

                <div>
                  <button onClick={this.handleSubmit}>Create Event</button>
                </div>

        </div> */}


      </div>
    );
  }
}

export default CreateEvent;
