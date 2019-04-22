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
          <h1>Event Details</h1>

          <p>Event Name:</p>
          <input type="text" id="eventName" />
          <p>Event Date:</p>
          <input type="date" id="eventDate" />
          <p>Event Time:</p>
          <input type="time" id="eventTime" />

          <p>Event Description:</p>
          <input type="text" id="eventDetails" size="100" />
          <div>
            <button onClick={this.handleSubmit}>Create Event</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEvent;
