// src/components/BlogList.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/BlogList.css"; // Import the CSS file from the styles directory

const BlogList = () => {
  return (
    <div className="blog-list">
      <Link to="/blog/post1">
        <img
          className="blog-image"
          src={import.meta.env.BASE_URL + "a.jpg"}
          alt="Blog Post 1"
        />
      </Link>
      <Link to="/blog/post2">
        <img
          className="blog-image"
          src={import.meta.env.BASE_URL + "80.jpg"}
          alt="Blog Post 2"
        />
      </Link>
      <Link to="/blog/post3">
        <img
          className="blog-image"
          src={import.meta.env.BASE_URL + "p.jpg"}
          alt="Blog Post 3"
        />
      </Link>
    </div>
  );
};

export default BlogList;
