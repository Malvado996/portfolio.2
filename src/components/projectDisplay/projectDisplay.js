import React from 'react';

import crownSpot from '../../assets/images/crown-spot.png';
import webDashboard from '../../assets/images/Web-Dashboard.png';
import gameShow from '../../assets/images/Gameshow-App.png';

import './projectDisplay.styles.scss';

const ProjectDisplay = () => {
    return(
        <div className="projectDisplay-container">
            <div className="projectDisplay">
                <img src={ crownSpot } className="crown-spot" alt="crown-spot" />
                <p className="project-description">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                    officia deserunt mollit anim id est laborum."
                </p>
                <a 
                    className="project-link" 
                    href="https://crown-spot.herokuapp.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    click here
                </a>
            </div>

            <div className="projectDisplay">
                <img src={ webDashboard } className="webDashboard" alt="webDashboard" />
                <p className="project-description">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                    officia deserunt mollit anim id est laborum."
                </p>
                <a 
                    className="project-link" 
                    href="https://crown-spot.herokuapp.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    click here
                </a>
            </div>

            <div className="projectDisplay">
                <img src={ gameShow } className="gameShow" alt="gameShow" />
                <p className="project-description">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                    officia deserunt mollit anim id est laborum."
                </p>
                <a 
                    className="project-link" 
                    href="https://crown-spot.herokuapp.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    click here
                </a>
            </div>
        </div>  
    )
}

export default ProjectDisplay;