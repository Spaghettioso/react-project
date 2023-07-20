import React from 'react'
import HornedBeast from '../HornedBeast/HornedBeast'
import '../images/cute-dragon.png'

export default function Main() {
  return (
    <div>
        <HornedBeast
        title="Cute Dragon"

        imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2RIY9nyvLooFRDipT6g-RnqKi2DESvtrkag54CsM&s"
        
        description="A cute red cartoon dragon"
        />
        <HornedBeast 
        title="Horned Lizard"

        imgUrl="https://cdn.dribbble.com/users/20442/screenshots/1966856/horny-toad.png"

        description="A cartoon horned lizard"
        
        />
    </div>
  )
}
