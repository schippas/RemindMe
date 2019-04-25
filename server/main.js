const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mysql = require('mysql')
const nodemailer = require('nodemailer')
const port = 3070

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

require('./routes')(app);

app.get('/', function (req, res) {
    out = "<h1>RemindMe backend!</h1><br>";

    app._router.stack.forEach(function(r)
    {
        if (r.route && r.route.path && r.route.path != "/") out += r.route.path + "<br>"
    });

    res.send( out )
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

global.sql = dataBase;

global.emailer = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'remindme.252.noreply@gmail.com',
		pass: 'RemindMeCS252!'
	}
});

//Listens on port
app.listen(port, (err) => {
	if (err) { console.log( err ); };
	console.log('Backend listening on port ${port}.')	//need to print port properly
});


