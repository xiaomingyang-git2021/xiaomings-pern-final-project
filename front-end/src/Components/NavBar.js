import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/books">Online Bestseller Bookstore</Link>
      </h1>
      <button>
        <Link to="/books/new">Add New Book</Link>
      </button>
    </nav>
  );
}