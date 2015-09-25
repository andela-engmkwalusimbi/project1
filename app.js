//set up modules
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// set our port
var port = process.env.PORT || 8080;

// parse application/json 
app.use(bodyParser.json()); 
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 
// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));


//get mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bookStore', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

var books = require('./routes/book_route');
app.use('/books', books);

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);         
// shoutout to the user                     
console.log('book app listens on port ' + port);
// expose app           
exports = module.exports = app;