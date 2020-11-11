var express = require('express');
var bodyParser = require('body-parser');
var todoController = require('./controllers/todoController');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false});

var jsonfile = require('jsonfile');    
var file = 'writeMe.json'


// sets up the template engine
app.set('view engine', 'ejs'); 
// serves up static files 
app.use('/assets', express.static('assets'));
// app.use('public', express.static('./public'));


// fires controllers
todoController(app);    

app.get('/', function(req, res){
    res.render('index');
});

//contact page

app.get('/contact', function(req, res){
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, function(req, res){
    console.log(req.body);
    jsonfile.writeFileSync(file, {data: req.body});
    res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', function(req, res){
    var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile', {person: req.params.name, data: data});
});


// Listens to port
app.listen(3000);

