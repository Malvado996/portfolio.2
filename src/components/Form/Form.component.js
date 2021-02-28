import React, { useState } from 'react'; 
import firebase from '../../firebase';

import './Form.styles.scss';

const Form = () => {

  const [ values, setValues ] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    setValues({
      name: '',
      email: '',
      message: '',
    });
    window.alert('Message Successfully Submitted');
  }

  return(
    <div className="form-container">
      
      <h3>Contact Me</h3>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <form onSubmit={ handleSubmit }>
        <label htmlFor='name'><p className='form-label-text'>Name:</p></label>
          <input 
            onChange={ handleInputChange }
            value={ values.name}  
            type='text' 
            id='name' 
            name='name'>
          </input>
        <label htmlFor='email'><p className='form-label-text'>Email:</p></label>
          <input 
            onChange={ handleInputChange }
            value={ values.email } 
            type='email' id='email' 
            name='email'>
          </input>
        <label htmlFor='message'><p className='form-label-text'>Message:</p></label>
          <textarea 
            onChange={ handleInputChange }
            value={ values.message } 
            id='message' 
            name='message' 
            rows='5' 
            cols='30'>
          </textarea>
        <button type='submit' className='submit-button'><p className='form-label-text'>submit</p></button>
      </form>
      
      <span className='email-span'>Email:<a href="mailto: philip.rodrigues.js@gmail.com"> philip.rodrigues.js@gmail.com</a></span>

    </div>
  )

}

export default Form
