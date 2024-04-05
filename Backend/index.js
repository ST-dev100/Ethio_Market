const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());

mongoose.connect('mongodb+srv://sima:1W238DFMvSh50S8M@cluster0.rz199gl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
   
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});
app.get('/users', (req, res) => {
    res.json({a:"hvhv"}) 
  });
  
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
