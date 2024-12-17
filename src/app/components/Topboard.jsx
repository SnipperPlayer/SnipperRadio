import React from 'react';
import '../css/Topboard.css';
import CardAlbum from './CardAlbum';

const images = [
    { src: 'https://via.placeholder.com/200', caption: 'Album 1' },
    { src: 'https://via.placeholder.com/200', caption: 'Album 2' },
    { src: 'https://via.placeholder.com/200', caption: 'Album 3' },
];

function Topboard() {
    return (
        <div className='general'>
            <h1>Top Weekly Albums</h1>
            <div className='album'>
                {images.map((img, index) => (
                    <CardAlbum key={index} image={img.src} caption={img.caption}/>
                ))}
            </div>
        </div>

    )
}

export default Topboard