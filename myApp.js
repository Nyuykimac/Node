var express = require('express');
var app = express();
var bodyParser = require('body-parser');
console.log("Hello World");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.post('/', function(req,res){
  req.body;
});
app.post("/name", function(req, res) {
    var firstName = req.body.first;
    var lastName = req.body.last;
    res.json({
      name: `${firstName} ${lastName}`
    });
  });

app.use(function(req,res, next){
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
  });
app.get('/', function(request,response){
     response.send("Hello Express");
});
app.get('/', function(req, res){
    res.sendFile(__dirname + "/views/index.html");
  });
  app.use(express.static(__dirname + "/public"));
  app.get('/json', function(req,res){
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({"message": "HELLO WORLD"})
       }
       else{
         res.json({"message": "Hello World"});
       }
  });
  app.get('/now', function(req,res,next){
    req.time = new Date().toString()
    next()},
     function(req,res){
      res.send({time:req.time})
    }
  );
  app.get('/:word/echo', function(req,res){
    const {word} = req.params;
   res.json({echo: word});
   
 });
 app.get("/name", function(req, res) {
    var firstName = req.query.first;
    var lastName = req.query.last;
    res.json({
      name: `${firstName} ${lastName}`
    });
  });
  

module.exports=app;