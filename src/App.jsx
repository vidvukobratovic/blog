// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from "./components/About";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import BlogPost1 from "./components/BlogPost1"; // Import the new component
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Vid's Blog</h1>
          <nav>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/post1" element={<BlogPost1 />} />{" "}
            <Route path="/blog/:postId" element={<BlogPost />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
