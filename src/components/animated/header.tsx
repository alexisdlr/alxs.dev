import {motion} from 'framer-motion';

export const AnimatedHeader = ({children, className}: {children: React.ReactNode, className: string}) => {
  return (
    <motion.header
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0}}
      transition={{ delay: 0.5}}	
    >
      {children}
    </motion.header>
  );
}