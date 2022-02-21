import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function BookNewForm() {
  let navigate = useNavigate();

  const [book, setBook] = useState({
    name: "",
    image: "",
    author: "",
    description: "",
    price: 0,
    rating: 0,
    featured: false
  });

  const addBook = () => {
    axios
      .post(`${API}/books`, book)
      .then(
        () => {
          navigate(`/books`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setBook({ ...book, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setBook({ ...book, featured: !book.featured });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBook();
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={book.name}
          type="text"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          type="text"
          pattern="http[s]*://.+"
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="author">Author:</label>
        <input
          id="author"
          type="text"
          value={book.author}
          onChange={handleTextChange}
        />
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          value={book.description}
          onChange={handleTextChange}
        />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          value={book.price}
          onChange={handleTextChange}
        />
        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          type="number" min="0" max="5" step="0.5"
          value={book.rating}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="featured">Featured:</label>
        <input
          id="featured"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={book.featured}
        />

        <br />
        <Button variant="primary" type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default BookNewForm;