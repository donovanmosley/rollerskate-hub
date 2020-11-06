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

var http = require('http');
var fs = require('fs');

//  This creates my server:
var server = http.createServer(function(req, res){
    console.log('request was made' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('On port 3000');
