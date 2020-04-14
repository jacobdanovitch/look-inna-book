-- set schema
CREATE SCHEMA IF NOT EXISTS final;
SET search_path TO final; 

CREATE TABLE IF NOT EXISTS ResidentialAddress(
  residenceID serial primary key, 
  street text,
  city text,
  province text,
  country text,
  postalCode text
);

CREATE TABLE IF NOT EXISTS Publisher( /* Finished Assumed publisher only has one address..*/
  publisherID serial primary key,
  publisherName text,
  bankingInformation text,
  residenceID integer,

  foreign key (residenceID) references ResidentialAddress
);

CREATE TABLE IF NOT EXISTS Book (
  asin char(10) primary key, -- ASIN are guaranteed to be size 10
  publisherID integer,
  title text,
  coverURL text DEFAULT NULL,
  category text,
  subCategory text,
  pages integer,
  price numeric(6, 2),
  inventory integer,
  percentageTaken numeric(3,2) DEFAULT RANDOM(), /* Todo limit of 100 percent*/

  foreign key (publisherID) references Publisher
);

CREATE TABLE IF NOT EXISTS Author(
  authorID serial primary key,
  fullName text
);


CREATE TABLE IF NOT EXISTS WrittenBy ( /* Allows for many to many relation between authors and books*/
  authorID integer,
  asin char(10),

  primary key(authorID, asin),

  foreign key (authorID) references Author,
  foreign key (asin) references Book
);


CREATE TABLE IF NOT EXISTS Customer (
  userID text primary key,
  isAdmin boolean DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS PaymentMethod (
  cardNumber char(16) primary key,
  cvv char(3),
  expirationDate date
);


CREATE TABLE IF NOT EXISTS CardHolder ( -- Many to many relation between credit cards and owner
  userID text,
  cardNumber char(16),

  primary key(cardNumber, userID),

  foreign key (userID) references Customer
  foreign key (cardNumber) references PaymentMethod,
);


CREATE TABLE IF NOT EXISTS Purchase (
    orderID text primary key,
    userID text,
    cardNumber char(16),

    orderTime timestamp DEFAULT NOW(),

    foreign key (userID) references Customer
    foreign key (cardNumber) references PaymentMethod
);

CREATE TABLE IF NOT EXISTS PurchasedItem ( /* These need to be stored like these in order for the database to be considered normalized... (Ties purchased books to order)*/ 
  orderID text,
  asin char(10),
  quantity integer,
  primary key(orderID, asin),
  foreign key (orderID) references Purchase
);

CREATE TABLE IF NOT EXISTS Shipment ( /* These need to be stored like these in order for the database to be considered normalized... (Ties shipment to order)*/ 
    trackingID text primary key,
    orderID text,
    residenceID integer, 
    

    foreign key (orderID) references Purchase,
    foreign key (residenceID) references ResidentialAddress
);


CREATE TABLE IF NOT EXISTS Household ( -- Used for shipping to user? Did it in case...
  residenceID integer,
  userID text,

  primary key (residenceID, userID),

  foreign key (residenceID) references ResidentialAddress,
  foreign key (userID) references Customer
);


CREATE TABLE IF NOT EXISTS PhoneNumber (
  PhoneNumber text primary key,
  publisherID integer, -- The publisher owns the phone number

  foreign key (publisherID) references Publisher
);