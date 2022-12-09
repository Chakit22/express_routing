const {Router} = require("express");
const route = Router();

const books = {
    1:"Hindi",
    2:"English"
};

const courses = {
    1:"ECE",
    2:"CSE"
};
// console.log("Inside book.js file");

route.get("/",function(req,res){
    console.log("Inside books /");
});

route.get("/:bookid",(req,res) => {
    try{
        if(!books.hasOwnProperty(req.params.bookid))
            throw "This book doesn't exist";
        res.send(books[req.params.bookid]);
    }catch (err){
        console.log(err);
        res.send(err);
    }
});

route.get("/courses/:courseid",(req,res) => {
    try{
        if(!courses.hasOwnProperty(req.params.courseid))
            throw "This course doesn't exist";
        res.send(courses[req.params.courseid]);
    }catch (err){
        console.log(err);
        res.send(err);
    }
});


route.post("/addbook",(req,res) => {
    books[req.body.id] = req.body.subject;
    res.send("book added!!");
});

route.post("/addcourse",(req,res) => {
    courses[req.body.id] = req.body.course;
    res.send();
});

module.exports = route;
// console.log("module in book.js file : ",module.id);