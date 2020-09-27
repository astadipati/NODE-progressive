const express = require('express');
const dotenv = require('dotenv');
const http = require('http');

// load env vars
dotenv.config({ path: '.config/config.env' });

const todos = [
  { id: 1, text: 'todo one' },
  { id: 2, text: 'todo two' },
  { id: 3, text: 'todo three' },
];

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Powered-By', 'Node.js');
  res.end(
    JSON.stringify({
      success: true,
      data: todos,
    })
  );
});

const app = express();

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
