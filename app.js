const express = require("express");
const app = express();
const book = require("./book.js");
console.log(book);

app.listen(3000,() => {
    console.log("Server listening on port 3000");
});