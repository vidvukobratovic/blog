import React from "react";
import { Link } from "react-router-dom";
import "../styles/BlogList.css"; // Import the CSS file from the styles directory

const BlogImage = ({ to, src, alt, title }) => (
  <Link to={to} className="blog-image-container">
    <img className="blog-image" src={src} alt={alt} />
    <div className="overlay">{title}</div>
  </Link>
);

const BlogList = () => {
  return (
    <div className="blog-list">
      <BlogImage
        to="/blog/post1"
        src={import.meta.env.BASE_URL + "v1.png"}
        alt="Caffè Macchiato"
        title="Caffè Macchiato"
      />
      {/*
      <BlogImage
        to="/blog/post2"
        src={import.meta.env.BASE_URL + "80.jpg"}
        alt="Blog Post 2"
        title="Page 2"
      />
      <BlogImage
        to="/blog/post3"
        src={import.meta.env.BASE_URL + "p.jpg"}
        alt="Blog Post 3"
        title="Page 3"
      />
      */}
    </div>
  );
};

export default BlogList;
