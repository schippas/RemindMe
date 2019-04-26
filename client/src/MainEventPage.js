import React, { Component } from "react";
import { withRouter } from "react-router";
// import "./mainEventPage.css";
import "./createEvent.css";
import Calendar from "react-calendar";

class MainEventPage extends Component {


constructor(props) {
        super(props);
        this.state = { 
            value: {},
            events:[],
            date: new Date(),
            isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
	this.handleClick = this.handleClick.bind(this);
}



addEvent = ( updateVal ) => {
        this.setState(state => {
            const events = state.events.concat(updateVal);
            return {
                events,
                value:{},
            };
        })
};

    handleClickEvent() {
        console.log("create event redirect");
        window.location.replace("/create");
    }

    handleClick(event_id1) {
	console.log("interested");
		
	//var event_id1 = document.getElementById("event_id").value;
	//var user_id1 = document.getElementById("user_id").value;

	var data = JSON.stringify({
		"event_id": event_id1,
		"user_id": localStorage.account
	});

        console.log(data);
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "/api/RSVP", true);
        xhttp.setRequestHeader("Content-Type", "application/json");

        xhttp.send(data);

    	var xhttp2 = new XMLHttpRequest();
    	xhttp2.open("POST", "/api/email", true);
    	xhttp2.setRequestHeader("Content-Type", "application/json");

    	xhttp2.send(data);

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

componentDidMount( ){
       

        const updateEvent = this.addEvent;
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "/api/listEvents" , true);
        console.log(this.readyState);

        xhttp.setRequestHeader("Content-Type", "application/json");

        xhttp.onreadystatechange = function (){
            if ( this.readyState === 4 && this.status === 200 ){
                var response = JSON.parse(this.responseText);
                console.log(response);

                if ( response.status === 'okay' ){
                    console.log(response.events);
                    for ( var i = 0; i < response.events.length; i++ ){
                        var event = response.events[i]
                        updateEvent(event)
                    }
                }
            }
        };
        xhttp.send(null);
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
                            <input className="which_week" type="text" id="weekBox" value={this.state.date} />
                        </div>

                        <div>
                            <h3 className="mini_script">Subscribe(d)</h3>
			</div>

			{
                            this.state.events.map(({event_id, event_name, event_info, event_date, event_time}) =>{
                                return(
                                    
                                        <div className="each-box2">

                                                <button className="togglebtn" onClick={() => this.handleClick(event_id)}>
                                                    {this.state.isToggleOn ? 'Interested' : 'Interested'}
                                                </button>

                                                <div> 
                                                     <h1 className="inBoxEventDescription">{event_name.toString() + ': ' + event_date.toString() + ' at ' + event_time.toString()}</h1>
                                                </div>

                                              

                                        </div>

                                )
                            })
}

                </div>

            </div>
        );
    }

}

export default withRouter(MainEventPage);
