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
  db.query("SELECT * FROM post WHERE isClaimed=false;", (err, results) => {
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
  console.log('HELLO', req.body);
  var listing = req.body
  console.log("saving to database...");
  db.query(
    `INSERT INTO post (title, description, address, city, state, zipCode, isClaimed, createdAt) VALUES ("${listing.title}", "${listing.description}", "${listing.address}","${listing.city}", "${listing.state}", "${listing.zipCode}", ${listing.isClaimed}, ${Date.now()});`,
    (err, data) => {
      if (err) console.log("Error saving to database", err);
      console.log("succesfully saved to database");
      res.end();
    }
  );
});

//This route handles updating a post that has been claimed by the user 
app.post('/updateentry', function(req, res){
  console.log('updating entry...')
  var postID = req.body.postID
  db.query(`UPDATE post SET isClaimed=true WHERE id="${postID}"`, (err,data) =>{
    if(err) console.log('Unable to claim item :(', err)
    console.log('Claimned post with id: ' + postID+"!")
    res.end()
  })
})

var _PORT = process.env.PORT || 3000;
app.listen(_PORT, function() {
  console.log("listening on port 3000!");
});
