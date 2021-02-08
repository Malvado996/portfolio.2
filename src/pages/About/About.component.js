import React from 'react';
import Particles from 'react-particles-js';

import spaceMan from '../../assets/spaceMan.svg'
import spaceDog from '../../assets/spaceDog2.svg';
import stars from './star.particles';

import './About.styles.scss';

const About = () => {

    return(
        <div className="container">
            <div className="contentContainer">
                <div className="imageContainer">
                    <img src={ spaceDog } className="spaceDog" alt="spaceman" />
                    <img src={ spaceMan } className="spaceMan" alt="spaceman" />
                </div>
                <div className="textContainer">
                    <h1>ABOUT</h1>
                </div>
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