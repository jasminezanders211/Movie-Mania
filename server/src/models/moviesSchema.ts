import mongoose from 'mongoose'
// basic schema for movie list
let movieSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		Validate: /^[A-Za-z]*$/,
	},
	genre: {
		type: String,
		required: true,
		Validate: /^[A-Za-z]*$/,
	},
	imdbScore: {
		//if a movie doesn't have this data it shouldn't break code
		type: Number,
		required: true,
	},
	releaseYear: {
		type: Number,
		required: true,
	},
	overview: {
		type: String,
		required: true,
		Validate: /^[A-Za-z]*$/,
	},
	rating: {
		type: String,
		required: true,
		Validate: /^[A-Za-z]*$/,
	},
	director: {
		type: String,
		required: true,
		Validate: /^[A-Za-z]*$/,
	},
	runtime: {
		type: String,
		required: true,
		Validate: /^[A-Za-z]*$/,
	},
})
