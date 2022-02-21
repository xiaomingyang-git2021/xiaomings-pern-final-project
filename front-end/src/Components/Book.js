import { Link } from "react-router-dom";
import ContentHealth from "./ContentHealth";

function Book({ book }) {
  return (
    <div className="Book">
      <img src={book.image} alt={book.name}/>
      <Link to={`/books/${book.id}`}>
        <h4 className="book-featured"><ContentHealth bookHealth={book.featured} /> <div>{book.name}</div></h4>
        {/* <h4></h4> */}
      </Link>
    </div>
  )
}

export default Book;