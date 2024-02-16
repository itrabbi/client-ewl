import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../images/Avatar.png"

function PostAuthor() {
  return (
    <Link to={`/posts/users/easyweblearner`} className="post__author">
        <div className="post__author-avatar">
            <img src={Avatar} alt="Easy Web Learner" />
        </div>
        <div className="post__author-details">
            <h5>By: Easy Web Learner</h5>
            <small>Just Now</small>
        </div>
    </Link>
  )
}

export default PostAuthor;
