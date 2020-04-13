CREATE TABLE book ( /* Primary key (bookASIN,sellerID) */
  bookASIN char(10) primary key, /* ASIN are garunteed to be size 10*/
  bookTitle text,
  bookPublisher text,
  bookGenre text,
  bookPages integer,
  bookPrice numeric(6, 2),
  percentageTaken numeric(3,2) /* Todo limit of 100 percent*/
);

CREATE TABLE author(
  authourName text primary key 
);



CREATE TABLE author_book ( /* Allows for many to many relation between authors and books*/
  authourName text,
  bookASIN char(10),
  primary key(authourName,bookASIN),
  foreign key (authourName) references author,
  foreign key (bookASIN) references book
);


CREATE TABLE buyer(
  userID text primary key,
  full_name text,
  email text
);



CREATE TABLE user_order( /* These need to be stored like these in order for the database to be considered normalized... (Ties user to order)*/ 
    orderID text primary key,
    userID text,
    foreign key (userID) references buyer
);

CREATE TABLE order_book( /* These need to be stored like these in order for the database to be considered normalized... (Ties purchased books to order)*/ 
  orderID text,
  bookASIN char(10),
  quantity integer,
  primary key(orderID,bookASIN),
  foreign key (orderID) references user_order
);



CREATE TABLE shipment( /* These need to be stored like these in order for the database to be considered normalized... (Ties shipment to order)*/ 
    orderID text,
    trackingID text primary key,
    foreign key (orderID) references user_order
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


CREATE TABLE credit_cards_owner( /* Many to many relation between credit cards and owner*/
  ownerUserID text,
  creditCardNumber char(16),
  primary key(creditCardNumber,ownerUserID),
  foreign key (creditCardNumber) references credit_cards,
  foreign key (ownerUserID) references buyer
);


CREATE TABLE residence( /* can tie to both and normalized properly but idk if jacob is gonna be okay with, bring up tommorow*/
  house_id text primary key, 
  houseNumber int,
  street text,
  city text,
  province text,
  country text,
  postal_code text
);

CREATE TABLE buyer_residence(
  house_id text,
  userID text,
  primary key (house_id,userID),
  foreign key (house_id) references residence,
  foreign key (userID) references buyer
);

CREATE TABLE publisher( /* Needs to be finished*/
  bankingInformation text primary key,
  bookPublisher text,
  residence_id text,
  foreign key (residence_id) references residence
);