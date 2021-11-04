import React from 'react';
import { Card, LikeButton, Lyrics } from '../../components';
import './style.css';

const artists = [
    { name: 'ABBA', musicGenre: 'Pop', intro: 'ABBA are a Swedish pop group formed in Stockholm in 1972 by Agnetha Fältskog, Björn Ulvaeus, Benny Andersson, and Anni-Frid Lyngstad.', songTitle: 'mamma-mia', showLyrics: false},
    { name: 'Queen', musicGenre: 'Rock', intro: 'Queen are a British rock band formed in London in 1970. Their classic line-up was Freddie Mercury, Brian May, Roger Taylor and John Deacon.', songTitle: 'bohemian-rhapsody', showLyrics: false},
    { name: 'The Beatles', musicGenre: 'Pop', intro: 'The Beatles were an English rock band formed in Liverpool in 1960. The group, whose line-up comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr, are regarded as the most influential band of all time.', songTitle: 'yesterday', showLyrics: false}
]

export const Artists = () => {
    const renderArtists = () => artists.map((p, i) => {
        return (
            <div key ={i} className="artist">
                <div>
                    <Card name={p.name} musicGenre={p.musicGenre} intro={p.intro} />
                    <LikeButton />
                    <Lyrics p={p}/>
                </div>
            </div>
        )
    });

    return (
        <section id="artists">
            { renderArtists() }
        </section>
    )
}