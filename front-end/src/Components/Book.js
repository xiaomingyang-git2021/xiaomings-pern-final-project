import { Link } from "react-router-dom";

function Book({ book }) {
  return (
    <div className="Book">
      <img src={book.image} alt={book.name}
      <Link to={`/books/${book.id}`}>
        <h4>{book.name}</h4>
      </Link>
    </div>
  )
}

export default Book;