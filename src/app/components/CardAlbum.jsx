import React from 'react'

function CardAlbum({image, caption}) {
  return (
    <div>
        <img src={image} alt='https://via.placeholder.com/150'></img>
        <h2>{caption}</h2>
    </div>
  )
}

export default CardAlbum