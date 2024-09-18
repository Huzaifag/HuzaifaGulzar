import { easeInOut, motion } from "framer-motion"; 

// variants 
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "250%",
  },
  exit: {
    top: ["250%", "0%"],
  },
};

// Calculating reversed steps 
const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

export default function Stairs() {
  return (
    <>
      {/* Render 6 divs, each representing a step of the stair.
          Each div will have the same animation defined by the stairAnimation object. The delay for each div is calculated dynamically based on its reversed index,
          creating a staggered effect with decreasing delay for each subsequent step. 
      */}
      {Array(6).fill().map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"  
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.6,
              ease: easeInOut, 
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
}
