import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Name and copyright */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold gradient-text mb-2">
              Ravisha Abeysekara
            </h3>
            <p className="text-muted-foreground text-sm">
              © 2024 All rights reserved. Built with{' '}
              <Heart className="inline h-4 w-4 text-red-500" />{' '}
              using React & TypeScript
            </p>
          </div>

          {/* Right side - Back to top button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="btn-glow"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </motion.div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Designed & developed with modern web technologies • 
            React • TypeScript • Tailwind CSS • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;