const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/public/index.html")
})

app.listen(9090, () => {console.log("Server started at PORT : 9090")})