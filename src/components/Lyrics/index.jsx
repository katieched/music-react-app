import React, { useState } from 'react';
import { LyricsButton } from '../LyricsButton';

export const Lyrics = ({ p }) => {
    const [ showLyrics, setShowLyrics ] = useState(false);
    const toggleLyrics = () => setShowLyrics(prevState => !prevState);

    return (
        <article aria-label='lyrics' style={{whiteSpace: "pre-wrap"}}>
            { showLyrics ? <LyricsButton close={toggleLyrics} name={p.name} songTitle={p.songTitle} /> : <button onClick={toggleLyrics}>Get Lyrics!</button>}
        </article>
    )
}