const express = require("express");

const app = express();

const todoCollection = [
    {id : 1, label : "to buy the jeans", status : true},
    {id : 2, label : "to pot the plant", status : false},
    {id : 3, label : "to renew the insurance", status : false},
]

app.get("/todos", (req, res) => {
    console.log("Query Params : ", req.query)
    res.send({todos : todoCollection})
})

app.get("/todos/:id", (req, res) => {
    // console.log("PARAMS : ",req.params)
    const { id } = req.params;
    const foundTodo = todoCollection.find(todo => todo.id === Number(id))
    res.send({item : foundTodo})
})

// GET - http://localhost:9000/api
app.get("/api", (req, res, next) => {
    res.send({msg : "SUCCESS"})
})

app.listen(9000, () => {
    console.log("Express server started at PORT : 9000")
})


