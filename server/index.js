var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var db = require("../database/databaseHelpers");
var session = require('express-session')
var app = express();
var moment = require('moment');

app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyParser.json());
app.use(session({ secret: 'this-is-a-secret-token', cookie: {maxAge: 60000} }));

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
      // console.log(results)
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
    `INSERT INTO post (title, description, address, city, state, zipCode, isClaimed, emailAddress, createdAt) VALUES ("${listing.title}", "${listing.description}", "${listing.address}","${listing.city}", "${listing.state}", "${listing.zipCode}", ${listing.isClaimed}, "${listing.email}", "${Date.now()}");`,
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


/************************************************************/
//                   authentication 
/************************************************************/
app.post('/signup', function(req, res) {
  var sqlQuery = `INSERT INTO claimer (claimerUsername, claimerZipCode, cPassword) VALUES (?, ?, ?)`;
  var placeholderValues = [req.body.username, req.body.password, req.body.zipcode];
  db.query(sqlQuery, placeholderValues, function(error) {
    if (error) {
      throw error;
    } else {
      res.sendStatus(201);
    }
  })
})

app.post('/login', function(req, res) {
  var sqlQuery = `SELECT username FROM claimer WHERE claimerUsername = "${req.body.username}" AND cPassword = "${req.body.password}"`;
  db.query(sqlQuery, function(error, results) {
    if (error) {
      throw error;
    } else if (results.length === 0) {
      console.log("Failed to login")
    } else {
        req.session.regenerate((err) => {
        req.session.username = req.body.username
        req.session.username = req.body.username
        });
      res.sendStatus(201);
    }
  })
})

var _PORT = process.env.PORT || 3000;
app.listen(_PORT, function() {
  console.log("listening on port 3000!");
});
