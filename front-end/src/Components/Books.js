import axios from "axios";
import { useState, useEffect } from "react";
import Book from "./Book";

const API = process.env.REACT_APP_API_URL;

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get( API + "/books" )
      .then((res)=>{
        setBooks(res.data)
      }).catch((err)=>{
        console.log(err);
      })
  }, []);

  return (
    <div className="Books">
      <article>
        {books.map((book) => {
          return <Book key={book.id} book={book} />
        })}
      </article>
    </div>
  )
}

export default Books;