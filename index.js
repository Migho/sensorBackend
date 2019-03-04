const config = require('./utils/config')
const app = require('./app')
const http = require('http')

const server = http.createServer(app)

server.listen(process.env.PORT || config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})