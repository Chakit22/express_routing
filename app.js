const express = require("express");
const app = express();
const book = require("./book.js");
// console.log("book : ",book);
// console.log("module in app.js file : ",module);

app.use(express.json());
app.use(express.urlencoded());
app.use("/api/books",book);
app.get("/api/health",validate1,validate2,(req,res,next) => {
    console.log("Inside health /");
    res.send();
});

function validate1(req,res,next){
    console.log("Inside validate1 middleware");
    next();
}

function validate2(req,res,next){
    console.log("Inside validate2 middleware");
    next();
}

app.listen(3000,() => {
    console.log("Server listening on port 3000");
});