const express = require('express');
const Book = require('./book.model');
const { postABook,getAllBooks,getABook,putABook,deleteBook } = require('./book.controller');
const router = express.Router();


// Frontend => Backend Server => Controller => Book Schema => Database => Send to Server => back to Frontend



// Post a book
router.post('/create-book', postABook);

// Get all books
router.get('/', getAllBooks);

// Get a book
router.get('/:id', getABook);

// Update a book
router.put('/edit/:id', putABook);

// Delete a book
router.delete('/delete/:id', deleteBook);


module.exports = router;