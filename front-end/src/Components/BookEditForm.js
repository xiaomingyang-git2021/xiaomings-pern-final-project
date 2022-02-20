import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function BookEditForm() {
  let { id } = useParams();
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

  const updateBook = (updatedBook) => {
    axios
      .put(`${API}/books/${id}`, updatedBook)
      .then(() => {
        navigate(`/books`);
      })
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setBook({ ...book, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setBook({ ...book, featured: !book.featured });
  };

  useEffect(() => {
    axios.get(`${API}/books/${id}`).then(
      (response) => setBook(response.data)
    ).catch(()=>navigate("/not-found "))
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateBook(book);
  };
  return (
    <div className="Edit">
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
          value={book.image}
          onChange={handleTextChange}
          required
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
          type="number" min="0" max="5" step="1"
          value={book.rating}
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
        <input type="submit" />
      </form>
    </div>
  )
}

export default BookEditForm;