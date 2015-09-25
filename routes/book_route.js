//require express
var express = require('express');
//create a router object
var router = express.Router();

//require mongoose
/*commented out for testing
var mongoose = require('mongoose'); */
var Book = require('../models/Book.js');

/* GET /books listing. */
router.get('/', function(req, res, next) {
	// get all Books
	Book.find(function (err, Books) {
	    if (err) 
	    	console.log("get error: " + err);
	    console.log("get success: " + Books);
	    return;
	});
});


/* POST /books */
router.post('/', function(req, res, next) {
  	Book.create(req.body, function (err, post) {
	    if (err) 
	    	console.log("post error: " + err);
	    console.log("post success: " + post);
	    return;
  	});
});


/* GET /Books/id */
router.get('/:id', function(req, res, next) {
  	Book.findById(req.params.id, function (err, post) {
	    if (err) 
	    	console.log("getId error: " + err);
	    console.log("getId success: " + post);
	    return;
  	});
});

/* DELETE /Books/:id */
router.delete('/:id', function(req, res, next) {
  	Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
	    if (err) 
	    	console.log("delete error: " + err);
	    console.log("delete success: " + post);
	    return;
  	});
});

module.exports = router;