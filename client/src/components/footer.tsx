import React from 'react'
import home from '../assets/home.png'
import list from '../assets/list.png'
import about from '../assets/about.png'
import moviesWheel from '../assets/movies.png'


export default function Footer() {
  return (
    <footer>
      <h3>
        Movie Mania
      </h3>
      <h4>
        Author: Jasmine Zanders
      </h4>
      <div id='footerIcons'>

        {/* Home footer icon */}
      <a id='homeIcon'>
          <img src={home} />
      </a>
        
        {/*Movies footer icons */}
        <a id='moviesWheelIcon'>
          <img src={moviesWheel} />
      </a>

        {/*Movies footer icons */}
        <a id='listIcon'>
          <img src={list} />
      </a>
        
        {/*Movies footer icons */}
        <a id='aboutIcon'>
          <img src={about} />
      </a>
        // TODO: add icon for contact page


      </div>

    </footer>

  )
}
