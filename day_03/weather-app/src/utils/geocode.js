const axios = require("axios").default;

const getGeocode = (location) => {
  return new Promise((resolve, reject) => {
    const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1Ijoic3luZXJneTI0MTEiLCJhIjoiY2p4NXc0cm53MDZoODQwbHFuNzdzMzV5NCJ9.DKIDo6bcG51yLXf2DmlYcQ`;
    axios
      .get(URL)
      .then((response) => {
        const latitude = response.data.features[0].geometry.coordinates[0];
        const longitude = response.data.features[0].geometry.coordinates[1];
        resolve({latitude, longitude})
      })
      .catch((err) => reject({err}));
  });
};

// getGeocode("delhi")

module.exports = {
  getGeocode,
};
