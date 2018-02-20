var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var db = require("../database/databaseHelpers");
var app = express();

app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyParser.json());

// Due to express, when you load the page, it doesnt make a get request to '/', it simply serves up the dist folder

//This route fetches all posting from the database and sends them to the client
//later this function should receive the zip code of the authenticated user and display
//only relevant postings to the user
app.get("/fetch", function(req, res) {
  console.log("retrieving from database...");
  db.query("SELECT * FROM post", (err, results) => {
    if (err) console.log("FAILED to retrieve from database");
    else {
      console.log("succesfully retireved from database");
      res.send(results);
    }
  });
});

//This route receives a request upon submit from the form. The form holds all fields necesaary
//to make a new db entry. This route will take in the request and simply save to the db
app.post("/savepost", function(req, res) {
  var listing = req.body
  console.log("saving to database...");
  db.query(
    `INSERT INTO post (title, description, address, city, state, zipCode, isClaimed) VALUES ("${
      listing.title
    }", "${listing.description}", "${listing.address}",
   "${listing.city}", "${listing.state}", "${listing.zipCode}", ${
      listing.isClaimed
    });`,
    (err, data) => {
      if (err) console.log("Error saving to database", error);
      console.log("succesfully saved to database");
      res.end();
    }
  );
});

var _PORT = process.env.PORT || 3000;
app.listen(_PORT, function() {
  console.log("listening on port 3000!");
});
