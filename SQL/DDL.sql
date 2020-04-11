CREATE TABLE author (
  authorID serial primary key,
  authorName text,
  unique(authorName) /* Authours should be unique, we should not have duplicate authors*/
);

CREATE TABLE book (
  bookASIN char(10) primary key, /* ASIN are garunteed to be size 10*/
  sellerID text primary key, 
  bookTitle text,
  bookGenre text,
  bookPages integer,
  bookPrice numeric(6, 2),
  percentageTaken numeric(3,2), /* Todo limit of 100 percent*/
  inventory integer -- # left in stock
);

CREATE TABLE ORDER( /* Store multiple of these for each book in the order. Primary Key (ORDERID,BOOKASIN)*/ 
    bookASIN char(10) primary key,
    quantity integer,
    orderID text primary key,
    userID text,
);

CREATE TABLE SHIPMENT(
    orderID text primary key references ORDER(orderID) on delete cascade,
    trackingID text primary key
);


CREATE TABLE PAYMENT_INFO( /* TODO: IMPLEMENT*/
    creditCardNumber
);










CREATE TABLE author_book ( /* Allows for many to many relation between authors and books*/
  authorID integer references author(authorID) on delete cascade,
  bookID   integer references book(bookID) on delete cascade,
  constraint author_book_pkey primary key(authorID, bookID)
);

CREATE TABLE user( /* needs work for later*/
    userID text primary key, /* Created by application side*/
    userEmail text,
    avatarURL text,
    fullName text
);


CREATE TABLE SELLER(

  userID serial primary key,

)



