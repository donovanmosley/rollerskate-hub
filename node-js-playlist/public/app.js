// var events = require('events');
// var util = require('util');

// var Person = function(name){
//     this.name = name;
// };

// util.inherits(Person, events.EventEmitter);

// var james = new Person('james');
// var mary = new Person('mary');
// var ryu = new Person('ryu');
// var people = [james, mary, ryu];

// people.forEach(function(person){
//     person.on('speak', function(mssg){
//         console.log(person.name + ' said: ' + mssg);
//     });
// });

// james.emit('speak', 'hey dudes');
// ryu.emit('speak', 'I want a curry');

// reading and writing to a file framework:
// var fs = require('fs');

// fs.readFile('readMe.txt', 'utf8', function(err, data){
//     fs.writeFile('writeMe.txt', data, (err, result)=>{
//     });
// });

// var http = require('http');
// var fs = require('fs');

// //  This creates my server:
// var server = http.createServer(function(req, res){
//     console.log('request was made' + req.url);
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
//     myReadStream.pipe(res);
// });

// server.listen(3000, '127.0.0.1');
// console.log('On port 3000');



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

