import express, { Express } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './routes/movies'

const { default: movies } = require('./routes/movies')
dotenv.config({}) //allows server to read DB key from a .env file

const PORT = process.env.PORT || 4040 // we use || to provide a default value
const app = express()

mongoose.connect(`${process.env.DATA_BASE}`)
const db = mongoose.connection

// CORS Middleware
const allowedOrigins = ['http://localhost:5173']
const options: cors.CorsOptions = {
	origin: allowedOrigins,
}
app.use(cors(options))
app.use(express.json())
// on error log the error
db.on('error', console.error.bind(console, 'Connection Error:'))
app.use('/movies', movies)
//once successfully connected to database console log ....
db.once('open', console.log.bind(console, 'Successfully connected to database'))
// app.use(cors)
// calling .use and passing cors var
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
