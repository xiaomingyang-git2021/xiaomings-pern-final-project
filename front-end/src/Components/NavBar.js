import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/books">Book Bin</Link>
      </h1>
      <Button variant="primary" size="sm" className="addNewBook">
        <Link to="/books/new">Add New Book</Link>
      </Button>{''}
    </nav>
  );
}