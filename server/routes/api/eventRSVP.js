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
	sql.query( 'INSERT INTO attendees (event_id, user_id) VALUES (?, ?)', [event_id, user_id]);


});


//handles returning events to the frontend.
app.post('/api/listEvents', function(req,res) {
	
	



});


}

