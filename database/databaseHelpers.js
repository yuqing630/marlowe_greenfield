var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'',
  database: 'marlowe'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('database connected');
  }
});



function retrieveListings(req, res) {
  db.query('SELECT * FROM post', (err, results) => {
    res.send(results);
  });
}

function saveListing(req, res) {
  var listing = req.body;
  
  db.query(`INSERT INTO post (title, description, address, city, state, zipCode, isClaimed, provider_id) VALUES ("${listing.title}", "${listing.description}", "${listing.address}",
   "${listing.city}", "${listing.state}", "${listing.zipCode}", "${isClaimed}", null);`, (err, results) => {
    console.log(results);
    res.send();
  });
  
}

module.exports.db = connection;
module.exports.saveListing = saveListing;
module.exports.retrieveListings = retrieveListings;
