import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ContentHealth from "./ContentHealth";
import Button from "react-bootstrap/Button";

const API = process.env.REACT_APP_API_URL;

function BookDetails() {
  const [book, setBook] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(()=>{
    axios.get(API + "/books/" + id)
      .then((res)=>{
        setBook(res.data);
      }).catch((err)=>{
        console.log(err);
      })
  }, [id]);

  const handleDelete=()=>{
    axios.delete(API + "/books/" + id)
      .then((res)=>{
        navigate("/books")
      }).catch((err)=>{
        console.log(err);
      })
  }

  return <article>
    <aside>
      <h4>the book hard cover or not</h4>
      <ContentHealth bookHealth={book.featured}/>
    </aside>
    <div className="Show">
      <div>
        <h5>{book.name}</h5>
        <img src={book.image} alt={book.name} />
        <h6>Author: {book.author}</h6>
        <h6 className="description">Description: {book.description}</h6>
        <h6>Price: ${book.price}</h6>
        <h6>Rating: {book.rating}</h6>
        <h6>Featured: {book.featured ? "True" : "False"}</h6>
      </div>
      <div className="showNavigation">
        <div>
          <Link to="/books">
            <Button variant="primary">Back</Button>
          </Link>
        </div>
        <div>
          <Link to={`/books/${id}/edit`}>
            <Button variant="primary">Edit</Button>
          </Link>
        </div>
        <div>
          <Button variant="primary" onClick={handleDelete}>Delete</Button>
        </div>
      </div>
    </div>
  </article>
}

export default BookDetails;