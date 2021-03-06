import React from 'react';
import Particles from 'react-particles-js';

import ProjectDisplay from '../../components/projectDisplay/projectDisplay';

import particleParams from '../../assets/particles/Home.particle';

import './Projects.styles.scss';

const Projects = () => {    
    return(
        <div className="projects-container">
            <div className="projects-content-container">
                
                <ProjectDisplay />
            </div>        
            <Particles
                id="particles-project"
                params={ particleParams }
            />
        </div>
    )
}

export default Projects;