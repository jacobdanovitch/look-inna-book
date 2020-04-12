CREATE TABLE author (
  authorID serial primary key,
  authorName text,
  unique(authorName) /* Authours should be unique, we should not have duplicate authors*/
);

CREATE TABLE book ( /* Primary key (bookASIN,sellerID) */
  bookASIN char(10), /* ASIN are garunteed to be size 10*/
  sellerID text, 
  bookTitle text,
  bookPublisher text,
  bookGenre text,
  bookPages integer,
  bookPrice numeric(6, 2),
  percentageTaken numeric(3,2), /* Todo limit of 100 percent*/
  inventory integer -- # left in stock
  book_seller_pkey primary key(bookASIN, sellerID)
);

CREATE TABLE author_book ( /* Allows for many to many relation between authors and books*/
  authorID integer references author(authorID) on delete cascade,
  bookID   integer references book(bookID) on delete cascade,
  constraint author_book_pkey primary key(authorID, bookID)
);


CREATE TABLE seller( /* needs work for later*/
    sellerID text primary key, /* Created by application side*/
    userEmail text,
    avatarURL text,
    fullName text
);

CREATE TABLE user( /* needs work for later*/
    userID text primary key, /* Created by application side*/
    userEmail text,
    avatarURL text,
    fullName text
);



CREATE TABLE order( /* Store multiple of these for each book in the order. Primary Key (ORDERID,BOOKASIN)*/ 
    bookASIN char(10),
    quantity integer,
    orderID text,
    userID text,
    sellerID text,
    book_seller_pkey primary key(bookASIN,sellerID,userID,orderID)
);



CREATE TABLE shipment(
    orderID text primary key references ORDER(orderID) on delete cascade,
    trackingID text primary key,
);




CREATE TABLE publisher( /* Needs to be finished*/
  bankingInformation text primary key,
  bookPublisher text,
);


CREATE TABLE PhoneNumber(
  PhoneNumber text primary key,
  bookPublisher text, /*Whoever owns the phone number*/
);


CREATE TABLE payment_info(
  creditCardNumber char(16) primary key,
  cvv char(3),
  expirationDate char(6), /* maybe look at date object*/
  ownerUserID text /*Whoever actually owns the card*/
);


CREATE TABLE address(
  owner_id text primary key /*Publisher/Seller/User ID*/
  houseNumber int,
  street text,
  city text,
  province text,
  country text,
  postal_code text
);
  
