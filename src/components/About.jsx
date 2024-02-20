// src/components/About.jsx
import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div>
      <p>
        Welcome to my blog - a space where curiosity knows no bounds! <br />
        Here, I invite you to embark on a journey through the realms of
        philosophy, technology, sports, and whatever else piques my interest at
        the moment. In a world filled with a myriad of fascinating subjects,
        this blog serves as a canvas for my musings, meditations, and
        reflections on the diverse tapestry of life. Expect a dynamic range of
        topics, from the profound to the lighthearted. This blog is not just a
        one-way street -- I encourage you to{" "}
        <a
          href="https://www.linkedin.com/in/vid-vukobratovic/"
          className="about-link"
        >
          reach out
        </a>{" "}
        and share your thoughts. Here's to an insatiable thirst for knowledge,
        pursuit of wisdom, and discovering the extraordinary in the ordinary.
      </p>
    </div>
  );
};

export default About;
