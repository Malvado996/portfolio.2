import React from 'react';

import spaceMan from '../../assets/images/spaceMan.svg'
import spaceDog from '../../assets/images/spaceDog2.svg';

import './AboutImage.styles.scss';

const AboutImage = () => {
    return(
        <div className="imageContainer">
            <img src={ spaceDog } className="spaceDog" alt="spaceman" />
            <img src={ spaceMan } className="spaceMan" alt="spaceman" />
        </div> 
    )
}

export default AboutImage;