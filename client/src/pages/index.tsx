import React from 'react'
import ralph from "../../assets/moviePosters/ralph.jpg"
import spiderman from "../../assets/moviePosters/spiderman.jpg"
import princessfrog from "../../assets/moviePosters/princessfrog.jpg"
import treasureplanet from "../../assets/moviePosters/theinvisibleman2020.jpg"
import traintobusan from "../../assets/moviePosters/traintobusan.jpg"
import silenthill from "../../assets/moviePosters/silenthill.jpg"
import man from "../../assets/moviePosters/theinvisibleman2020.jpg"
export default function Home() {
  
  
  
  return (
<> 
  <div id='welcomeContainer'>

    <p>Welcome to Movie Mania!</p>
  </div>

  {/* Top row of movies */}
  <div id='moviePosterContainer'>
      <div id='topRow'className='row'>
      <img src={princessfrog}/>
      <img src={spiderman }/>
      <img src={ralph}/>
      <img src={treasureplanet }/>
    </div>

  {/* Bottom of row of movies*/}
    <div id='bottomRow'className='row'>
      <img src={traintobusan}/>
      <img src={malignant}/>
      <img src={}/>
      <img src={silenthill}/>
    </div>
  </div>
</>
  )
  }