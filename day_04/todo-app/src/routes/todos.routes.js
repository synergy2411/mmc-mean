const express = require("express")

const router = express.Router()

router.route("")            // http://localhost:9090/todos
    .get((req, res, next) => {
        return res.send({message : "Todo Route - GET"})
    })
    
module.exports = router;