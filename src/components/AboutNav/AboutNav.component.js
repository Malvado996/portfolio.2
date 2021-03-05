import React from 'react';
import { NavLink } from 'react-router-dom';

import astronaut from '../../assets/images/astronaut.svg';
import rocket from '../../assets/images/rocket.svg';

import './AboutNav.styles.scss';

const AboutNav = () => {
    return(
        <div className="navContainer">
            <h4>Navigate</h4>

            <ul className="nav_container">
                <li>
                    <div className="link">
                        <NavLink to={`/about/about_me`}><img src={ astronaut } className="astronaut" alt="astronaut" /></NavLink>
                        <h6>About Me</h6>
                    </div>
                </li>
                <li>
                    <div className="link">
                        <NavLink to={`/about/skills`}><img src={ rocket } className="rocket" alt="rocket" /></NavLink>
                        <h6>Skills</h6>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default AboutNav;