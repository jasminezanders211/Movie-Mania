const { Router } = require('express')
const Movie = require('../models/moviesSchema')
const router = Router()

router.post('/', (res: any, req: any) => {
	const newMovie = new Movie(req.body)
	newMovie.save((error: any, record: any) => {
		if (error) return res.status(500).json(error)
		return res.json(record)
	})
})

router.get('/', (res: any, req: any) => {
	Movie.find({}, (error: any, record: any) => {
		console.log(res)
		if (error) return res.status(500).json(error)
		return res.json(record)
	})
})

export default router
