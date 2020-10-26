var express = require('express');
var app = express();
console.log("Hello World");
app.get('/', function(request,response){
     response.send("Hello Express");
});
app.get('/', function(req, res){
    res.sendFile(__dirname + "/views/index.html");
  });
  app.use(express.static(__dirname + "/public"));
  app.get('/json', function(req,res){
    res.json({"message": " Hello json"});
  });

module.exports=app;