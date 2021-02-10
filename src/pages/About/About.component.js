import React from 'react';
import Particles from 'react-particles-js';

import stars from '../../assets/particles/star.particles';

import AboutMe from '../../components/AboutMe/AboutMe.component';
import AboutImage from '../../components/AboutImage/AboutImage.component';

import './About.styles.scss';

const About = () => {

    return(
        <div className="container">
            <div className="contentContainer">
                <AboutImage />
                <AboutMe />
                <div className="navContainer">
                    <h1>Nav</h1>
                </div>
            </div>
            <Particles 
                params={ stars }
                id="particles-about"
            />
        </div>
    )
}

export default About;