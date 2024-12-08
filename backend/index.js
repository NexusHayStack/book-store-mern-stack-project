const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

// routes
app.use('/', (req,res) => {
  res.send("WELCOME TO MY SERVER");
});

app.listen(port, () => {
  console.log('Listening on Port: '+port);
});