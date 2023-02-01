var express = require('express');
const { response } = require('../app');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next){

	var query = "SELECT * FROM member_master WHERE member_id = 1";

	database.query(query, function(error, data){

		if(error)
		{
			response.render("not working"); 
		}
		else
		{
			 response.json({title:'USER DETAILS', action:'list', sampleData:data});
			
		}

	});

});

router.post('/post',(req,res)=>{
	const member_name =req.body.member_name;
	const member_id =req.body.member_id;
	const age =req.body.age;
	const gender =req.body.gender;
	const address =req.body.address;
	const mcategory_id =req.body.mcategory_id;
	const password =req.body.password;
  
	connection.query('insert into member_master values (?,?,?,?,?,?,?)', [member_name, member_id, age, gender,address,mcategory_id, password], (err, result)=>{
	  if(err)
	  {
		console.log("Error");
	  }
	  else 
	  {
		response.json({title:'USER DETAILS', action:'list', login:data});
	  }
	})
  
   
   })
// Saharsh Code End Here. The routes for the sample data are here.	
module.exports = router;