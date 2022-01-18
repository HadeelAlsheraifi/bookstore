import React from "react";
import bookSet from "../bookSet";
import BookList from "./BookList";

const Home = () => {
  return (
    <div>
      <div className="row">
        <title>Book</title>
        <h1>Book</h1>
        <p>your library in your Hand</p>

        <img
          className="img-align"
          scr="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
          alt="Iibrary"
        />
        {/* List of Product */}
        <BookList book={bookSet} />
      </div>
    </div>
  );
};

export default Home;

// import React from "react";

// const Product = (props) => {
//   console.log(props);
//   return (

//   );
// };

// export default products;

// {books.map)books=><book book}
