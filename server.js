const express = require('express');
const Socket = require('socket.io');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(helmet());

const port = process.env.PORT || 8000;
const server = app.listen(port, console.log('server run on 8000'));
const io = Socket(server);

module.exports = { app, io };
