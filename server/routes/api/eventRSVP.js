const request = require("request");
const uuid = require("uuid/v4")

module.exports = (app) => {

//handles registering users for events
app.post('/api/RSVP', function(req,res) {

	//Verifies required fields are filled!
	if(!req.body || !req.body.event_id || !req.body.user_id){
		console.log('field missing for eventRSVP')
		return res.sendStatus(400)
	}
	
	//parse correct values from request!
	const event_id = req.body.event_id
	const user_id = req.body.user_id
	console.log(user_id)
	console.log(event_id)
	
	//send sql query to update event attendees
	sql.query( 'INSERT INTO attendees (event_id, user_id) VALUES (?, ?)', [event_id, user_id],	
		function( err, rsql ) {
               		if ( err ){
                        	console.log( "sql error: ", err );
                        	es.json({"status":"fail","reason":"sql error"});
                	}else{
                    		console.log( "RSVP worked!" )
                    		res.json({ "status":"okay","event":event_id});

                	}
            	}
	);

});


//handles returning events to the frontend.
app.post('/api/listEvents', function(req,res) {
	
	//should create array of events?
	sql.query('SELECT events.*',
		function( err, rsql ) {
               		if ( err ){
                        	console.log( "sql error in listEvents: ", err );
                        	res.json({"status":"fail","reason":"sql error"});
                	}else{
                    		console.log( "List Working?" )
                    		//res.json({ "status":"okay","event":event_id});
				var data = []
				for(var i = 0; i<rsql.length; i++){
					data.push({
						"event_id":rsql[i].event_id,
						"event_name":rsql[i].event_name,
						"event_info":rsql[i].event_info,
						"event_date":rsql[i].event_date,
						"event_time":rsql[i].event_time
					})
				}
				res.json({ "status":"okay","events":data});

                	}
            	}
	);
	


});


}

