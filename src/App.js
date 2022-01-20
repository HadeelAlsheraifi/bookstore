// import logo from './logo.svg';
import "./App.css";
import Home from "./componants/Home";

function App() {
  return (
    <div className="App">
      <h1>BookStore</h1>
      <p>The World between your Hand</p>
      <img
        alt="Nudge"
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348322381l/3450744.jpg"
      />
      <div> {<Home />}</div>
    </div>
  );
}

export default App;
