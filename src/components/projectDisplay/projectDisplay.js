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

                <div className="item-container">
                    <div className="item">
                        <img src={ crownSpot } className="crown-spot" alt="crown-spot" />
                        <div className="overlay">
                            <h3>E Commerce Shop Project</h3>
                            <p className="project-description">
                                This is an e commerce shop written with a React frontend and implementing 
                                Redux for state management as well as Sagas to handle asynchronous functionality.
                                Firebase base allows for data storage along with Google authorization while Stripe
                                handles payment processing.
                                
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
                            <h3>Dog App</h3>
                            <p className="project-description">
                                Dog App is a mock web dashboard featuring css Grid and Flexbox for 
                                positioning as well as interactive graphs utlizing JQuery. It is fully 
                                mobile responsive and provides local session storage in the browser
                                as well as a gratuitous application of dogs. 
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
                            <h3>Gameshow App</h3>
                            <p className="project-description">
                                My first very Javascript project; a web version of wheel of fortune 
                                featuring css transitions and transform as well as vanilla JS Dom 
                                manipulation. To cheat, open up your developer tools and inpect the console to
                                see the correct answer.
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

            </div> 
        </div> 
    )
}

export default ProjectDisplay;