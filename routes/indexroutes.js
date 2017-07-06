
var express = require("express");
var router = express.Router();
var User = require('../models/user.js');


//routing to home

router.get('/', function(req, res,next){
	res.render('index', {title: 'Express'});
});


//logging in

router.post('/', function(req, res,next){
	var username = req.body.username;
	var password = req.body.password;

		if (err){
				console.log(err);
				return res.status(500).send();
			}
			if (!user){
				return res.status(404).send();
		}

		else {

			res.res.user();
		}
});

//posting new user

router.post('/register', function(requ,res,next){
	var username = req.body.username;
	var password = req.body.password;
	var email = req.body.email;

	var newUser = new User();
		newUser.username = username;
		newUser.password = username;
		newUser.save(function (err,savedUser){
			if (err){
				console.log(err);
				return res.status(500).send();
			}

			return res.status(200).send();
		});
});

module.exports=router;