import React from 'react'
import home from '../../assets/footerIcons/home.png'
import moviesWheel from '../../assets/footerIcons/movies.png'
import list from '../../assets/footerIcons/list.png'
import about from '../../assets/footerIcons/about.png'



export default function Footer() {
  return (
    <footer>
      <h3>
        Movie Mania
      </h3>
      <h4 id='author'>
        Author: Jasmine Zanders
      </h4>
      <div id='footerIcons'>

        {/* Home footer icon */}
      <a id='homeIcon' href='/'>
          <img src={home} />
      </a>
        
        {/*Movies footer icons */}
        <a id='moviesWheelIcon' href='movieWheel'>
          <img src={moviesWheel} />
      </a>

        {/*Movies footer icons */}
        <a id='listIcon' href='movies'>
          <img src={list} />
      </a>
        
        {/*Movies footer icons */}
        <a id='aboutIcon' href='about'>
          <img src={about} />
      </a>

    {/*   TODO: add contact */}
      </div>
    </footer>

  )
}
