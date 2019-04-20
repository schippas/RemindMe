const express = require('express')
const mysql = require('mysql')
const port = 3070
const app = express()

//routing
app.get('/', function(req, res){
	res.send('backend')
});

//Creates a MySQL database connection. Database is hosted on AWS
var dataBase = mysql.createConnection({
	host: 'remindme.cwzozreqfxlo.us-east-1.rds.amazonaws.com',
	port: '3306',
	user: 'admin',
	password: 'RemindMe1!',
	database: 'RemindMe'
});

dataBase.connect(function(err){
	if(err){
		return console.error('MySQL error: ' + err.message);
	}
	console.log('Connected to the Database!');
});

//Listens on port
app.listen(port, (err) => {
	if (err) { console.log( err ); };
	console.log('Backend listening on port ${port}.')	//need to print port properly
});


