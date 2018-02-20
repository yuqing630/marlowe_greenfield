DROP DATABASE IF EXISTS marlowe;

CREATE DATABASE marlowe;

USE marlowe;

CREATE TABLE post (
  id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
  title VARCHAR(100),
  description VARCHAR(255),
  address VARCHAR(50),
  city VARCHAR(25),
  state VARCHAR(2),
  zipCode VARCHAR(6),
  isClaimed BOOLEAN,
  providerId INTEGER NOT NULL,
  claimedBy INTEGER NOT NULL,
  FOREIGN KEY (providerId) REFERENCES provider(id),
  FOREIGN KEY (claimedBy) REFERENCES claimer(id)
);

CREATE TABLE provider (
  id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
  providerUsername VARCHAR(16),
  pPassword VARCHAR(16)
);

CREATE TABLE claimer (
  id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
  claimerUsername VARCHAR(16),
  claimerZipCode INTEGER NOT NULL,
  cPassword VARCHAR(16)
)
