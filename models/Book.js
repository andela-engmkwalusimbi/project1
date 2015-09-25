//create a mongoose variable and require mongoose package
var mongoose = require('mongoose');

//create a schema using the new mongoose variable created
var BookSchema = new mongoose.Schema({
  title: {type:String, Unique:true},
  author: String,
  shelf: String,
  isbn:String,
});

//make the schema exportable
module.exports = mongoose.model('Book', BookSchema);