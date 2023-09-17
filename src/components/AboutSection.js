import React from "react";
import home1 from "../img/home1.png";
// Styled *1 - from installed package >>>  install react-router-dom framer-motion react-intersection-observer styled-components. Than you create const at the bottom of code just before export and use it's name on div (or what ever element your code is in) >> In this case it's used on div which is wrapped around whole AboutSection code :). >> extension had to be installed for css code to look like css code => vscode-styled-components >> syntax: const About = styled.div`css code` >> .div is because i'm ising style on div element.
import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills
        </p>
        <button>contact Us</button>
      </div>
      <div className="image">
        <img src={home1} alt="man with a camera" />
      </div>
    </About>
  );
};

// Styled Component *1
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

export default AboutSection;
