import React from 'react'
import ralph from "../../assets/ralph.jpg"
import spiderman from "../../assets/spiderman.jpg"
import princessfrog from "../../assets/princessfrog.jpg"
import treasureplanet from "../../assets/treasureplanet.jpg"
import avatar2009 from "../../assets/avatar2009.jpg"
import traintobusan from "../../assets/traintobusan.jpg"
import aquietplace from "../../assets/aquietplace.jpg"

export default function Home() {
  return (
    <div>home 
<div id='welomeContainer'>

  <p>how are u</p>
</div>

<div id='containerTwo'>
    <div id='topRow'className='movieRows'>
    <img src={princessfrog}/>
    <img src={spiderman }/>
    <img src={ralph }/>
    <img src={treasureplanet }/>
    </div>


    <div id='bottomRow'className='movieRows'>
    <img src={traintobusan}/>
    <img src={aquietplace}/>
    <img src={avatar2009}/>
    </div>
</div>

    </div>
  )
}
