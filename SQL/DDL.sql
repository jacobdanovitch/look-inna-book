CREATE TABLE book ( /* Primary key (bookASIN,sellerID) */
  bookASIN char(10) NOT NULL UNIQUE, /* ASIN are garunteed to be size 10*/
  sellerID text NOT NULL UNIQUE,
  authorName text, 
  bookTitle text,
  bookPublisher text,
  bookGenre text,
  bookPages integer,
  bookPrice numeric(6, 2),
  percentageTaken numeric(3,2), /* Todo limit of 100 percent*/
  inventory integer, -- # left in stock
  primary key(bookASIN, sellerID)
);


CREATE TABLE seller( /* needs work for later*/
    sellerID text primary key, /* Created by application side*/
    userEmail text,
    avatarURL text,
    fullName text
);

CREATE TABLE buyer( /* needs work for later*/
    userID text primary key, /* Created by application side*/
    userEmail text,
    avatarURL text,
    fullName text
);



CREATE TABLE book_order( /* Store multiple of these for each book in the order. Primary Key (ORDERID,BOOKASIN)*/ 
    bookASIN char(10) NOT NULL UNIQUE,
    quantity integer,
    orderID text NOT NULL UNIQUE,
    userID text NOT NULL UNIQUE,
    sellerID text NOT NULL UNIQUE, 
  	primary key(bookASIN,sellerID,userID,orderID)
);



CREATE TABLE shipment(
    orderID text references book_order(orderID) on delete cascade,
    trackingID text primary key
);




CREATE TABLE publisher( /* Needs to be finished*/
  bankingInformation text primary key,
  bookPublisher text
);


CREATE TABLE PhoneNumber(
  PhoneNumber text primary key,
  bookPublisher text /*Whoever owns the phone number*/
);


CREATE TABLE payment_info(
  creditCardNumber char(16) primary key,
  cvv char(3),
  expirationDate char(6), /* maybe look at date object*/
  ownerUserID text /*Whoever actually owns the card*/
);


CREATE TABLE address(
  owner_id text primary key, /*Publisher/Seller/User ID*/
  houseNumber int,
  street text,
  city text,
  province text,
  country text,
  postal_code text
);
  
