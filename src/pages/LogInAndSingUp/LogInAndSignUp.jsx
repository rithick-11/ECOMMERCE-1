import React from 'react'
import './LogInAndSignUp.css'

const LogInAndSignUp = () => {
  return (
    <div className='login-singup-container component-Container'>
      <div className='form-container'>
        <h1>Create Account</h1>
        <form className='log-in-form'>
          <div className='login-firstName'>
            <label htmlFor="firtName">firt name</label>
            <input type="text"id='firtName' placeholder='Ex: Rithickroshan' required />
          </div>
          <div className='login-lasttName'>
            <label htmlFor="lastName">Last name</label>
            <input type="text"id='lastName' placeholder='Ex: Selvaraj'  />
          </div>
          <div className='login-email-field'>
            <label htmlFor="email">Email</label>
            <input type="email"id='email' placeholder='Ex: rithickroshan7878@gmail.com' required  />
          </div>
          <div className='login-setPassword'>
            <label htmlFor="setPassword">Set password</label>
            <input type="password" id='setPassword' placeholder='Password must be 8 charactar' required />
          </div>
          <div className='login-confirmPassword'>
            <label htmlFor="confirmPassword">Confirm password</label>
            <input type="password" id='confirmPassword' placeholder='Same as Set password' required  />
          </div>
          <div className='accept-temrs'>
            <input type="checkbox" id='accept-temrs' required />
            <label htmlFor="accept-temrs">By continuing, I agree to the terms of use & privacy policy</label>
          </div>
          <div>
            <button className='btn btn-success'>
              Submit
            </button>
          </div>
          <p>Already have an account? <br/> <span>here Sing-up</span></p>
        </form>
      </div>
    </div>
  )
}

export default LogInAndSignUp
