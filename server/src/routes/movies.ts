import { Router } from 'express'
//import Movies var from model
import Movies from '../models/moviesSchema'

const router = Router()
router.get('/', (request: any, response: any) => {
	Movies.find((error: any, record: any) => {
		if (error) return response.status(500).json(error)
		return response.json(record)
	})
})
export default router
