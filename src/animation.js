export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 1,
    },
  },
};


// Everywhere where we want to use animations there needs to be these imports. The second one is the accual animation > if we are using animations on styled components thy need to be adjusted(upraveny) to > const *name* = styled(motion.div)
// Animations
//import { motion } from "framer-motion";
//import { pageAnimation } from "../animation";
