import React from 'react';
import Particles from 'react-particles-js';

import spaceMan from '../../assets/spaceMan.svg'
import aboutParticle from './About.particle';
import stars from './star.particles';

import './About.styles.scss';

const About = () => {

    return(
        <div className="container">
            <div className="contentContainer">
                <img src={ spaceMan } className="spaceMan" alt="spaceman" />
                <h1>ABOUT</h1>
            </div>
            <Particles 
                params={ stars }
                id="particles-about"
            />
        </div>
    )
}

export default About;