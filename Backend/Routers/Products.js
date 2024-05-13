const express = require('express');
const data = require('../Models/data')
const router = express.Router();


router.get('/products',(req,res,next)=>{
    console.log(data)
    res.send(data)
})

module.exports = router