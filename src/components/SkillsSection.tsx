import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Palette, 
  Database, 
  Cloud, 
  Zap, 
  Brain,
  Layers,
  Sparkles,
  Target,
  Rocket,
  Monitor,
  Server
} from 'lucide-react';

const SkillsSection = () => {
  const ref = useRef(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Mastery',
      icon: Monitor,
      description: 'Crafting exceptional user experiences',
      color: 'hsl(var(--primary))',
      skills: [
        { name: 'React.js', level: 90, description: 'Component-based architecture' },
        { name: 'Next.js', level: 85, description: 'Full-stack React framework' },
        { name: 'TypeScript', level: 88, description: 'Type-safe JavaScript' },
        { name: 'Tailwind CSS', level: 90, description: 'Utility-first CSS' },
        { name: 'Framer Motion', level: 85, description: 'Advanced animations' },
        { name: 'UI/UX Design', level: 87, description: 'User-centered design' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Engineering',
      icon: Server,
      description: 'Building scalable server solutions',
      color: 'hsl(var(--accent))',
      skills: [
        { name: 'Node.js', level: 88, description: 'Server-side JavaScript' },
        { name: 'Express.js', level: 85, description: 'Web application framework' },
        { name: 'MongoDB', level: 82, description: 'NoSQL database' },
        { name: 'REST APIs', level: 90, description: 'RESTful web services' },
        { name: 'Authentication', level: 85, description: 'Secure user auth' },
        { name: 'Database Design', level: 80, description: 'Efficient data modeling' }
      ]
    },
    {
      id: 'tools',
      title: 'DevOps & Tools',
      icon: Cloud,
      description: 'Modern development workflow',
      color: 'hsl(var(--warm-accent))',
      skills: [
        { name: 'Git & GitHub', level: 90, description: 'Version control' },
        { name: 'Vercel', level: 88, description: 'Deployment platform' },
        { name: 'AWS Services', level: 78, description: 'Cloud infrastructure' },
        { name: 'Docker', level: 75, description: 'Containerization' },
        { name: 'CI/CD', level: 80, description: 'Automated deployment' },
        { name: 'Performance', level: 85, description: 'Optimization techniques' }
      ]
    }
  ];

  const FloatingIcon = ({ icon: Icon, delay }: { icon: any, delay: number }) => (
    <motion.div
      className="absolute text-muted-foreground/10"
      animate={{
        y: [0, -20, 0],
        rotate: [0, 10, -10, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      <Icon size={30} />
    </motion.div>
  );

  const SkillCard = ({ skill, index, categoryColor }: { skill: any, index: number, categoryColor: string }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.1,
          type: "spring",
          stiffness: 100
        }}
        whileHover={{ 
          scale: 1.05,
          y: -10,
          transition: { duration: 0.2 }
        }}
        className="relative group cursor-pointer"
      >
        <Card className="relative p-6 bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden">
          {/* Animated background glow */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            style={{ 
              background: `radial-gradient(circle at center, ${categoryColor}, transparent)`,
            }}
          />
          
          {/* Skill level indicator */}
          <motion.div
            className="absolute top-0 left-0 h-1 bg-gradient-to-r"
            style={{ 
              background: `linear-gradient(90deg, ${categoryColor}, ${categoryColor}80)`,
            }}
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-foreground">{skill.name}</h4>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.8 }}
                className="flex items-center gap-2"
              >
                <Badge 
                  variant="secondary" 
                  className="text-xs px-2 py-1"
                  style={{ backgroundColor: `${categoryColor}20` }}
                >
                  {skill.level}%
                </Badge>
              </motion.div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
            
            {/* Animated progress bar */}
            <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full rounded-full relative"
                style={{ 
                  background: `linear-gradient(90deg, ${categoryColor}, ${categoryColor}cc)`,
                }}
                initial={{ width: 0, x: '-100%' }}
                animate={isInView ? { width: `${skill.level}%`, x: 0 } : {}}
                transition={{ 
                  duration: 1.2, 
                  delay: index * 0.1 + 0.6,
                  ease: "easeOut"
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/30"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.2
                  }}
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
                  }}
                />
              </motion.div>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[Code2, Palette, Database, Cloud, Zap, Brain, Layers, Sparkles, Target, Rocket].map((icon, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${10 + (index * 8) % 80}%`,
              top: `${5 + (index * 12) % 80}%`,
            }}
          >
            <FloatingIcon icon={icon} delay={index * 0.5} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div style={{ y }}>
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6 relative"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <span className="gradient-text">Skills</span>
              <motion.span 
                className="mx-4 text-foreground inline-block"
                animate={{ rotateY: [0, 180, 360] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                &
              </motion.span>
              <span className="gradient-text">Expertise</span>
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-16 h-16 rounded-full bg-gradient-primary opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
            </motion.h2>
          </motion.div>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Demonstrating technical excellence through modern technologies and innovative solutions
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="flex bg-card/50 backdrop-blur-sm rounded-full p-2 border border-border/50">
            {skillCategories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(index)}
                className={`relative px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === index 
                    ? 'text-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeCategory === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full"
                    style={{ 
                      background: `linear-gradient(135deg, ${category.color}20, ${category.color}10)`,
                      border: `1px solid ${category.color}40`
                    }}
                  />
                )}
                <category.icon size={18} className="relative z-10" />
                <span className="relative z-10 font-medium">{category.title}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              categoryColor={skillCategories[activeCategory].color}
            />
          ))}
        </motion.div>

        {/* Tech Stack Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">
            <span className="gradient-text">Technology Stack</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 
              'Express', 'MongoDB', 'PostgreSQL', 'Tailwind', 'Framer Motion',
              'Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'Stripe'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.2 + index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                onHoverStart={() => setHoveredSkill(tech)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <Badge 
                  variant="outline" 
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 cursor-default ${
                    hoveredSkill === tech 
                      ? 'bg-primary/10 border-primary/50 text-primary shadow-lg' 
                      : 'hover:bg-primary/5 hover:border-primary/30'
                  }`}
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;