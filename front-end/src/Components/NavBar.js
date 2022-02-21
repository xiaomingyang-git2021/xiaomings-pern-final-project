import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/books">Book Bin</Link>
      </h1>
      <button className="addNewBook">
        <Link to="/books/new">Add New Book</Link>
      </button>
    </nav>
  );
}