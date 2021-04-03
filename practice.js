const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/practice.html");

})

app.post("/", function(req,res){
    var age = Number(req.body.age);
    result = age * 365;

    res.send("You have been alive roughly " + result + " days!");
})

app.listen(2000, function(req, res){
    console.log("Port 2000 is listening");
})