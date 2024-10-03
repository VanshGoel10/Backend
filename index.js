require('dotenv').config()

const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send('Hello World');
})

app.get('/login', (req,res)=>{
    res.send("<h1>please login</h1>")
})

app.get('/youtube',(req,res)=>{
    res.send("<h1>Added to youtube</h1>")
})

app.listen(process.env.PORT, ()=>{
    console.log("server started");
})