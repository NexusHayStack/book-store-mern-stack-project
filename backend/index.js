const express = require('express')
const app = express();
const cors = require('cors');

const mongoose = require('mongoose');

const port = process.env.PORT || 5000;
require("dotenv").config();

// Middleware
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}));

const bookRoutes = require('./src/books/book.route');

// Routes
app.use('/api/books', bookRoutes)

async function main() {
  await mongoose.connect(process.env.DB_URL);
// routes
app.use('/', (req,res) => {
  res.send("Book Store Server is Running");
});
}

main().then(() => console.log("Mongodb connected successfully!")).catch(err => console.log(err));



app.listen(port, () => {
  console.log('Listening on Port: '+port);
});