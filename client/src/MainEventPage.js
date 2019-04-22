import React, { Component } from "react";
import { withRouter } from "react-router";
import "./mainEventPage.css";

class MainEventPage extends Component {
  handleClickEvent() {
    //this.setState({ createNewEvent: true });
    console.log("create event redirect");
    window.location.replace("/create");
  }

  state = {
    createNewEvent: false,
    events: [
      //fetch events here
    ]
  };

  render() {
    return (
      <div>
        <div className={"bannerStyle"}>
          <h1>RemindMe *Insert logo here*</h1>
        </div>
        <div className={"createEventStyle"}>
          <button onClick={this.handleClickEvent}>Create Event Now</button>
        </div>
        <div className={"eventStyle"}>Upcoming Events:</div>
      </div>
    );
  }
}

export default withRouter(MainEventPage);