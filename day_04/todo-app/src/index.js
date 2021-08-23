const express = require("express")
const env = require("dotenv")
// require("./db");
const TodoRouter = require("./routes/todos.routes")

env.config()
const app = express();
const PORT = process.env.PORT || 9000

app.use("/todos", TodoRouter)

app.listen(PORT, () => { console.log("Server started at PORT : " + PORT)})
