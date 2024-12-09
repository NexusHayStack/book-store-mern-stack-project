const express = require('express');
const Book = require('./book.model');
const router = express.Router();


// Post a book
router.post('/create-book', async (req,res) =>{
  try {
    const newBook = await Book.create(req.body);
    res.status(200).json({message: "Your Book is posted Successfully",book: newBook});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});




module.exports = router;