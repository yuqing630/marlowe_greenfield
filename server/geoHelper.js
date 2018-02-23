var geocoder = require('geocoder');
var axios = require('axios');
var key = require('../config.js');
key = key.googleAPI;

var apiHelper = function(locationInformation, callback) {
  geocoder.geocode(locationInformation, function(err, data, key) {
    //console.log(data);
    var lat = data.results[0].geometry.location.lat;
    lat = lat.toString();
    var long = data.results[0].geometry.location.lng;
    long = long.toString();
    callback(lat, long);
  });
};

//may need if else statement in regards to the fickle reponse data from the geocoder
module.exports = apiHelper;