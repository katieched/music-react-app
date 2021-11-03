import React from 'react';
import { Header } from './layout/Header';
import { Switch, Route } from 'react-router-dom';
import * as Pages from './pages';
import './style.css';


const App = () => {
    return (
        <>
            <Header />
            

            <Switch>
                <Route exact path='/'>
                    <Pages.Home />
                </Route>

                <Route path='/artists'>
                    <h1>Artists</h1>
                    <Pages.Artists />
                </Route>
            </Switch>
        </>
    )
};

export default App;