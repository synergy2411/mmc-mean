const express = require("express");

const app = express();

// GET - http://localhost:9000/api
app.get("/api", (req, res, next) => {
    res.send({msg : "SUCCESS"})
})

app.listen(9000, () => {
    console.log("Express server started at PORT : 9000")
})


