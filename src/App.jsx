import React from 'react';
import { Card } from './components/Card/index';
import { LikeButton } from './components/LikeButton/index';

const artists = [
    { name: 'ABBA', musicGenre: 'Pop', intro: 'ABBA are a Swedish pop group formed in Stockholm in 1972 by Agnetha Fältskog, Björn Ulvaeus, Benny Andersson, and Anni-Frid Lyngstad.'},
    { name: 'Queen', musicGenre: 'Rock', intro: 'Queen are a British rock band formed in London in 1970. Their classic line-up was Freddie Mercury, Brian May, Roger Taylor and John Deacon.'}
]

const App = () => {
    return (
        <>
            <h1>Favourite Artists</h1>
            <Card name={artists[0].name} musicGenre={artists[0].musicGenre} intro={artists[0].intro} />
            <LikeButton />

            <Card name={artists[1].name} musicGenre={artists[1].musicGenre} intro={artists[1].intro} />
            <LikeButton />
        </>
    )
};

export default App;