// Example Socket.io server setup
// Save this as server.js and run with: node server.js
// Make sure to install: npm install socket.io express cors

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // In production, specify your frontend URL
    methods: ["GET", "POST"]
  }
});

// Store connected users
const users = new Map();

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Handle cursor movement
  socket.on('cursor-change', (data) => {
    socket.broadcast.emit('cursor-changed', data);
  });

  // Handle messages
  socket.on('msg-send', (data) => {
    io.emit('msg-receive', {
      ...data,
      id: Date.now(),
      sessionId: socket.id,
      createdAt: new Date().toISOString()
    });
  });

  // Handle user updates
  socket.on('update-user', (data) => {
    users.set(socket.id, { ...data, socketId: socket.id });
    io.emit('users-updated', Array.from(users.values()));
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
    users.delete(socket.id);
    io.emit('users-updated', Array.from(users.values()));
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Socket.io server running on port ${PORT}`);
});
