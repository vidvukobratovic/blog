// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import About from "./components/About";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import BlogPost1 from "./components/BlogPost1";
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
                <Link to="/">Blog</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog/post1" element={<BlogPost1 />} />
            <Route path="/blog/:postId" element={<BlogPost />} />
          </Routes>
        </main>

        {/* Helmet for dynamic title */}
        <DynamicTitle />
      </div>
    </Router>
  );
};

const DynamicTitle = () => {
  const location = useLocation();
  const pageTitle =
    location.pathname === "/" ? "Home" : location.pathname.slice(1);

  return (
    <Helmet>
      <title>Vid's Blog - {pageTitle}</title>
    </Helmet>
  );
};

export default App;
