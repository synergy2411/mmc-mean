const express = require("express");
const { getGeocode } = require("./utils/geocode");
const { getForecast } = require("./utils/forecast")

const app = express();

app.use(express.static(__dirname + "/public"))

// GET - http://localhost:9090/address
app.get("/address", (req, res) => {
    if(req.query){
        getGeocode(req.query.location)
            .then( response => {
                const {latitude, longitude, placeName} = response;
                getForecast({latitude, longitude})
                    .then(resp => {
                        return res.send({...resp, placeName})
                    })
                    .catch(err => {
                        return res.send({err})
                    })
            })
            .catch(err => {
                return res.send({err})
            })
    }else{
        return res.send({message : "Location not found"})
    }
})


// GET - http://localhost:9090
app.get("/", (req, res) => {
    res.sendFile(__dirname+"/public/index.html")
})

app.listen(9090, () => {console.log("Server started at PORT : 9090")})