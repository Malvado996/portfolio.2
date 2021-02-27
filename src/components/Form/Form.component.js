import React from 'react'; 

import './Form.styles.scss';

const Form = () => {

  return(
    <div className="form-container">
      
      <h3>Contact Me</h3>

      <form>
        <label for='name'>Name:</label><br></br>
        <input type='text' id='name' name='name'></input><br></br>
        <label for='email'>email:</label><br></br>
        <input type='email' id='email' name='email'></input><br></br>
        <label for='message'>message:</label><br></br>
        <textarea id='message' name='message' rows='5' cols='30'></textarea>
      </form>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      
      <span>Email:<a href="mailto: philip.rodrigues.js@gmail.com"> philip.rodrigues.js@gmail.com</a></span>

    </div>
  )

}

export default Form
