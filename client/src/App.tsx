import { Route, BrowserRouter as Router, useRoutes } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import routes from '~react-pages'

function App() {
	return (
		<>
			<Header />
			{useRoutes(routes)}
			<Footer />
		</>
	)
}

export default App
