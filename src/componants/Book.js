import React from "react";

const Book = ({ book }) => {
  return (
    <div className="book">
      <img scr={book.img} alt={book.name} />
      <h1>{book.name}</h1>
      <p>{book.price}</p>
    </div>
  );
};

export default Book;
