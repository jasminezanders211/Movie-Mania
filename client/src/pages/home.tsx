import React, { useState } from 'react'
import movieData from '../types/movieData'

export default function Home() {
	const dynamicAltAttribute = () => {
		const movieAlt = document.getElementById('') //TODO add id for image
		if (movieAlt != null) {
			movieAlt.setAttribute('alt', `A movie poster for ....`)
		}
	}

	dynamicAltAttribute()

	return (
		<div>
			<div id="welcomeContainer">
				<p>how are u</p>
			</div>
		</div>
	)
}
