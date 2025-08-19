const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');



const app = express();
const port  = 8000;


app.get('/', (req,res)=>{
    res.send("this is the fist server message");
})

app.listen(port, ()=>{
    console.log(`Server is Running on PORT:${port}`);
})
