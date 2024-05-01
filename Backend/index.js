const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Products = require('./Models/ProductsModel.js')
const app = express();

app.use(cors());

mongoose.connect('mongodb+srv://sima:1W238DFMvSh50S8M@cluster0.rz199gl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
   
const db = mongoose.connection; 

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});
const config = {
  headers: {
      Authorization: "Bearer CHAPUBK_TEST-pydPLApELW4IaBBnbSSIXt81wY2JNVkd",
      // Add any other headers or configurations needed
  }
};
app.get('/users', (req, res) => {
    res.send("Happy  😊") 
  });
  app.get('/callback',(req,res)=>{
    console.log("call")
    console.log(req.query)
    console.log("+++++++++++++++++++++")
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer CHASECK_TEST-3As6RWXBcV5liBNq6KhDRMXR0HRObx5L");
  
  var raw = "";
  
  var requestOptions = {
    method: 'GET',  
    headers: myHeaders, 
    redirect: 'follow'
  };
  fetch(`https://api.chapa.co/v1/transaction/verify/${req.query.trx_ref}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error)); 

  
  })
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
