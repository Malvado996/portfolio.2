import React from 'react';
import { NavLink } from 'react-router-dom';

import astronaut from '../../assets/images/astronaut.svg';
import rocket from '../../assets/images/rocket.svg';

import './AboutNav.styles.scss';

const AboutNav = () => {
    return(
        <div className="navContainer">
            <h1>Nav</h1>

            <ul className="nav_container">
                <li><NavLink to={`/about/about_me`}><img src={ astronaut } className="astronaut" alt="astronaut" /></NavLink></li>
                <li><NavLink to={`/about/skills`}><img src={ rocket } className="rocket" alt="rocket" /></NavLink></li>
            </ul>
        </div>
    )
}

export default AboutNav;