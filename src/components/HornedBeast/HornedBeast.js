import './HornedBeast.css'
import React, { useState } from "react";

export default function HornedBeast({title, imgUrl, description}) {
    const [fav, setfav] = useState(0);

    function handleFav() {
        setfav(fav + 1);
    }
  
    return (
    <div className="hornedBeastContainer">
        <h2>{title}</h2>
        <img src={imgUrl} alt={description} title={title} />
        <p>{description}</p>
        <span className='smileyFace' onClick={handleFav}>
        ☺️
        </span>
    </div>
  )
}
