const request = require("request");
const uuid = require("uuid/v4");

module.exports = (app) => {

	app.post('/signup', function(req, res) {
		if(!req.body || !req.body.username || !req.body.password || !req.body.email){
			console.log("Missing field in sign up!");
			return res.sendStatus(400)		//need ;?
		}
		console.log("hello");
		var username = req.body.username
		var password = req.body.password
		var email = req.body.email
		var userid = uuid()
		
		sql.query( 
			'INSERT INTO account (user_id, username, password, email) VALUES ( ?, ?, ?, ? )', 
			[ userid, username, password, email ], 
			function(err, rsql){
				console.log('ok";
			}
		);	
	});


}
