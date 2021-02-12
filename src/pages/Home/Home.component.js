import React from 'react';
import Particles from 'react-particles-js';

import motorcycle from '../../assets/images/motorcycle.svg';
import particleParams from '../../assets/particles/Home.particle';


import './Home.styles.scss';

const Home = () => {
   return (
    <div className="container">
        <div className="title-container">
            <h1>Philip Rodrigues</h1>
            <img src={ motorcycle } className="motorcycle" alt="logo" />
        </div>
        <Particles 
            id="particles-home" 
            params={ particleParams }
        />
    </div>
   )
    
}

export default Home;