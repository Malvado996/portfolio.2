import React from 'react'; 

import './Form.styles.scss';

const Form = () => {

  return(
    <div className="form-container">
      
      <h3>Contact Me</h3>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <form>
        <label for='name'><p className='form-label-text'>Name:</p></label>
        <input type='text' id='name' name='name'></input>
        <label for='email'><p className='form-label-text'>Email:</p></label>
        <input type='email' id='email' name='email'></input>
        <label for='message'><p className='form-label-text'>Message:</p></label>
        <textarea id='message' name='message' rows='5' cols='30'></textarea>
      </form>
      
      <span className='email-span'>Email:<a href="mailto: philip.rodrigues.js@gmail.com"> philip.rodrigues.js@gmail.com</a></span>

    </div>
  )

}

export default Form
