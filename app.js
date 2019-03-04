const liveDataService = require('./services/liveData')
const config = require('./utils/config')
const express = require('express')
const schedule = require('node-schedule')
const app = express()

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
}
const tokenExtractor = (request, response, next) => {
  response.token = request.get('authorization')
  next()
}

app.use(tokenExtractor)
const dataRouter = require('./controllers/data')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
app.use(cors())
app.use(bodyParser.json())
app.use('/api/sensors', dataRouter)

async function updateData() {
  liveDataService.updateData()
}

schedule.scheduleJob('5 * * * *', () => {
  updateData()
});

updateData()
module.exports = app