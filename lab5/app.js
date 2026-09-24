import express from 'express';

const app = express();

app.get("/" , (req,res)=>{
    res.send("<h1> starting with the express </h1>");
})
app.listen(3000, ()=>{
    console.log("server 3000 is listening ");
})
app.get("/about" , (req,res)=>{
    res.send("<h1> about page </h1>");
})
aoo.get("/contact" , (req,res)=>{
    res.send("<h1> contact page </h1>");
})

