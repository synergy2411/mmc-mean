require("./db");
const TodoModel = require("./controller/model/todo.model");

const createTodo = () => {
    const todo = new TodoModel({label : "grocery", status : false})
    todo.save().then(result => {
        console.log("RESULT - ", result)
    }).catch(err=> console.log(err))
}

const findAllTodo = () => {
    TodoModel.find()
        .then(response => {
            console.log("RESPONSE - ", response)
        }).catch(err => {
            console.log(err)
        })

}

// findAllTodo()
createTodo()