import React from 'react';
import './css/Playboard.css';

function playBoard() {
    return (
        <div className='Playboard'>
            <div className='play'>
                Play
            </div>
            <div>
                Next
            </div>
            <div>
                Back
            </div>
            <div>
                Title Song
            </div>
            <div>
                Artist - Album
            </div>
        </div>
    )
}

export default playBoard