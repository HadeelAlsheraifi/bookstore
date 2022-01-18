import React from "react";
import Book from "./Book";

const BookList = ({ book }) => {
  return (
    <div className="row">
      {book.map((book) => (
        <Book book={book} />
      ))}
      ;
    </div>
  );
};

export default BookList;
