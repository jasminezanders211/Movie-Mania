import React, { useContext } from 'react'
import { MovieContext } from '../App'
import movieData from '../types/movieData'

export default function movies() {
	const movieList = useContext(MovieContext)
	// console.log(movieList)

	const movieElement = movieList
		.filter((movie: movieData) => {
			return movie.title
		})
		.map((movie) => {
			console.log(movie.genre)
			return (
				<div id="movie">
					<h1 id="movie-title">{movie.title}</h1>
					<h3 id="movie-dir">{movie.director}</h3>
					<h3 id="movie-genre">{movie.genre}</h3>
					<h3 id="movie-imdb">{movie.imdbScore}</h3>
					<h3 id="movie-year">{movie.releaseYear}</h3>
					<p id="movie-overview">{movie.overview}</p>
				</div>
			)
		})
	return (
		<div>
			<div>{movieElement}</div>
		</div>
	)
}
