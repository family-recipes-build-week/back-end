const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authRouter = require('../api/auth/auth-router');
const recipesRouter = require('../api/recipes/recipes-router');
const usersRouter = require('../api/users/users-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);

server.use('/api/recipes', recipesRouter);

server.use('/api/users', usersRouter)

server.get('/', (req, res) => {
  res.send('Server running...');
 });

module.exports = server;