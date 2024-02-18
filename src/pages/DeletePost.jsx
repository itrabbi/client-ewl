import React, { useContext, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../context/userContext";
import axios from 'axios'

function DeletePost() {
  const navigate = useNavigate();
  const location = useLocation();

  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  // redirect to login page for any user who isn't logged in
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const  removePost  = async () =>{
    
  }

  return (
    <Link className="btn sm danger" onClick={() => removePost()}>Delete</Link>
  )
}

export default DeletePost;
