import React, { Component } from "react";
import { withRouter } from "react-router";
import "./mainEventPage.css";

class MainEventPage extends Component {
  handleClickEvent() {
    //this.setState({ createNewEvent: true });
    console.log("create event redirect");
    window.location.replace("/create");
  }

  onMainEventClick() {
    window.location.replace("/events");
  }

  onLoginClick() {
    window.location.replace("/");
  }

  state = {
    createNewEvent: false,
    events: [
      //fetch events here
    ]
  };

  render() {
    return (
      <div className="logo">
        <div className={"bannerStyle"}>
          <h1>RemindMe</h1>
        </div>
        <div>
          <button onClick={this.onMainEventClick}>Main Event Page</button>
          <button onClick={this.handleClickEvent}>Create Event Now</button>
          <button onClick={this.onLoginClick}>Login/Signup</button>
        </div>
        <div className={"box"}>
          <div className={"calendar"}>Calendar Here</div>
          <div className={"eventList"}>Event List Here</div>
        </div>
      </div>
    );
  }
}

export default withRouter(MainEventPage);
