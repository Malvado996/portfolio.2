import React from 'react';
import Particles from 'react-particles-js';

import particleParams from '../../assets/particles/Home.particle';

import './Projects.styles.scss';

const Projects = () => {
    return(
        <div className="projects-container">
            <div className="projects-content-container">
                <h1>Projects</h1>
            </div>        
            <Particles
                id="particles-project"
                params={ particleParams }
            />
        </div>
    )
}

export default Projects;