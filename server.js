const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("Welcome to my Sheldon's backend application");
});

app.get("/sean",(req,res)=>{
    res.send("Hello Sheldon!");
});

app.listen(3000,()=>{
    console.log("Listening");
});