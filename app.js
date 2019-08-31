let express = require('express')
let socket = require('socket.io')

// App setup
let app = express()

let server = app.listen(4000,function() {
  console.log('listen to requests on port 4000')
})

// Static files
app.use(express.static('public'))

// Socket setup
let io = socket(server)

io.on('connection', function(socket) {
  // every new socket connection build a new socket.id
  console.log('made socket connection',socket.id)
  
  socket.on('chat', function(data) {
    io.sockets.emit('chat', data)
  })
})


