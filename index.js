const express = require('express');
const server = express();

require('dotenv').config();

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`listening n port ${PORT}`);
    console.log(process.env.MESSAGE);
});

server.use('*', (req, res) => {
    res.send(`<h1>Hello There</h1>`);
});