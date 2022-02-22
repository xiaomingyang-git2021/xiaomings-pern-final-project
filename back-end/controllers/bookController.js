const reviewsController = require("./reviewsController.js");

const express = require("express");
const books = express.Router();
const { getAllBooks, getBook, createBook, deleteBook, updateBook } = require("../queries/books.js");
const { checkName, checkFavorite } = require("../validations/checkBooks.js");
const reviews = require("./reviewsController.js");


books.use("/:bookId/reviews", reviews);
books.get("/", async (req, res) => {
  try{
    const allBooks = await getAllBooks();
    if(allBooks[0]){
      res.status(200).json(allBooks);
    } else {
      res.status(500).json({ error: "Server error" });
    }
  } catch(err){
    console.log(err);
  }
})

books.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const oneBook = await getBook(id);
    if(oneBook.id){
      res.status(200).json(oneBook);
    } else {
      res.status(500).json({ error: "Book not found" })
    }
  } catch(err){
      console.log(err);
  }
})

books.post("/", checkName, checkFavorite, async (req, res) => {
  const { body } = req;

  try{
    const createdBook = await createBook(body);
    if(createdBook.id) {
      res.status(200).json(createdBook);
    } else {
      res.status(500).json({ error: "Book creation error" });
    }
  } catch(err){
      console.log(err);
  }
})

books.delete("/:id", async(req, res)=>{
  const { id } = req.params;
  const deletedBook = await deleteBook(id);
  if(deletedBook.id){
    res.status(200).json(deletedBook);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
})

books.put("/:id", async(req, res) => {
  const { id } = req.params;
  const { body } = req;
  const updatedBook = await updateBook(id, body);
  if(updatedBook.id){
    res.status(200).json(updatedBook);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
})

module.exports = books;