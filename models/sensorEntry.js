const mongoose = require('mongoose')

const sensorSchmea = mongoose.Schema({
  _id: String,
  sensor1: String,
  sensor2: String,
  sensor3: String,
  sensor4: String,
})

module.exports = mongoose.model('Sensor', sensorSchmea)