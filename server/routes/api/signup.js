const request = require("request");
const uuid = require("uuid/v4")

module.exports = (app) => {

app.post('/api/signup', function(req, res) {
	
	//verifies all the fields on the signup form have been filled, other no account is made.
	if(!req.body || !req.body.username || !req.body.password || !req.body.email ){
            console.log( "Missng Field!" );
            return res.sendStatus(400)
        }

	//parses values from the request
        const username = req.body.username
        const password = req.body.password
        const email = req.body.email
	
	//generates a unique user id that can be used instead of relying on a username.
        const user_id = uuid();
 	
	//sends an sql query to create the acount in the database, using the parsed information.
        sql.query( 'INSERT INTO accounts (id, username, password, email) VALUES ( ?, ?, ?, ?)', [ user_id, username, password, email ], 
		function( err, rsql ) {
               		if ( err ){
                        	console.log( "sql error: ", err );
                        	es.json({"status":"fail","reason":"sql error"});
                	}else{
                    		console.log( "Account Created!" )
                    		res.json({ "status":"okay","account":user_id});
				request.post( "http://localhost:3070/api/send-verification", {json:{"account":user_id}} );
                	}
            	}
        );
})



}
