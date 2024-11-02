const express = require('express');
const app = express();
const {createtodos, completedtodos} = require('./type.js');
const {Todo} = require('./db.js');
const e = require('express');

const port = 3000;

app.use(express.json());

app.post('/createtodos', async function (req, res) {
    const requiredpayload = createtodos.safeparse(req.body);
    if(!requiredpayload.success){
        res.status(411).json(
            {
                message: "Invalid Inputs"
            }
        );
        return;
    }

    /* why async and await is used here? 
    because it is call to database and data failure may be there as well as database call require time to respond
    */
    await Todo.create({             
        title: res.body.title,
        description: res.body.description,
        completed: false
    });

    res.status(200).json(
        {
            message: "Data Saved Successfully"
        });

    // Add the code to save the data to the database
    
});



// we are using async here because we are calling database and it may fail and require time to respond
//Todo.find({}) is a database call that will return all the todos from the database 
// if want specific todo , then we can pass the id in the find method
// for example: Todo.find({id: 1})

app.get('/gettodos', async function (req, res) {
    const todos = await Todo.find({});
});

app.put('/completedtodos', async function (req, res) {
   const requiredpayload = completedtodos.safeparse(req.body);
    if(!requiredpayload.success){
        res.status(411).json(
            {
                message: "Invalid Inputs"
            }
        );
        return;
    } 

    await Todo.updateOne({
        _id: req.body.id
    },{completed: true});

    res.status(200).json(
        {
            message: "Data Updated Successfully"
        });

    // Add the code to update the data in the database
});

app.listen(port);

