import React from "react";
import styled from "styled-components";
import { About } from "../styles";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ContactUs = () => {
  return (
    <Contact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{background: "#fff"}}
    >
      <h1>Our CONTACT</h1>
    </Contact>
  );
};

const Contact = styled(motion(About))`
  background: #a01919;
  h1{
    color: #a01919
  }
`

export default ContactUs;
