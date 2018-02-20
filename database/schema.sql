CREATE DATABASE IF NOT EXISTS marlowe;

USE marlowe;

CREATE TABLE provider (
  id INTEGER AUTO_INCREMENT NOT NULL,
  providerUsername VARCHAR(16),
  pPassword VARCHAR(16),
  PRIMARY KEY(id)
);

CREATE TABLE claimer (
  id INTEGER AUTO_INCREMENT NOT NULL,
  claimerUsername VARCHAR(16),
  claimerZipCode INTEGER NOT NULL,
  cPassword VARCHAR(16),
  PRIMARY KEY (id)
);

CREATE TABLE post (
  id INTEGER AUTO_INCREMENT NOT NULL,
  title VARCHAR(100),
  description VARCHAR(255),
  address VARCHAR(50),
  city VARCHAR(25),
  state VARCHAR(2),
  zipCode VARCHAR(6),
  isClaimed BOOLEAN,
  providerId INTEGER NOT NULL,
  claimedBy INTEGER NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (providerId) REFERENCES provider(id),
  FOREIGN KEY (claimedBy) REFERENCES claimer(id)
)