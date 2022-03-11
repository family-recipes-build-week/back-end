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
      <h3>Can get all reipes</h3>
      [GET] /api/recipes,<br>
      <h3>Can get recipes by id</h3>
      [GET] /api/recipes/:id<br><br>
      <h3>Can get all users</h3>
      [POST] /api/users<br>
      <h3>Can get users by id</h3>
      [GET] /api/users/:id<br><br>

      <h3>Can log a user in</h3>
      [POST] /api/users/login<br>
      <h3>Can register a user</h3>
      [POST] /api/users/register<br>
      <h3>Can log a user out</h3>
      [POST] /api/users/logout<br>
      `    
  );
 });

module.exports = server;