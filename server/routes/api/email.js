const uuid = require("uuid/v4")

module.exports = (app) => {

//app.post('/api/getUser', function(req, res){
//	if(!req.body || !req.user_id){
//		console.log("Missing Field!");
//		return res.sendStatus(400)
//	}
	
//});

app.post('/api/email', function(req, res){

	if(!req.body || !req.body.user_id){
		console.log("Missing Field for email!");
		return res.sendStatus(400)
	}

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

			sql.query( "SELECT event_name, event_info, event_date, event_time FROM events WHERE event_id= ?;", [event_id],
	   			function( err, rsql ){
					if(err){
						console.log("email failed", err);
						res.json({"status":"fail", "reason":"sql error"});
					}else{
						console.log(event_id);
						
						event_name = rsql[0].event_name;
						event_info = rsql[0].event_info;
						event_date = rsql[0].event_date;
						event_time = rsql[0].event_time;
						//console.log(rsql[0]);
						
						emailer.sendMail({
							from: '"RemindMe" <remindme.252.noreply@gmail.com',
							to: email,
							subject: "Event Notification",
							text: ("You have registered for "+ event_name + ": " + event_info + " " + event_date + " " + event_time)
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
