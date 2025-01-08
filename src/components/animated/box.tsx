import { motion } from 'framer-motion';
export const AnimatedBox = ({ children, className }: { children: React.ReactNode, className: string }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      {children}
    </motion.div>
  );
}