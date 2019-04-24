const uuid = require("uuid/v4")

module.exports = (app) => {

app.post('/api/email', function(req, res){

	if(!req.body || !req.user_id){
		console.log("Missing Field for email!");
		return res.sendStatus(400)
	}

	const user_id = req.body.user_id
	
	//sql query to find email address, and send email.
	sql.query( 'SELECT email, username FROM accounts WHERE id=?;', [user_id],
		//functon(err, rsql){
		//	if(err){
		//		console.log("email failed", err);
		//		res.json({"status":"fail", "reason":"sql error"});
		//	}else{
				
		//	}
			
					
		//}
	
	);


})

}
