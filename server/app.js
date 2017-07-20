var path = require("path");
var publicPath = path.join(__dirname, "../public");
var express = require("express");
var app = express();

app.use(express.static(publicPath));

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started");
});


