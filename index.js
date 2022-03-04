// const express = require('express');
// const server = require('./api/server');

// require('dotenv').config();

// const PORT = process.env.PORT || 9000

// server.listen(PORT, () =>  {
//     console.log(`listening on port ${PORT}`)
// });

// server.use('*', (req, res) => {
//     res.send('<h1>Hello Heroku</h1>')
// })

require('dotenv').config();

const server = require('./api/server');

const port = process.env.PORT || 9000;
const secret = process.env.SECRET_THING || 'foo';

console.log(port, secret);

server.listen(port, () => {
    console.log(`\n*** Server running on ${port} ***\n`)
})