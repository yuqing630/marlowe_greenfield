var mysql = require('mysql');
// var pg = require('pg');

var connection = mysql.createConnection({
  host: 'greenfield-marlowe.coxryxwvinqh.us-east-1.rds.amazonaws.com',
  user: 'marlowe',
  password: 'plantlife',
  port: '3306',
  database: 'marlowe'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('database connected');
  }
});

// connection.query(`DROP TABLE IF EXISTS post`, (err, res) => {
// if (err) console.log(err)
// })

connection.query(`CREATE TABLE IF NOT EXISTS provider (
id INTEGER AUTO_INCREMENT NOT NULL,providerUsername VARCHAR(16),
pPassword VARCHAR(16),PRIMARY KEY(id));`
, (err, results) => {
  if (err) console.log(err)
})

connection.query(`CREATE TABLE IF NOT EXISTS claimer (
  id INTEGER AUTO_INCREMENT NOT NULL,
  claimerUsername VARCHAR(16),
  claimerZipCode INTEGER NOT NULL,
  cPassword VARCHAR(16),
  PRIMARY KEY (id)
);`, (err, res) => {
if (err) console.log(err)
})

connection.query(`CREATE TABLE IF NOT EXISTS post (
  id INTEGER AUTO_INCREMENT NOT NULL,
  title VARCHAR(100),
  username VARCHAR(20),
  description VARCHAR(255),
  address VARCHAR(50),
  city VARCHAR(25),
  state VARCHAR(2),
  zipCode VARCHAR(6),
  isClaimed BOOLEAN,
  emailAddress VARCHAR(50),
  createdAt INTEGER,
  PRIMARY KEY (id)
)`, (err, res) => {
if (err) console.log(err)
})
// pg.connect('postgres://pcldshbywowwil:35acd4faed2c5d61503d386e52f1ab7851c718863c07c2bcfa5ea84582adf149@ec2-23-21-198-69.compute-1.amazonaws.com:5432/d2rrbkej3e8sur', () => {
// })



module.exports = connection;
