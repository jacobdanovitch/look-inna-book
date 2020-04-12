CREATE TABLE book ( /* Primary key (bookASIN,sellerID) */
  bookASIN char(10) primary key, /* ASIN are garunteed to be size 10*/
  authorName text, 
  bookTitle text,
  bookPublisher text,
  bookGenre text,
  bookPages integer,
  bookPrice numeric(6, 2),
  percentageTaken numeric(3,2) /* Todo limit of 100 percent*/
);

CREATE TABLE book_seller_inventory( /* stores how much */
  sellerID text, --foreign key
  bookASIN char(10),
  inventory integer,
  primary key(sellerID,bookASIN)
)


CREATE TABLE seller( /* needs work for later*/
    sellerID text primary key, /* Created by application side*/
    userEmail text,
    fullName text
);




CREATE TABLE book_order( /* Store multiple of these for each book in the order. Primary Key (ORDERID,BOOKASIN)*/ 
    bookASIN char(10),
    quantity integer,
    orderID text,
    userID text,
    sellerID text, 
  	primary key(bookASIN,sellerID,userID,orderID)
);



CREATE TABLE shipment(
    orderID text,
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
  creditCardNumber char(16),
  cvv char(3),
  expirationDate char(6), /* maybe look at date object*/
  ownerUserID text, /*Whoever actually owns the card*/
  primary key(creditCardNumber,ownerUserID)
);


CREATE TABLE residence(
  owner_id text primary key, /*Publisher/Seller/User ID*/
  houseNumber int,
  street text,
  city text,
  province text,
  country text,
  postal_code text
);
  
