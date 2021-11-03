import React from 'react';
import { Artists } from './components/Artists.jsx';
import './style.css';


const App = () => {
    return (
        <>
            <h1>Favourite Artists</h1>

            <div className="artistsList">
                <Artists />
            </div>
        </>
    )
};

export default App;