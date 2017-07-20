var path = require("path");
var publicPath = path.join(__dirname, "../public");
var express = require("express");
var http = require("http");
var socketIO = require("socket.io");

var app = express();
var server = http.createServer(app);
var io = socketIO(server);


io.on('connection', function (socket) {
  console.log("New user connected");
  socket.on('disconnect', function () {
    console.log("User is disconnected");
  });
});


app.use(express.static(publicPath));

server.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started");
});


