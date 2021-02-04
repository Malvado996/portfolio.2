import React from 'react';

import logo from '../logo.svg';
import './homePage.scss';

const HomePage = () => {
   return (
    <div className="App">
        <div className="container">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Philip Rodrigues</h1>
        </div>
    </div>
   )
    
}

export default HomePage;