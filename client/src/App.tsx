import { Route, BrowserRouter as Router, useRoutes } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import routes from '~react-pages'
import { api } from './includes/api'
import { createContext, useCallback, useState } from 'react'
import movieData from '../src/types/movieData'
import { useEffect } from 'react'
import '../styles/main.scss'

export const MovieContext = createContext<movieData[]>([])

export type StateRef<Value> = {
	value: Value
}

function App() {
	const [movieList, setMovieList] = useState<movieData[]>([])

	const fetchMovieData = useCallback(() => {
		return api
			.get('/movies')
			.then((res) => {
				setMovieList(res.data)
				console.log(res.data)
			})
			.catch((error) => {
				console.error(error)
			})
	}, [])

	useEffect(() => {
		fetchMovieData()
	}, [fetchMovieData])

	return (
		<MovieContext.Provider value={movieList}>
			<Header />
			{useRoutes(routes)}
			<Footer />
		</MovieContext.Provider>
	)
}

export default App
