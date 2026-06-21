import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export const AnimatedPage = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{
        duration: 0.35,
        ease: 'easeOut',
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};
