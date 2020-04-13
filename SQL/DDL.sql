CREATE TABLE ResidentialAddress(
  residenceID serial primary key, 
  street text,
  city text,
  province text,
  country text,
  postalCode text
);

CREATE TABLE Publisher( /* Finished Assumed publisher only has one address..*/
  publisherID serial primary key,
  publisherName text,
  bankingInformation text,
  residenceID integer,

  foreign key (residenceID) references ResidentialAddress
);

CREATE TABLE Book (
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

CREATE TABLE Author(
  authorID serial primary key,
  fullName text
);



CREATE TABLE authorBook ( /* Allows for many to many relation between authors and books*/
  authorID integer,
  asin char(10),

  primary key(authorID, asin),

  foreign key (authorID) references Author,
  foreign key (asin) references Book
);


CREATE TABLE Customer (
  userID text primary key,
  isAdmin boolean DEFAULT FALSE
);



CREATE TABLE Purchase ( /* These need to be stored like these in order for the database to be considered normalized... (Ties user to order)*/ 
    orderID text primary key,
    userID text,
    orderTime timestamp DEFAULT NOW(),
    foreign key (userID) references Customer
);

CREATE TABLE PurchasedItem ( /* These need to be stored like these in order for the database to be considered normalized... (Ties purchased books to order)*/ 
  orderID text,
  asin char(10),
  quantity integer,
  primary key(orderID, asin),
  foreign key (orderID) references Purchase
);



CREATE TABLE Shipment ( /* These need to be stored like these in order for the database to be considered normalized... (Ties shipment to order)*/ 
    orderID text,
    trackingID text primary key,
    residenceID integer, 
    foreign key (orderID) references Purchase,
    foreign key (residenceID) references ResidentialAddress
);



CREATE TABLE PaymentMethod (
  cardNumber char(16) primary key,
  cvv char(3),
  expirationDate date
);


CREATE TABLE CardHolder ( -- Many to many relation between credit cards and owner
  userID text,
  cardNumber char(16),

  primary key(cardNumber, userID),

  foreign key (cardNumber) references PaymentMethod,
  foreign key (userID) references Customer
);


CREATE TABLE Household ( -- Used for shipping to user? Did it in case...
  residenceID integer,
  userID text,

  primary key (residenceID, userID),

  foreign key (residenceID) references ResidentialAddress,
  foreign key (userID) references Customer
);


CREATE TABLE PhoneNumber (
  PhoneNumber text primary key,
  publisherID integer, -- The publisher owns the phone number

  foreign key (publisherID) references Publisher
);