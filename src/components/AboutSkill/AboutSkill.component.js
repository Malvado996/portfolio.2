import React from 'react';

import htmlIcon from '../../assets/images/html.icon.svg';
import sassIcon from '../../assets/images/sass.icon.png';
import javscriptIcon from '../../assets/images/javascript.icon.png';
import reactLogo from '../../assets/images/react.icon.png';
import reduxLogo from '../../assets/images/redux.icon.png';
import jestLogo from '../../assets/images/jest.icon.png';
import githubLogo from '../../assets/images/github.icon.png';
import nodeLogo from '../../assets/images/node.icon.png';

import './AboutSkill.styles.scss';

const AboutSkill = () => {
    return(
        <div className="skill-container">
            <h1>Skills:</h1>
            <span className="skill"><h3>html/css</h3><img src={ htmlIcon } className="skillLogo" alt="htmlIcon" /></span>
            <span className="skill"><h3>Sass</h3><img src={ sassIcon } className="skillLogo" alt="sassIcon" /></span>
            <span className="skill"><h3>Javascript</h3><img src={ javscriptIcon } className="skillLogo" alt="javscriptIcon" /></span>
            <span className="skill"><h3>React</h3><img src={ reactLogo } className="skillLogo" alt="reactLogo" /></span>
            <span className="skill"><h3>Redux</h3><img src={ reduxLogo } className="skillLogo" alt="reduxLogo" /></span>
            <span className="skill"><h3>Node.js</h3><img src={ nodeLogo } className="skillLogo" alt="nodeLogo" /></span>
            <span className="skill"><h3>Jest</h3><img src={ jestLogo } className="skillLogo" alt="jestLogo" /></span>
            <span className="skill"><h3>Github</h3><img src={ githubLogo } className="skillLogo" alt="githubLogo" /></span>
        </div>
    )
}

export default AboutSkill