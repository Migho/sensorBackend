Server is running at https://sensorbackend.herokuapp.com/api/sensors

Link to backend project: https://github.com/Migho/sensorFrontend

Please note that both backend and frontend are running on free Heroku dyno, which causes them to sleep after 30 minutes of inactivity. Waking up both of them can take some time and sometimes even require a page refresh. This also means that backend cannot keep saving the sensor data and causes gaps to the data, so it's not a bug.
