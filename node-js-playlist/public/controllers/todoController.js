var bodyParser = require('body-parser');

var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding butt'}];

module.exports = function(app){
    
    app.get('/', function(req, res){
        res.render('index', {todos: data});
    });

    app.post('/index', function(req, res){
        
    });

    app.delete('/index/:item', function(req, res){

    });
};