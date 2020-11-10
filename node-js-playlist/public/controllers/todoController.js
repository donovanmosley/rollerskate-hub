var bodyParser = require('body-parser');

var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding butt'}, {item: 'eat breakfast'}];
var urlencodedParser = bodyParser.urlencoded({ extended: false});


module.exports = function(app){
    
    app.get('/', function(req, res){
        res.render('index', {todos: data});
    });

    app.post('/', urlencodedParser, function(req, res){
        data.push(req.body);
        res.json({todos: data});
    });

    app.delete('/:item', function(req, res){
        data = data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json({todos: data});
    });
};