const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sumitmishra2002:Somu@2002@cluster0.ufl13.mongodb.net/');

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = {
    Todo : Todo
}