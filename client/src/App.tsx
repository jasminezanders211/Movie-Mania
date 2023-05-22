import { Route, BrowserRouter as Router, useRoutes } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import routes from '~react-pages'
import { api } from './includes/api'
import { createContext, useState } from 'react'
import movieData from '../src/types/movieData'
import { useEffect } from 'react'
import '../styles/main.scss'

export const MovieContext = createContext<movieData[]>([])

export type StateRef<Value> = {
	value: Value
}

function App() {
	const [movieList, setMovieList] = useState([])
	useEffect(() => {
		api
			.get('/Movies')
			.then((res) => {
				setMovieList(res.data)
			})
			.catch((error) => {
				console.error(error)
			})
	}, [])

	return (
		<MovieContext.Provider value={movieList}>
			<Header />
			{useRoutes(routes)}
			<Footer />
		</MovieContext.Provider>
	)
}

export default App
