import React, { useState } from 'react';
import './style.css';

export const Card = ({size, name, musicGenre, intro}) => {
    const [showIntro, setShowIntro ] = useState(false);

    const handleMouseEnter = () => { setShowIntro(true) };
    const handleMouseLeave = () => { setShowIntro(false) };

    return(
        <div
            className={`card ${size}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <h3>{name}</h3>
            <em>{musicGenre}</em>
            <p>{showIntro ? intro: `See more...`}</p>
        </div>
    )
}