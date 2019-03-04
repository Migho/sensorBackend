const axios = require('axios')
const dataSource = 'https://opendata.hopefully.works/api/events'
const SensorEntry = require('../models/sensorEntry')

const getCurrent = async () => {
  const config = {
    headers: { Authorization: "Bearer " + process.env.TOKEN },
  }
  const response = await axios.get(dataSource, config)
  //response.data.date = response.data.date.split(":")[0]
  return response.data
}

const updateData = async () => {
  const rawData = await getCurrent()
  rawData._id = rawData.date
  rawData.date = undefined
  const sensorEntry = new SensorEntry(rawData)
  try {
    const savedData = await sensorEntry.save()
    console.log(`Saved data to database: ${savedData}`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = { getCurrent, updateData }