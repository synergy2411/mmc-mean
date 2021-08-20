const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"))

// GET - http://localhost:9090/address
app.get("/address", (req, res) => {
    console.log("Query : ", req.query)
    res.send({message : "SUCCESS"})
})


// GET - http://localhost:9090
app.get("/", (req, res) => {
    res.sendFile(__dirname+"/public/index.html")
})

app.listen(9090, () => {console.log("Server started at PORT : 9090")})