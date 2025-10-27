import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';

const Login = () => {

  const [SignState,setSignstate] = useState("Sign In")


  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="logo" />
      <div className='login-form'>
        <h1>{SignState}</h1>
        <form>
          {SignState == "Sign Up" ?<input type='text' placeholder='Your name'/>:<></>
 }
          <input type='email' placeholder='email'/>
          <input type='Password' placeholder='Password...'/>
          <button>{SignState}</button>
          <div className='form-help'>
            <div className='remember'>
              <input type='Checkbox'/>
              <label>Remember Me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <div className='form-switch'>
          {SignState=="Sign In"?<p>New to Netflix? <span onClick={()=>{setSignstate("Sign Up")}}>Sign Up Now</span></p>
          :<p>Already have account?<span onClick={()=>{setSignstate("Sign In")}}>Sign In Now</span></p>}
          
        </div>
      </div>
    </div>
  )
}

export default Login