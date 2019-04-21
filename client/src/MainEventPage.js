import React, { Component } from "react";
import { withRouter } from "react-router";
import "./mainEventPage.css";

class MainEventPage extends Component {
  handleClickEvent() {
    console.log("create event redirect");
  }

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
