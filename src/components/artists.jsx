import React from 'react';
import { Artist } from './Artist';

const artists = [
    { name: 'ABBA', musicGenre: 'Pop', intro: 'ABBA are a Swedish pop group formed in Stockholm in 1972 by Agnetha Fältskog, Björn Ulvaeus, Benny Andersson, and Anni-Frid Lyngstad.'},
    { name: 'Queen', musicGenre: 'Rock', intro: 'Queen are a British rock band formed in London in 1970. Their classic line-up was Freddie Mercury, Brian May, Roger Taylor and John Deacon.'}
]

export const Artists = () => {
    const renderArtists = () => artists.map((p, i) => <Artist key ={i} name={p.name} musicGenre={p.musicGenre} intro={p.intro} />);

    return (
        <section id="artists">
            <h2>Choose an artist:</h2>
            <ol>
                { renderArtists() }
            </ol>
        </section>
    )
}

export default Artists;