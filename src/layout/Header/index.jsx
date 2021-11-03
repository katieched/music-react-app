import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css'

export const Header = () => {
    return(
        <nav>
            <NavLink activeClassName='current' exact to='/'>Home</NavLink>
            <NavLink activeClassName='current' to='/artists'>Artists</NavLink>
        </nav>
    )
}