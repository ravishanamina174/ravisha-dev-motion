import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@/components/ui/button';
import { ArrowDown, ExternalLink, MessageCircle } from 'lucide-react';
import professionalImg from '@/assets/ravisha-professional.png';
import casualImg from '@/assets/ravisha-casual.png';
import workspaceImg from '@/assets/ravisha-workspace.png';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-muted-foreground mb-4"
            >
              Hi there! 👋
            </motion.p>

            {/* Main title with typing animation */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance"
            >
              I'm{' '}
              <span className="gradient-text">
                Ravisha Abeysekara
              </span>
            </motion.h1>
          </motion.div>

          {/* Right Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Professional Image */}
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <img
                  src={professionalImg}
                  alt="Ravisha Abeysekara - Professional"
                  className="w-full h-[400px] object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-xl" />
              </div>
            </motion.div>

            {/* Floating Secondary Images */}
            <motion.div
              className="absolute -top-8 -right-8 w-32 h-32 z-20"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary/30 to-warm-accent/30 p-1">
                <img
                  src={casualImg}
                  alt="Ravisha Abeysekara - Casual"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 w-36 h-28 z-20"
              animate={{ 
                y: [0, 8, 0],
                rotate: [0, -3, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-accent/30 to-primary/30 p-1">
                <img
                  src={workspaceImg}
                  alt="Ravisha Abeysekara - Workspace"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute top-1/4 -left-4 w-8 h-8 bg-primary/30 rounded-full blur-sm"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1/4 -right-4 w-6 h-6 bg-accent/40 rounded-full blur-sm"
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
            />
          </motion.div>
        </div>

        {/* Centered Content Below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 max-w-4xl mx-auto"
        >

          {/* Subtitle with typing effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 h-16 flex items-center justify-center"
          >
            <TypeAnimation
              sequence={[
                'Software Engineering Undergraduate',
                2000,
                'Full-Stack Developer',
                2000,
                'MERN Stack Specialist',
                2000,
                'UI/UX Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto text-balance"
          >
            I build scalable full-stack applications with modern technologies,
            focusing on clean code, exceptional user experiences, and robust architecture.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground group"
            >
              View My Projects
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="btn-glow group"
            >
              <MessageCircle className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="h-5 w-5 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;