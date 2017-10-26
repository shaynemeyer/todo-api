var mongoose = require('mongoose');
mongoose.set('debug', false);
mongoose.connect('mongodb://localhost/todo-api');

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');
