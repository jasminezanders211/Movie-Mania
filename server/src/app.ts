// 'Import' the Express module instead of http
const express = require('express')
// Initialize the Express application
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const { default: movies } = require('./routes/movies')

dotenv.config() //allows server to read DB key from a .env file

const PORT = process.env.PORT || 4040 // we use || to provide a default value
const app = express()

mongoose.connect(process.env.DATA_BASE)
const db = mongoose.connection

// CORS Middleware
const cors = (req: any, res: any, next: any) => {
	res.setHeader(
		'Access-Control-Allow-Headers',
		'X-Requested-With,content-type, Accept,Authorization,Origin',
	)
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, PATCH, DELETE',
	)
	res.setHeader('Access-Control-Allow-Credentials', true)
	next()
}

// on error log the error
db.on('error', console.error.bind(console, 'Connection Error:'))
app.use('/movies', movies)
//once successfully connected to database console log ....
db.once('open', console.log.bind(console, 'Successfully connected to database'))
// app.use(cors)
// calling .use and passing cors var
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
