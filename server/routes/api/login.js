const request = require("request");
const uuid = require("uuid/v4")

module.exports = (app) => {

app.post('/api/login', function(req, res) {

	//verifies all fields are filled
	if(!req.body || !req.body.email || !req.body.password ){
            console.log( 'Missing Field' )
            return res.sendStatus(400)
        }
	
	//parses values from request, use email instead of username.
        const email = req.body.email
        const password = req.body.password

        sql.query( 'SELECT id, password FROM accounts WHERE email=?;', [ email ],
        	function ( err, rsql ){
                if ( err ){
                	console.log( "sqlerror: ", err );
                	res.json({"status":"fail","reason":"sql error"});
                }
                if ( rsql.length > 0 ){
                	var account = rsql[0];

                    	if ( password === account.password ){
                        	console.log( "Correct password for " + email );
                        	res.json({"status":"okay","account":account.id})
                    	}else{
                        	console.log( "Incorrect password for " + email );
                        	res.json({"status":"fail","reason":"incorrect password"})
                    	}
		}else{
                    console.log( "No account for " + email );
                    res.json({"status":"fail","reason":"account does not exist."})
                }
         	}
	);
});



}
