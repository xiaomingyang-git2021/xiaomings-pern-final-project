const db = require("../db/dbConfig.js");

const getAllBooks = async () => {
  try {
    const allBooks = await db.any("SELECT * FROM books") // to get all books
    return allBooks
  } catch (error) {
    return error;
  }
}

const getBook = async (id) => {
  try {
    const oneBook = await db.one(
      "SELECT * FROM books WHERE id=$1",
      id
    );
    return oneBook
  } catch (error) {
      return error
  }
};

const createBook = async (book) => {
  try {
    const newBook = await db.one(
      "INSERT INTO books (name, image, author, description, price, rating, featured) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [book.name, book.image, book.author, book.description, book.price, book.rating, book.featured]
    )
    return newBook;
  } catch (error) {
      return error;
  }
}

const deleteBook = async (id) => {
  try {
    const deletedBook = await db.one(
      "DELETE FROM books WHERE id = $1 RETURNING *",
      id
    );
    return deletedBook;
  } catch (error) {
      return error;
  }
    
}

const updateBook = async(id, book) => {
  try {
    const updatedBook = await db.one(
      "UPDATE books SET name=$1, image=$2, author=$3, description=$4, price=$5, rating=$6, featured=$7 WHERE id=$8 RETURNING *",
      [book.name, book.image, book.author, book.description, book.price, book.rating, book.featured, id]
    );
    return updatedBook;
  } catch(error) {
      return error;
  }
}

module.exports = {
  getAllBooks,
  getBook,
  createBook,
  deleteBook,
  updateBook
};