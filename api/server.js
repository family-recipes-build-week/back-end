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
      Can get all recipes
      <h4>[GET] /api/recipes</h4>
      <br>
      Can get recipes by id
      <h4>[GET] /api/recipes/:id</h4>
      <br>
      Can get all users
      <h4>[POST] /api/users</h4>
      <br>
      Can get users by id
      <h4>[GET] /api/users/:id</h4>
      <br>
      Can log a user in
      <h4>[POST] /api/users/login</h4>
      <br>
      Can register a user
      <h4>[POST] /api/users/register</h4>
      <br>
      Can log a user out
      <h4>[POST] /api/users/logout</h4>
      `    
  );
 });

module.exports = server;