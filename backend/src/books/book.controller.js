const Book = require("./book.model");

const postABook = async (req,res) =>{
  try {
    const newBook = await Book.create(req.body);
    res.status(200).send({message: "Your Book is posted Successfully",book: newBook});
  } catch (error) {
    console.error({message: "Error Creating a Book",error: error.message});
    res.status(500).json({message: "Failed to Create a Book!"});
  }
}

// Get all books
const getAllBooks = async (req,res) => {
  try {
    const books = await Book.find().sort({createAt: -1});
    res.status(200).send(books)

  } catch (error) {
    console.error({message: "Error Reading all Book Data",error: error.message});
    res.status(500).json({message: "Failed to Read Books 😅!"});  
  }
}

// Get A Specific Book by ID
const getABook = async (req,res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if(!book) {
      return res.status(404).json({message: "Book not Found"});
    }
    
    res.status(200).send(book);

  } catch (error) {
    console.error({message: "Error Reading a Book Data",error: error.message});
    res.status(500).json({message: "Failed to Read a Book!"});  
  }
}


// Update a Book
const putABook = async (req,res) => {
  try {
    const { id } = req.params
    const book = await Book.findByIdAndUpdate(id,req.body,{new: true});

    if(!book) {
      return res.status(404).json({message: "Book not Found"});
    }

    const updatedBook = await Book.findById(id);
    res.status(200).json({message: "Book Updated Successfully",book: updatedBook});

  } catch (error) {
    console.error({message: "Error Updating a Book",error: error.message});
    res.status(500).json({message: "Failed to Edit your Book!"});  
  }
}

// Delete a Book
const deleteBook = async (req,res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);

    if(!book) {
      return res.status(404).json({message: "Book not Found"});
  }

    res.status(200).send({message: "Your Book is deleted Successfully"});

  } catch (error) {
    console.error({message: "Error Deleting a Book",error: error.message});
    res.status(500).json({message: "Failed to Delete the Book!"});  
  }
}



module.exports = {
  postABook,
  getAllBooks,
  getABook,
  putABook,
  deleteBook
}