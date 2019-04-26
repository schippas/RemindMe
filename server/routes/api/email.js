const uuid = require("uuid/v4")

module.exports = (app) => {


//Sends emails to users for all of the events they are registered for.
app.post('/api/email', function(req, res){

	//Check that the correct values are provided
	if(!req.body || !req.body.user_id){
		console.log("Missing Field for email!");
		return res.sendStatus(400)
	}

	//Create some variables for use later on
	const user_id = req.body.user_id;
	var username;
	var email;
	var event_id;
	var event_name;
	var event_info;
	var event_date;
	var event_time;
	
	//sql query to find email address, and send email.
	 sql.query( "SELECT email, username FROM accounts WHERE id=?;", [ user_id ],
            function( err, rsql ){
			if(err){
				console.log("email failed", err);
				res.json({"status":"fail", "reason":"sql error"});
			}else{
				//console.log("hello");
				username = rsql[0].username;
				email = rsql[0].email;
				console.log(email);
			}		
		}
	
	);

	//Still part of email call. Finds events where user is registered
	sql.query( "SELECT * FROM attendees WHERE user_id=?;", [user_id],
	function( err, rsql ){
		if(err){
			console.log("email failed", err);
			res.json({"status":"fail", "reason":"sql error"});
		}else{
		for( var i=0; i<rsql.length; i++){
			//console.log("goodbye");
			event_id = rsql[i].event_id;
			//console.log(rsql[0]);

			//sql query to get event information to be sent in email.
			sql.query( "SELECT event_name, event_info, event_date, event_time FROM events WHERE event_id= ?;", [event_id],
	   			function( err, rsql ){
					if(err){
						console.log("email failed", err);
						res.json({"status":"fail", "reason":"sql error"});
					}else{
						//console.log(event_id);
						
						//get data from database for email.
						event_name = rsql[0].event_name;
						event_info = rsql[0].event_info;
						event_date = rsql[0].event_date;
						event_time = rsql[0].event_time;
						//console.log(rsql[0]);
							
						//sends the email.
						emailer.sendMail({
							from: '"RemindMe" <remindme.252.noreply@gmail.com',
							to: email,
							subject: "Event Notification",
							text: ("You have registered for "+ event_name + " \nEvent Details: " + event_info + "\nDate and Time: " + event_date + " " + event_time)
						});
					}
           			}
	
			);
		}//for
		}
	}
	
	);

	


});

}
