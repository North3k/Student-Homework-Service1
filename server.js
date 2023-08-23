const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const posts = [];
const comments = [];

io.on('connection', (socket) => {
    // Handle real-time communication using socket.io
});

app.get('/api/posts', (req, res) => {
    res.json(posts);
});

app.post('/api/posts', (req, res) => {
    const post = req.body;
    posts.push(post);
    res.status(201).json(post);
});

app.get('/api/comments', (req, res) => {
    res.json(comments);
});

app.post('/api/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    io.emit('new-comment', comment);
    res.status(201).json(comment);
});

http.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
