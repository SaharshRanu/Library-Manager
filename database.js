const mysql = require('mysql');

var connection = mysql.createConnection({
  host: '127.0.0.1',               // Replace with your host name
  user: 'root',                    // Replace with your database username
  password: '123456789',           // Replace with your database password
  database: 'library_manager',     // Replace with your database Name
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else 
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;