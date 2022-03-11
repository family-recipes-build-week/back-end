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

server.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  })
})

server.get('/', (req, res) => {
  res.send(
      `[GET] /api/recipes,<br>
      [GET] /api/recipes/{id}<br>
      [POST] /api/users<br>
      [GET] /api/users/{id}<br>
      [POST] /api/users/login<br>
      [POST] /api/users/register<br>`    
  );
 });

module.exports = server;