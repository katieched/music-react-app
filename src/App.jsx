import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as Pages from './pages';
import './style.css';


const App = () => {
    return (
        <>
            <Switch>
                <Route exact path='/'>
                    <Pages.Home />
                </Route>

                <Route path='/artists'>
                    <Pages.Artists />
                </Route>
            </Switch>
        </>
    )
};

export default App;