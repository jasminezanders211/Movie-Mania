import React from 'react'
import ralph from "../../assets/ralph.jpg"
import spiderman from "../../assets/spiderman.jpg"
import princessfrog from "../../assets/princessfrog.jpg"
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
    </div>


    <div id='bottomRow'className='movieRows'>

    </div>
</div>

    </div>
  )
}
