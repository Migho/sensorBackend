const dataRouter = require('express').Router()
const SensorEntry = require('../models/sensorEntry')

dataRouter.get('/', async (request, response) => {
	SensorEntry.find({}).then(entries => {
    response.json(entries.map((i) => {
      const n = i.toObject()
      n["id"] = n["_id"]
      n["_id"] = undefined
      n["__v"] = undefined
      return n
    }))
  })
})

module.exports = dataRouter