const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const planRoutes = require('./routes/plansRoutes')
const subRoutes = require('./routes/subscriptionRoutes')
const csvRoutes = require('./routes/csvGenerationRoutes')
const app = express()
dotenv.config()

// a middleware to parse the incoming request body to json
app.use(bodyParser.json())

// establish mongodb atlas connection starts here
const mongoDbUri = process.env.MONGODB_URI
mongoose.connect(mongoDbUri, { useNewUrlParser: true, useUnifiedTopology: true })

// =========event listeners for succesfull connection============

mongoose.connection.on('connected', () => {
  console.log('Connection to database is successful')
})

// event lister when the database connection is openend

mongoose.connection
  .once('open', () => {
    console.log('database connection opened!')
  })
// event listener incase of eror during conection process
  .on('error', (error) => {
    console.log(`Databae connection error: ${error}`)
  })

//= ============establish mongodb atlas connection ends here=============

// initiate subscription, plans. csv routes
app.use('/plan', planRoutes)
app.use('/sub', subRoutes)
app.use('/csv', csvRoutes)

// this route for the api.test.js file
app.get('/test/route', (req, res) => {
  res.status(200).send({ msg: 'api responding as expected' })
})

// get the port number from the .env file as a security precaution
const Port = process.env.PORT

// catch errro if server fails to connect;
// eslint-disable-next-line n/handle-callback-err
app.on('error', (err) => {
  console.error('Error starting server on port', Port)
})

// connect your app to the server
app.listen(Port, () => {
  console.log(`Server is running on http://localhost:${Port}`)
})

module.exports = app
