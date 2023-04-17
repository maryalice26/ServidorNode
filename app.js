var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.get("/", function(req,res){
    res.header("Accsess-Control-Aloow-Origin", "*")
    res.send("Olá!");


});

app.listen(port, ()=> {
    console.log(`Servidor rodando com a porta ${port}`)


});
