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


CREATE TABLE buyer(
  userID text primary key,
  full_name text,
  email text
);



CREATE TABLE user_order( /* Store multiple of these for each book in the order. Primary Key (ORDERID,BOOKASIN)*/ 
    orderID text primary key,
    userID text,
    foreign key (userID) references buyer
);

CREATE TABLE order_book(
  orderID text,
  bookASIN char(10),
  quantity integer,
  primary key(orderID,bookASIN),
  foreign key (orderID) references user_order
);



CREATE TABLE shipment(
    orderID text,
    trackingID text primary key,
    foreign key (orderID) references user_order
);




CREATE TABLE publisher( /* Needs to be finished*/
  bankingInformation text primary key,
  bookPublisher text
);


CREATE TABLE PhoneNumber(
  PhoneNumber text primary key,
  bookPublisher text /*Whoever owns the phone number*/
);


CREATE TABLE credit_cards(
  creditCardNumber char(16) primary key,
  cvv char(3),
  expirationDate char(6) /* maybe look at date object*/
);


CREATE TABLE credit_cards_owner(
  creditCardNumber char(16),
  ownerUserID text,
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
  
