import React from 'react';
import Particles from 'react-particles-js';

import motorcycle from '../../assets/motorcycle.svg';
import particleParams from './Home.particle';


import './Home.styles.scss';

const Home = () => {
   return (
    <div className="container">
        <div className="title-container">
            <img src={ motorcycle } className="motorcycle" alt="logo" />
            <h1>Philip Rodrigues</h1>
        </div>
        <Particles id="particles-home" 
            params={ particleParams }
        />
    </div>
   )
    
}

export default Home;