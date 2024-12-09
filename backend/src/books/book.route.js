const express = require('express');
const Book = require('./book.model');
const { postABook } = require('./book.controller');
const router = express.Router();


// Post a book
router.post('/create-book', postABook);




module.exports = router;