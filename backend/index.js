const express = require("express");
const app = express();
const { createtodos, completedtodos } = require("./type.js");
const { Todo } = require("./db.js");
const { use } = require("react");
const cors = require("cors");
// const { connectdb } = require("./db.js");

const port = 3000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.post("/createtodos", async function (req, res) {
  const requiredpayload = createtodos.safeParse(req.body);
  console.log(requiredpayload);
  if (!requiredpayload.success) {
    res.status(411).json({
      message: "Invalid Inputs",
    });
    return;
  }

  /* why async and await is used here? 
    because it is call to database and data failure may be there as well as database call require time to respond
    */
  await Todo.create({
    title: req.body.title,
    description: req.body.description,
    completed: false,
  });

  res.status(200).json({
    message: "Data Saved Successfully",
  });

  // Add the code to save the data to the database
});

// we are using async here because we are calling database and it may fail and require time to respond
//Todo.find({}) is a database call that will return all the todos from the database
// if want specific todo , then we can pass the id in the find method
// for example: Todo.find({id: 1})

app.get("/gettodos", async function (req, res) {
  // database.collection("todos", function (err, collection) {
  //   if (err) {
  //     throw err;
  //   } else {
  //     collection.find().toArray(function (err, results) {
  //       if (err) {
  //         throw err;
  //       }
  // const users = await Todo.find({});
  // res.status(200).json(users);
  //     });
  //   }
  // });
  const todos = await Todo.find({});
  res.status(200).json({ todos: todos });
  // //});
});

app.put("/completedtodos", async function (req, res) {
  const requiredpayload = completedtodos.safeParse(req.body);
  if (!requiredpayload.success) {
    res.status(411).json({
      message: "Invalid Inputs",
    });
    return;
  }

  await Todo.updateOne(
    {
      _id: req.body.id,
    },
    { completed: true }
  );

  res.status(200).json({
    message: "Data Updated Successfully",
  });

  // Add the code to update the data in the database
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  //   console.log(connectdb);
  //   connectdb();
});
