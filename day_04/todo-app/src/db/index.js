const { connect } = require("mongoose")

const uri = "mongodb+srv://synergy2411:qpecY3JdC6XclgVP@cluster0.e9xsq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

connect(uri, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
    .then(response => {
        console.log("Mongo Connected...")
    })
    .catch(err => {
        console.log(err);
        process.exit(1)
    })