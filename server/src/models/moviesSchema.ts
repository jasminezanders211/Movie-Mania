import mongoose from 'mongoose'
// basic schema for movie list
let moviesSchema = new mongoose.Schema({
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

//create var for our model that takes the arguments of a route and the schema above
const Movies = mongoose.model('movies', moviesSchema)
//export the var
export default Movies
