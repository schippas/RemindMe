const request = require("request");
const uuid = require("uuid/v4")

module.exports = (app) => {

app.post('/api/createEvent', function(req, res) {

	//verifies all fields are filled
	if(!req.body || !req.body.event_name || !req.body.event_date || !req.body.event_time || !req.body.event_info || !req.body.user_id){
            console.log( 'Missing Field' )
            return res.sendStatus(400)
        }

	//parse values from request.
	const event_name = req.body.event_name		//2
	const event_date = req.body.event_date		//4
	const event_time = req.body.event_time		//5
	const event_info = req.body.event_info		//3
	const user_id = req.body.user_id		//2
	console.log(user_id);

	//generates a unique event id that can be used when referencing the event.
	const event_id = uuid()		//1

	//sends an sql query to create the Event in the database, using the parsed information.
        sql.query( 'INSERT INTO events (event_id, event_name, event_info, event_date, event_time) VALUES ( ?, ?, ?, ?, ?)', [ event_id, event_name, event_info, event_date, event_time ], 
		function( err, rsql ) {
               		if ( err ){
                        	console.log( "sql error: ", err );
                        	es.json({"status":"fail","reason":"sql error"});
                	}else{
                    		console.log( "Event Created!" )
                    		res.json({ "status":"okay","event":event_id});

                	}
            	}
        );

	//sends an sql query to create the link the user and event in the database, using the parsed information.
        sql.query( 'INSERT INTO attendees (event_id, user_id) VALUES ( ?, ?)', [ event_id, user_id ]
        );

})

}
