DROP DATABASE IF EXISTS marlowe;

CREATE DATABASE marlowe;

USE marlowe;

CREATE TABLE post (
  id INTEGER AUTO_INCREMENT NOT_NULL PRIMARY KEY,
  title VARCHAR(100) NOT_NULL,
  description VARCHAR(255) NOT_NULL,
  address VARCHAR(50) NOT_NULL,
  city VARCHAR(25) NOT_NULL,
  state VARCHAR(2) NOT_NULL,
  zip_code VARCHAR(6) NOT_NULL,
  is_claimed BOOLEAN,
  provider_id INTEGER NOT_NULL,
  claimed_by INTEGER NOT_NULL,
  FOREIGN KEY (provider_id) REFERENCES provider(id),
  FOREIGN KEY (claimed_by) REFERENCES claimer(id)
);

CREATE TABLE provider (
  id INTEGER AUTO_INCREMENT NOT_NULL PRIMARY KEY,
  provider_username VARCHAR(16) NOT_NULL,
  p_password VARCHAR(16) NOT_NULL
);

CREATE TABLE claimer (
  id INTEGER AUTO_INCREMENT NOT_NULL PRIMARY KEY,
  claimer_username VARCHAR(16) NOT_NULL,
  claimer_zip_code INTEGER NOT_NULL,
  c_password VARCHAR(16) NOT_NULL
)
