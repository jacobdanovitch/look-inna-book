CREATE TABLE author (
  authorID serial primary key,
  authorName text,
  unique(authorName) /* Authours should be unique, we should not have duplicate authors*/
);

CREATE TABLE book (
  bookID serial primary key, /* Reasoning behind this is we can have multiple of the same book in the database*/
  bookASIN char(10), 
  bookTitle text,
  bookGenre text,
  bookPages integer,
  bookPrice numeric(6, 2),
  percentageTaken numeric(3,2), /* Todo limit of 100 percent*/
  orderId text /* Show non-sold books by filtering for nulls, sold-books can be queried by their orderID*/
);


CREATE TABLE author_book ( /* Allows for many to many relation between authors and books*/
  authorID integer references author(authorID) on delete cascade,
  bookID   integer references book(bookID) on delete cascade,
  constraint author_book_pkey primary key(authorID, bookID)
);

CREATE TABLE user( /* needs work for later*/
    userID serial primary key,
    fullName text
);

CREATE TABLE ORDER( /* TODO: Figure out logic behind this*/ 



);


CREATE TABLE STORE( /* Many to many between store and user*/



);




