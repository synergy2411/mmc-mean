const client = require("mongodb").MongoClient;

const URL = "mongodb://localhost:27017"

let _db = null;

const createUser = () => {
    _db.collection("users").insertOne({
        username : "test",
        password : "test123"
    }, (err, result) => {
        if(err) console.log(err)
        console.log("RESULT : ", result);
    })
}

const findUser = () => {
    _db.collection("users").find().toArray((err, result)=>{
        if(err) console.log(err)
        console.log("RESULT : ", result);
    })
}

client.connect(URL, (error, conn) => {
    if(error){
        console.log(error);
        process.exit(1)
    }
    console.log("Mongo Connected....")
    _db = conn.db("mmc_db")
    // createUser();
    findUser();
})





