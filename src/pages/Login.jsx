import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing eye and eye slash icons from react-icons/fa

function Login() {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return { ...prevState, [e.target.name]: e.target.value }
    });
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <section className="login">
      <div className="container">
        <h2>Sign In</h2>
        <form className="form login__form">
          <p className="form__error-message">This is an error message!</p>
          <input type="email" name="email" placeholder='Email' value={userData.email} onChange={changeInputHandler} />
          <div className="password-field">
            <input type={showPassword ? 'text' : 'password'} name="password" placeholder='Password' value={userData.password} onChange={changeInputHandler} className='password'/>
            <button type="button" onClick={() => toggleShowPassword('password')} className="toggle-password-icon">
              {showPassword ? <FaEye /> :  <FaEyeSlash />} {/* Show eye-slash icon if password is visible, otherwise show eye icon icon */}
            </button>
          </div>
          <button type="submit" className='btn primary'>Login</button>
        </form>
        <small>Don't have an account? <Link to="/register">sign up</Link></small>
      </div>
    </section>
  )
}

export default Login;