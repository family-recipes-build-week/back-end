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
      `
      <h6>Can get all reipes</h6>
      [GET] /api/recipes,<br>

      <h6>Can get recipes by id</h6>
      [GET] /api/recipes/:id<br>

      <h6>Can get all users</h6>
      [POST] /api/users<br>

      <h6>Can get users by id</h6>
      [GET] /api/users/:id<br>

      <h6>Can log a user in</h6>
      [POST] /api/users/login<br>

      <h6>Can register a user</h6>
      [POST] /api/users/register<br>
      
      <h6>Can log a user out</h6>
      [POST] /api/users/logout<br>
      `    
  );
 });

module.exports = server;