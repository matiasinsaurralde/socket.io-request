var app = require('express')(),
    http = require('http').Server(app),
    io = require('socket.io')(http)

app.use(function( req, res, next ) {
  var r = { url: req.originalUrl, method: req.method }
  io.sockets.emit( 'request', r )
  next()
})

app.get('/', function(req, res){
  res.sendfile('index.html')
})

app.get('/hello', function(req,res) {
  res.send("hello")
})

io.on('connection', function(socket){
  console.log('a user connected')
})

http.listen(3000, function(){
  console.log('listening on *:3000')
})
