require('../lib/db');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var projects2 = mongoose.model('projects2');


/* GET users listing. */

router.get('/ways/:id', function(req, res, next) {

	res.locals.text = req.params.id;
	projects2.find({疾病名稱:req.params.id}, function(err,datas,count){
		res.render('users/ways',{
			datas:datas
		});

	});
});

router.get('/defeat/:id', function(req, res, next) {
	res.locals.text = req.params.id;
	projects2.find({疾病名稱:req.params.id}, function(err,datas,count){
		res.render('users/defeat',{
			datas:datas
		});

	});
});

router.get('/intro/:id', function(req, res, next) {
  res.locals.text = req.params.id;
	projects2.find({疾病名稱:req.params.id}, function(err,datas,count){
		res.render('users/intro',{
			datas:datas
		});

	});
});

router.get('/infect/:id', function(req, res, next) {
  res.locals.text = req.params.id;
	projects2.find({疾病名稱:req.params.id}, function(err,datas,count){
		res.render('users/infect',{
			datas:datas
		});

	});
});

router.get('/map/:id', function(req, res, next) {
  res.locals.text = req.params.id;
	projects2.find({疾病名稱:req.params.id}, function(err,datas,count){
		res.render('users/map',{
			datas:datas
		});

	});
});




module.exports = router;
