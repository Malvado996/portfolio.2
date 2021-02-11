import React from 'react';

import reactLogo from '../../assets/images/react.svg';

import './AboutSkill.styles.scss';

const AboutSkill = () => {
    return(
        <div>
            <h1>Skills:</h1>
            <span className="skill"><h3>Lorem ipsum.</h3><img src={ reactLogo } className="skillLogo" alt="React" /></span>
            <span className="skill"><h3>Lorem ipsum.</h3><img src={ reactLogo } className="skillLogo" alt="React" /></span>
            <span className="skill"><h3>Lorem ipsum.</h3><img src={ reactLogo } className="skillLogo" alt="React" /></span>
            <span className="skill"><h3>Lorem ipsum.</h3><img src={ reactLogo } className="skillLogo" alt="React" /></span>
            <span className="skill"><h3>Lorem ipsum.</h3><img src={ reactLogo } className="skillLogo" alt="React" /></span>
            <span className="skill"><h3>Lorem ipsum.</h3><img src={ reactLogo } className="skillLogo" alt="React" /></span>
            <span className="skill"><h3>Lorem ipsum.</h3><img src={ reactLogo } className="skillLogo" alt="React" /></span>
            <span className="skill"><h3>Lorem ipsum.</h3><img src={ reactLogo } className="skillLogo" alt="React" /></span>
        </div>
    )
}

export default AboutSkill