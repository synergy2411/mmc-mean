
const { Schema, model } = require("mongoose")

// Schema

const todoSchema = new Schema({
    label : String,
    status : Boolean
})


// Model - Collection in DB

const TodoModel = model("Todo", todoSchema)

module.exports = TodoModel;

// Todo - todos