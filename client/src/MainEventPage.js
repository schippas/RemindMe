import React, { Component } from "react";
import { withRouter } from "react-router";
//import Calendar from "react-calendar";
import "./mainEventPage.css";
//                      <Calendar onChange={this.onChange} value={this.state.date} calendarType="US"></Calendar>

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
        date: new Date(),
        createNewEvent: false,
        events: [
            //fetch events here
        ]
    };

    onChange = date => this.setState({ date })

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
                    <div className={"calendar"}>Calendar Here

                    </div>
                    <div className={"eventList"}>Event List Here</div>
                </div>
            </div>
        );
    }
}

export default withRouter(MainEventPage);
