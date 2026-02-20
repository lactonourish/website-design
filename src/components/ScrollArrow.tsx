import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ScrollArrowProps {
  targetId?: string;
  className?: string;
}

export default function ScrollArrow({ targetId, className = '' }: ScrollArrowProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide arrow after scrolling down 100px
      setIsVisible(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
      transition={{ duration: 0.3 }}
      className={`flex justify-center ${className}`}
    >
      <motion.button
        onClick={handleClick}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="p-3 rounded-full bg-white/30 backdrop-blur-sm border border-white/50 hover:bg-white/50 transition-colors"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-6 h-6 text-white" />
      </motion.button>
    </motion.div>
  );
}
