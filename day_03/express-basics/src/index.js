const express = require("express");

const app = express();

app.use(express.json())

const todoCollection = [
    {id : 1, label : "to buy the jeans", status : true},
    {id : 2, label : "to pot the plant", status : false},
    {id : 3, label : "to renew the insurance", status : false},
]

app.post("/todos", (req, res) => {
    console.log("REQUEST BODY : ", req.body)
    const item = {
        id : Math.random(),
        label : req.body.label,
        status : false
    }
    todoCollection.push(item)
    res.send({item})
})

app.get("/todos", (req, res) => {
    if(req.query && req.query.limit){
        let result = [];
        for(let i =0; i < req.query.limit; i++){
            result.push(todoCollection[i])
        }
        return res.send({todos : result})
    }else{
        return res.send({todos : todoCollection})
    }
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


