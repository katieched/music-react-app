import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import './style.css'

export const Header = () => {
    return(
        <nav>
            <BackButton />
            <NavLink activeClassName='current' exact to='/'>Home</NavLink>
            <NavLink activeClassName='current' to='/artists'>Artists</NavLink>
        </nav>
    )
}