import React from 'react';
import Particles from 'react-particles-js';

import logo from '../../logo.svg';
import particleParams from './particle';


import './Home.styles.scss';

const Home = () => {
   return (
    <div className="container">
        <div className="title-container">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Philip Rodrigues</h1>
        </div>
        <Particles id="particles-js" 
            params={ particleParams }
        />
    </div>
   )
    
}

export default Home;