import './HornedBeast.css'
import React from 'react'

export default function HornedBeast({title, imgUrl, description}) {
  return (
    <div className="hornedBeastContainer">
        <h2>{title}</h2>
        <img src={imgUrl} alt={description} title={title} />
        <p>{description}</p>
    </div>
  )
}
