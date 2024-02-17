import React, { useState , useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing eye and eye slash icons from react-icons/fa
import axios from "axios";

import { UserContext } from "../context/userContext.js";

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const {setCurrentUser} = useContext(UserContext);

  const [showPassword, setShowPassword] = useState(false);

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const loginUser = async (e) =>{
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/login`, userData);
      const user = await response.data;
      setCurrentUser(user);
      navigate('/');
    } catch (err) {
      setError(err.response.data.message);
    }
  }

  return (
    <section className="login">
      <div className="container">
        <h2>Sign In</h2>
        <form className="form login__form" onSubmit={loginUser}>
          {error && <p className="form__error-message">{error}</p>}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={changeInputHandler}
            autoFocus
          />
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={userData.password}
              onChange={changeInputHandler}
              className="password"
            />
            <button
              type="button"
              onClick={() => toggleShowPassword("password")}
              className="toggle-password-icon"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}{" "}
              {/* Show eye-slash icon if password is visible, otherwise show eye icon icon */}
            </button>
          </div>
          <button type="submit" className="btn primary">
            Login
          </button>
        </form>
        <small>
          Don't have an account? <Link to="/register">sign up</Link>
        </small>
      </div>
    </section>
  );
}

export default Login;
