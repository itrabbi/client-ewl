import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png"
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";


function Header() {
  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800 ? true : false);

  const  closwNavHandler = () => {
    if(window.innerWidth < 800){
      setIsNavShowing(false);
    } else{
      setIsNavShowing(true);
    }
  }

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo"  onClick={closwNavHandler}>
          <img src={Logo} alt="EWL" />
        </Link>
       { isNavShowing && <ul className="nav__menu">
          <li><Link to="/profile/easyweblearner" onClick={closwNavHandler}>Easy Web Learner</Link></li>
          <li><Link to="/create" onClick={closwNavHandler}>Create Posts </Link></li>
          <li><Link to="/authors" onClick={closwNavHandler}>Authors</Link></li>
          <li><Link to="/logout" onClick={closwNavHandler}>Logout</Link></li>
        </ul>}
        <button className="nav__toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
          {isNavShowing ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Header;
