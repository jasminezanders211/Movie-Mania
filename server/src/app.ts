// 'Import' the Express module instead of http
const express = require('express')
// Initialize the Express application
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config() //allows server to read DB key from a .env file

const PORT = process.env.PORT || 4040 // we use || to provide a default value
const app = express()

mongoose.connect(process.env.DATA_BASE)
const db = mongoose.connection

// on error log the error
db.on('error', console.error.bind(console, 'Connection Error:'))

//once successfully connected to database console log ....
db.once('open', console.log.bind(console, 'Successfully connected to database'))

// calling .use and passing cors var
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
