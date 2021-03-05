import React from 'react';

import './AboutMe.styles.scss';

const AboutMe = () => {
    return (
        <div className="textContainer">
            <h1>ABOUT</h1>
            <p className="aboutText">
                Hello world. My name is Phil, I am a front end engineer who
                thinks in React. I am passionate about the intersection of great 
                design and smart, legibly written code. I love to build and to learn.

                In my free time I can be found hiking with my dog, tinkering with my
                motorcycle, or daydreaming about sacred geometry.
            </p>
        </div>
    )
}

export default AboutMe;