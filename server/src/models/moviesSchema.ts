import mongoose from 'mongoose'
// basic schema for movie list
let movieSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		Validate: /^[A-Za-z]*$/,
	},

	genre: {
		type: String,
		required: true,
		Validate: /^[A-Za-z]*$/,
	},

	score: {
		type: Number,
		required: false,
	},
	rating: {
		type: String,
		required: true,
		Validate: /^[A-Za-z]*$/,
	},
})
