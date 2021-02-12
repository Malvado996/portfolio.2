import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Particles from 'react-particles-js';

import stars from '../../assets/particles/star.particles';

import AboutMe from '../../components/AboutMe/AboutMe.component';
import AboutSkill from '../../components/AboutSkill/AboutSkill.component';
import AboutImage from '../../components/AboutImage/AboutImage.component';
import AboutNav from '../../components/AboutNav/AboutNav.component';

import './About.styles.scss';

const About = ({ match }) => {

    console.log(match.url, match.path);

    return (
        <div className="container">
            <div className="contentContainer">
                <AboutImage />
                
                <Route exact path="/about" render={ () => <Redirect to={`/about/about_me`} /> } />
                <Route path="/about/about_me" component= { AboutMe } />
                <Route path="/about/skills" component= { AboutSkill } />
                
                <AboutNav />
               
            </div>
            <Particles
                params={stars}
                id="particles-about"
            />
        </div>
    )
}

export default About;