const express = require("express");
const cors = require("cors");
const { getGeocode } = require("./utils/geocode");
const { getForecast } = require("./utils/forecast")

const app = express();

// CORS enabled
app.use(cors())

app.use(express.static(__dirname + "/public"))

// GET - http://localhost:9090/address
app.get("/address", async (req, res) => {
    if(req.query && req.query.location){
        try{
            const {latitude, longitude, placeName} = await getGeocode(req.query.location)
            try{
               const resp = await getForecast({latitude, longitude})
               return res.send({...resp, placeName})
            }catch(err){
                return res.send({err})    
            }
        }catch(err){
            return res.send({err})
        }
    }else{
        return res.send({message : "Location not found"})
    }
})


// GET - http://localhost:9090
app.get("/", (req, res) => {
    res.sendFile(__dirname+"/public/index.html")
})

app.listen(9090, () => {console.log("Server started at PORT : 9090")})