const server = require('./api/server')

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 9000

server.listen(PORT, () =>  {
    console.log(`listening on port ${PORT}`)
})