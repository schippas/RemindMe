import React, { Component } from "react";
import "./createEvent.css";

class CreateEvent extends Component {
  state = {};

  handleReturn() {
    window.location.replace("/events");
  }

handleSubmit() {
	console.log("submitting event");
	var event_name = document.getElementById("eventName").value;
	var event_info = document.getElementById("eventDetails").value;
	var event_date = document.getElementById("eventDate").value;
	var event_time = document.getElementById("eventTime").value;
	var user_id = localStorage.account;

     	document.getElementById('eventName').value = "";
     	document.getElementById('eventDetails').value = "";
     	document.getElementById('eventDate').value = "";
     	document.getElementById('eventTime').value = "";
    //window.location.replace("/events");
	var data = JSON.stringify({"event_name":event_name, "event_info":event_info, "event_date":event_date, "event_time":event_time, "user_id":user_id});

	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "/api/createEvent", true);
     	xhttp.setRequestHeader("Content-Type", "application/json");

xhttp.send(data);
};

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



      <div className="logo">
        <div className={"bannerStyle"}>
          <h1 className={"float-left-child"}>RemindMe</h1>
        </div>
        <div className={"float-right-child"}>
          <button>Create Event</button>
          <button onClick={this.handleReturn}>
            Return to Main Events Page
          </button>
          <button onClick={this.loginReturn}>Login/Signup</button>
        </div>
        <div className={"box"}>
          <h1 className = "create_event_title">Event Details</h1>

          <div>Event Name:</div>
          <input className= "input3" type="text" id="eventName" />

          <div>Event Date:</div>
          <input className= "input3" type="date" id="eventDate" />

          <div>Event Time:</div>
          <input className= "input3" type="time" id="eventTime" />

          <div>Event Description:</div>
          <input className= "input3" type="text" id="eventDetails" size="100" />
          <div>
            <button onClick={this.handleSubmit}>Create Event</button>
          </div>
        </div>

      </div>
    );
  }
}

export default CreateEvent;
