import React, { Component } from "react";
import "./createEvent.css";

class CreateEvent extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className={"bannerStyle"}>
          <h1 className={"float-left-child"}>RemindMe *Logo here*</h1>
          <button className={"float-right-child"}>
            Return to Main Events Page
          </button>
        </div>
        <div className={"formStyle"}>
          <h1>Create an Event:</h1>
          <form>
            <fieldset>
              <p>Enter a Date:</p>
              <input type="date" id="eventDate" />
              <p>Give a Name for the Event</p>
              <input type="text" id="eventName" />
              <p>Provide Details for the Event:</p>
              <input type="text" id="eventDetails" size="100" />
            </fieldset>
            <button>Submit Event</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateEvent;
