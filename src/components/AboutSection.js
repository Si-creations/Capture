import React from "react";
import home1 from "../img/home1.png";
// Styled *1 - from installed package >>>  install react-router-dom framer-motion react-intersection-observer styled-components. Than you create const at the bottom of code just before export and use it's name on div (or what ever element your code is in) >> In this case it's used on div which is wrapped around whole AboutSection code :). >> extension had to be installed for css code to look like css code => vscode-styled-components >> syntax: const About = styled.div`css code` >> .div is because i'm ising style on div element.
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

// Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills
        </motion.p>
        <motion.button variants={fade}>contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim}  src={home1} alt="man with a camera" /> 
      </Image>
      <Wave></Wave> 
    </About>
  );
};

// just add  initial="hide" animate="show" when element needs to be taken out of staggerChildren

export default AboutSection;