const {Router} = require("express");
const route = Router();

console.log("module : ",module);

route.get("/",function(req,res){
    console.log("Inside /");
});
