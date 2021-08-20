const axios = require("axios").default;

const getForecast = ({latitude, longitude}) => {
    return new Promise ((resolve, reject) => {
    const URL = `https://api.darksky.net/forecast/473fe696d21e65026547b2d50b56014c/${latitude},${longitude}`;
    axios.get(URL)
        .then(response => {
            const temperature = response.data.currently.temperature
            const summary = response.data.daily.summary
            resolve({temperature, summary})
        })
        .catch(err => {
            reject({err})
        })
    })
}


// getForecast({latitude : "37.8267", longitude : "-122.4233"})

module.exports = {
    getForecast
}