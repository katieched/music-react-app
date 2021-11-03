import React, { useState } from 'react';
import { Card } from '../../components/Card/index';
import { LikeButton } from '../../components/LikeButton/index';
import { LyricsButton } from '../../components/LyricsButton/index';
import './style.css';

const artists = [
    { name: 'ABBA', musicGenre: 'Pop', intro: 'ABBA are a Swedish pop group formed in Stockholm in 1972 by Agnetha Fältskog, Björn Ulvaeus, Benny Andersson, and Anni-Frid Lyngstad.', songTitle: 'mamma-mia'},
    { name: 'Queen', musicGenre: 'Rock', intro: 'Queen are a British rock band formed in London in 1970. Their classic line-up was Freddie Mercury, Brian May, Roger Taylor and John Deacon.', songTitle: 'bohemian-rhapsody'},
    { name: 'The Beatles', musicGenre: 'Pop', intro: 'The Beatles were an English rock band formed in Liverpool in 1960. The group, whose line-up comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr, are regarded as the most influential band of all time.', songTitle: 'yesterday'}
]

export const Artists = () => {
    const [ showLyrics, setShowLyrics ] = useState(false);
    const toggleLyrics = () => setShowLyrics(prevState => !prevState);

    const renderArtists = () => artists.map((p, i) => {
        return (
            <div className="artists">
                <div>
                    <Card key ={i} name={p.name} musicGenre={p.musicGenre} intro={p.intro} />
                    <LikeButton />
                    <article aria-label='lyrics'>
                        { showLyrics ? <LyricsButton key ={i} close={toggleLyrics} name={p.name} songTitle={p.songTitle} /> : <button onClick={toggleLyrics}>Get Lyrics!</button>}
                    </article>
                </div>
            </div>
        )
    });

    return (
        <section id="artists">
            <ol>
                { renderArtists() }
            </ol>
        </section>
    )
}