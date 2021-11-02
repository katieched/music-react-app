import React from 'react';

export const Artist = ({name, musicGenre, intro}) => {
    return (
        <ol>
            <h2>{name}</h2> <em>{musicGenre}</em> <h4>{intro}</h4>
        </ol>
    )
};