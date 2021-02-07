import React from 'react';
import Particles from 'react-particles-js';

import spaceMan from '../../assets/spaceMan.svg'
import aboutParticle from './About.particle';

import './About.styles.scss';

const About = () => {

    console.log(aboutParticle)

    return(
        <div className="container">
            <div className="contentContainer">
                <img src={ spaceMan } className="spaceMan" alt="spaceman" />
                <h1>ABOUT</h1>
            </div>
            <Particles 
                params={ aboutParticle }
                id="particles-about"
            />
        </div>
    )
}

export default About;