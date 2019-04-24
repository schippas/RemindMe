import React, { Component } from "react";
import { withRouter } from "react-router";
// import "./mainEventPage.css";
import "./createEvent.css";
import Calendar from "react-calendar";

class MainEventPage extends Component {


    /*Event(e_id, e_name, e_info, e_date, e_time) {
        this.event_id = e_id;
        this.event_name = e_name;
        this.event_info = e_info;
        this.event_date = e_date;
        this.event_time = e_time;
        //this.isToggleOn = true;

    }*/


    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,

            //this.Event('2', 'CS', 'BIDC', 'Wed Apr 24', '1:00')

            //new Event('1', 'Bowling', 'At URR', 'Mon Apr 22', '5:15')
            events: [{ e_id: '1', e_name: 'Bowling Party', e_info: 'At the Union Rack & Roll', e_date: 'Mon Apr 22', e_time: '1:00 PM' },
            { e_id: '2', e_name: 'CS', e_info: 'At BIDC', e_date: 'Wed Apr 24', e_time: '2:00 AM' },
            { e_id: '3', e_name: 'Final', e_info: 'Elliot Hall', e_date: 'Fri Apr 26', e_time: '8:00 AM' }],
            date: new Date(),
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }


    handleClickEvent() {
        console.log("create event redirect");
        window.location.replace("/create");
    }

    handleClick() {
        this.setState(function (prevState) {
            return { isToggleOn: !prevState.isToggleOn };
        });
    }

    onMainEventClick() {
        window.location.replace("/events");
    }

    onLoginClick() {
        window.location.replace("/");
    }

    onChange = (date) => {
        this.setState({ date })
        console.log(this.date);
    }



    loginReturn() {
        window.location.replace("/");
    }

    handleReturn() {
        window.location.replace("/events");
    }

    eventReturn() {
        window.location.replace("/create");
    }

    render() {
        return (

            <div className="pg_bgd">
                <h1 className="headerBar"> RemindMe </h1>

                <div className="options_bar">
                    <button id="create_event_btn" className="option_bar_button" onClick={this.eventReturn}>
                        Create Event
                    </button>

                    <button
                        id="return_main_btn"
                        className="option_bar_button2"
                        onClick={this.handleReturn} >
                        Return to Main Events Page
                        </button>

                    <button
                        id="login/signup"
                        className="option_bar_button3"
                        onClick={this.loginReturn}>
                        Login/Signup
                        </button>

                </div>

                {/*<div> was here*/}
                <Calendar className="calendarDiv" onChange={this.onChange} value={this.state.date} calendarType="US">

                </Calendar>
                {/*</div> was her*/}

                <div className="box23">
                    <h1 className="titleBar">Your Weekly Dose of Events</h1>

                    <div>
                        <h3 className="mini_script">Subsribe(d)</h3>
                    </div>

                    <div>
                        <input className="which_week" type="text" id="weekBox" value={this.state.date} />
                    </div>
                    <div>
                        <ul>
                            {
                                this.state.events.map((event) => (
                                    <li key={event}>
                                        <div className="each-box">
                                            <button className="togglebtn" onClick={this.handleClick}>
                                                {this.state.isToggleOn ? 'Interested' : 'Not Interested'}
                                            </button>
                                            <h1 className="inBoxEventDescription">{event.e_name + ': ' + event.e_info + ' ' + event.e_date + ' at ' + event.e_time}</h1>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                </div>

            </div>
        );
    }

}

export default withRouter(MainEventPage);
