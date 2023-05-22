import React from 'react'
import ralph from "../../assets/ralph.jpg"
import spiderman from "../../assets/spiderman.jpg"
import princessfrog from "../../assets/princessfrog.jpg"
import treasureplanet from "../../assets/treasureplanet.jpg"
import avatar2009 from "../../assets/avatar2009.jpg"
import traintobusan from "../../assets/traintobusan.jpg"
import aquietplace from "../../assets/aquietplace.jpg"
import silenthill from "../../assets/silenthill.jpg"

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
      <img src={aquietplace}/>
      <img src={avatar2009}/>
      <img src={silenthill}/>
    </div>
  </div>
</>
  )
}
