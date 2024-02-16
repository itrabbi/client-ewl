import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing eye and eye slash icons from react-icons/fa

function Register() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return { ...prevState, [e.target.name]: e.target.value }
    });
  }

  const toggleShowPassword = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else if (field === 'password2') {
      setShowPassword2(!showPassword2);
    }
  }

  return (
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form className="form register__form">
          <p className="form__error-message">This is an error message!</p>
          <input type="text" name="name" placeholder='Full Name' value={userData.name} onChange={changeInputHandler} autoFocus />
          <input type="email" name="email" placeholder='Email' value={userData.email} onChange={changeInputHandler} />
          <div className="password-field">
            <input type={showPassword ? 'text' : 'password'} name="password" placeholder='Password' value={userData.password} onChange={changeInputHandler} className='password'/>
            <button type="button" onClick={() => toggleShowPassword('password')} className="toggle-password-icon">
              {showPassword ? <FaEye /> :  <FaEyeSlash />} {/* Show eye-slash icon if password is visible, otherwise show eye icon icon */}
            </button>
          </div>
          <div className="password-field">
            <input type={showPassword2 ? 'text' : 'password'} name="password2" placeholder='Confirm Password' value={userData.password2} onChange={changeInputHandler} className='password'/>
            <button type="button" onClick={() => toggleShowPassword('password2')} className="toggle-password-icon">
              {showPassword2 ? <FaEye /> :  <FaEyeSlash />} {/* Show eye-slash icon if password is visible, otherwise show eye icon icon */}
            </button>
          </div>
          <button type="submit" className='btn primary'>Register</button>
        </form>
        <small>Already have an account? <Link to="/login">sign in</Link></small>
      </div>
    </section>
  )
}

export default Register;