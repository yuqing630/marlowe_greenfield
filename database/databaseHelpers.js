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
  
  db.query(`INSERT INTO post (id, title, description, address, city, state, zip_code, is_claimed, provider_id) VALUES ("${listing.id}", "${listing.title}", "${listing.description}", "${listing.address}",
   "${listing.city}", "${listing.state}", "${listing.zip_code}", "${listing.is_claimed}", "${listing.provider_id}");`, (err, results) => {
    console.log(results);
    res.send();
  });
}

module.exports.db = connection;
modules.export.saveListing = saveListing;
modules.export.retrieveListings = retrieveListings;