import React from 'react';
import { NavLink } from 'react-router-dom';

import dog from '../../assets/dog.svg';

import './Header.styles.scss';

const Header = () => {

    return (
        <header>

            <NavLink exact to="/"><img src={ dog } className="dog" alt="dog" /></NavLink>

            <ul>
                <li><NavLink to="/about" className="navLink">About</NavLink></li>
                <li><NavLink to="/projects" className="navLink">Projects</NavLink></li>
                <li><NavLink to="/contact" className="navLink">Contact</NavLink></li>
            </ul>

        </header>
    )

}

export default Header;