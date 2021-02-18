import React from 'react';
// import Particles from 'react-particles-js';

// import contactStar from '../../assets/particles/contactStar.particle';

import Form from '../../components/Form/Form.component';
import empireState from '../../assets/images/empireState.svg';
import chrysler from '../../assets/images/chrysler.svg';

import './Contact.styles.scss';

const Contact = () => {

    return(
        <div>
        <div className="contact-container">
            <img src={ empireState } className="empireState" alt="logo" />
            <Form />
            <img src={ chrysler } className="chrysler" alt="logo" />
        </div>
        {/* <Particles 
            params={contactStar}
            id="particles-contact"
        /> */}
        </div>
    )
}

export default Contact;