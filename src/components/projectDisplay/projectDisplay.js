import React from 'react';

import crownSpot from '../../assets/images/crown-spot.png';
import webDashboard from '../../assets/images/Web-Dashboard.png';
import gameShow from '../../assets/images/Gameshow-App.png';

import './projectDisplay.styles.scss';

const ProjectDisplay = () => {
    return(
        <div className="projectDisplay-container">

            <h2 className="projects-h1">PROJECTS</h2>

            <div className="projectItem-container">

                {/* <div className="projectItem">
                    <img src={ crownSpot } className="crown-spot" alt="crown-spot" />
                    <p className="project-description">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                    <a 
                        className="project-link" 
                        href="https://crown-spot.herokuapp.com/" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        visit site
                    </a>
                </div> */}

                <div className="item-container">
                    <div className="item">
                        <img src={ crownSpot } className="crown-spot" alt="crown-spot" />
                        <div className="overlay">
                            <h3>Overlay</h3>
                            <p className="project-description">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            </p>
                            <a 
                                className="project-link" 
                                href="https://crown-spot.herokuapp.com/" 
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                visit site
                            </a>
                        </div>
                    </div>
                </div>

                <div className="item-container">
                    <div className="item">
                    <img src={ webDashboard } className="webDashboard" alt="webDashboard" />
                        <div className="overlay">
                            <h3>Overlay</h3>
                            <p className="project-description">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            </p>
                            <a 
                                className="project-link" 
                                href="https://malvado996.github.io/Web-Dashboard/" 
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                visit site
                            </a>
                        </div>
                    </div>
                </div>

                <div className="item-container">
                    <div className="item">
                    <img src={ gameShow } className="gameShow" alt="gameShow" />
                        <div className="overlay">
                            <h3>Overlay</h3>
                            <p className="project-description">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            </p>
                            <a 
                                className="project-link" 
                                href="https://malvado996.github.io/Gameshow-App/" 
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                visit site
                            </a>
                        </div>
                    </div>
                </div>

                {/* <div className="projectItem">
                    <img src={ webDashboard } className="webDashboard" alt="webDashboard" />
                    <p className="project-description">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                    <a 
                        className="project-link" 
                        href="https://malvado996.github.io/Web-Dashboard/" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        visit site
                    </a>
                </div>

                <div className="projectItem">
                    <img src={ gameShow } className="gameShow" alt="gameShow" />
                    <p className="project-description">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                    <a 
                        className="project-link" 
                        href="https://malvado996.github.io/Gameshow-App/" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        visit site
                    </a>
                </div> */}
            </div> 
        </div> 
    )
}

export default ProjectDisplay;