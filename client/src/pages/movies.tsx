import React, { useContext } from 'react'
import { MovieContext } from '../App'
import movieData from '../types/movieData'

export default function movies() {
	const movieList = useContext(MovieContext)
	console.log(movieList)
	return <div>movies</div>
}
