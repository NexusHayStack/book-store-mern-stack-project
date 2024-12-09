const express = require('express');
const router = express.Router();


// Post a book
router.post('/create-book', async (req,res) =>{
  console.log(req.body)
});


module.exports = router;