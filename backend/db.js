const mongoose = require("mongoose");

const connectdb = () => {
  mongoose
    .connect(
      "mongodb+srv://sumitmishra2002:frN5FuF3AHqxAgu3@cluster0.ufl13.mongodb.net/todos"
    )
    .then((res) => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log(err);
    });
};

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = {
  Todo: Todo,
  connectdb: connectdb,
};
