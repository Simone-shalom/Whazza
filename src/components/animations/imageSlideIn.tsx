'use client'

import { motion } from "framer-motion";

const ImageSlideIn = ({children}: {children: React.ReactNode}) => {
    return (
    <motion.div
    initial={{ x: '-100%', filter: 'blur(10px)' }}
    animate={{ x: 0, filter: 'blur(0px)' }}
    transition={{ duration: 1.5, ease: 'easeOut' }}
  >
        {children}
      </motion.div>
    );
  };
  
  export default ImageSlideIn;
  