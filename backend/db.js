const mongoose = require("mongoose");

//const connectdb = () => {
mongoose
  .connect(process.env.mongo_url)
  .then((res) => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
//};

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = {
  Todo: Todo,
  //   connectdb: connectdb,
};
