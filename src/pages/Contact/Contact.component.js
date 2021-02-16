import React from 'react';

import Form from '../../components/Form/Form.component';
import empireState from '../../assets/images/empireState.svg';
import chrysler from '../../assets/images/chrysler.svg';

import './Contact.styles.scss';

const Contact = () => {

    return(
        <div className="contact-container">
            <img src={ empireState } className="empireState" alt="logo" />
            <Form />
            <img src={ chrysler } className="chrysler" alt="logo" />
        </div>
    )
}

export default Contact;