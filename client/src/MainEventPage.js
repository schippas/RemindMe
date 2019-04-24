import React, { Component } from "react";
import { withRouter } from "react-router";
// import "./mainEventPage.css";
import "./createEvent.css";
import Calendar from "react-calendar";

class MainEventPage extends Component {

    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    state = {
        date: new Date(),
    }

    handleClickEvent() {
        //this.setState({ createNewEvent: true });
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
    }

    state = {
        createNewEvent: false,
        events: [
            //fetch events here
        ]
    };

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
                <Calendar onChange={this.onChange} value={this.state.date} calendarType="US"></Calendar>
                <div className="box23">
                    <h1 className="titleBar">Your Weekly Dose of Events</h1>

                <div className="each-box">
                       <button className="togglebtn" onClick={this.handleClick}>
                          {this.state.isToggleOn ? 'Interested' : 'Not Interested'}
                      </button>          
                      <div>
                          <h1 className="inBoxEventDescription">fasfasd</h1>
                      </div>

                    <div>
                        <h3 className="mini_script">Subscribe(d)</h3>
                    </div>{}

                    <div>
                        <input className="which_week" type="text" id="weekBox" value={this.state.date} />
                    </div>

                    <div className="each-box">

                        <button className="togglebtn" onClick={this.handleClick}>
                            {this.state.isToggleOn ? 'Interested' : 'Not Interested'}
                        </button>

                        <h1 className="inBoxEventDescription">fasfasd</h1>

                    </div>

                    {/* <div className="each-box2">
                  
                    <button className="togglebtn" onClick={this.handleClick}>
                              {this.state.isToggleOn ? 'Interested' : 'Not Interested'}
                    </button>
                    
                    <h1>fasfasd</h1>


                </div>

            
         </div>



      </div>
    );
  }

                </div> */}
                </div>

//             </div>






        );
    }

}

export default withRouter(MainEventPage);
