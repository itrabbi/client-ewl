import React from "react";
import { Link } from "react-router-dom";

function CategoryList() {
  return (
    <section className="container">
        <div>
        <ul className="categories__list">
            <li><Link to="/posts/categories/Html%20&%20Css">Html & Css</Link></li>
            <li><Link to="/posts/categories/JavaScript">JavaScript</Link></li>
            <li><Link to="/posts/categories/tools">Tools</Link></li>
        </ul>
    </div>
    </section>
  )
}

export default CategoryList;
