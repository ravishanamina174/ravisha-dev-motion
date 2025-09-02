import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Code2, 
  Palette, 
  Zap, 
  Layers, 
  MousePointer2, 
  Sparkles,
  Brain,
  Target,
  Rocket,
  Lightbulb
} from "lucide-react";

const SkillsShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform values for parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  const skills = [
    {
      id: "frontend",
      icon: Code2,
      title: "Frontend",
      subtitle: "React, Next.js, TypeScript",
      description: "Crafting pixel-perfect, responsive interfaces",
      color: "hsl(var(--primary))",
      position: { x: -200, y: -100 }
    },
    {
      id: "design",
      icon: Palette,
      title: "UI/UX Design",
      subtitle: "Figma, Design Systems",
      description: "Creating intuitive user experiences",
      color: "hsl(var(--accent))",
      position: { x: 200, y: -50 }
    },
    {
      id: "performance",
      icon: Zap,
      title: "Performance",
      subtitle: "Optimization, Best Practices",
      description: "Building lightning-fast applications",
      color: "hsl(var(--warm-accent))",
      position: { x: -150, y: 100 }
    },
    {
      id: "architecture",
      icon: Layers,
      title: "Architecture",
      subtitle: "Clean Code, Scalability",
      description: "Designing maintainable systems",
      color: "hsl(var(--secondary))",
      position: { x: 150, y: 80 }
    }
  ];

  const floatingElements = [
    { icon: Brain, delay: 0, duration: 6 },
    { icon: Target, delay: 1, duration: 8 },
    { icon: Rocket, delay: 2, duration: 7 },
    { icon: Lightbulb, delay: 3, duration: 9 },
    { icon: Sparkles, delay: 4, duration: 5 }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-background via-secondary/10 to-accent/5"
    >
      {/* Floating background elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-muted-foreground/20"
          style={{
            left: `${20 + index * 15}%`,
            top: `${10 + index * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <element.icon size={40} />
        </motion.div>
      ))}

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ y: y1 }}
          >
            <span className="gradient-text">Design</span>
            <motion.span
              className="mx-4 text-foreground"
              animate={{ 
                rotateY: [0, 180, 360],
                color: [
                  "hsl(var(--foreground))",
                  "hsl(var(--primary))",
                  "hsl(var(--accent))",
                  "hsl(var(--foreground))"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              +
            </motion.span>
            <span className="gradient-text">Code</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            style={{ y: y2 }}
          >
            Where creativity meets functionality. Crafting digital experiences 
            that users love and developers admire.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            className="absolute inset-0 bg-gradient-primary opacity-10 rounded-full blur-3xl"
            style={{ scale, rotate }}
          />
          
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="absolute"
              style={{
                left: `calc(50% + ${skill.position.x}px)`,
                top: `calc(50% + ${skill.position.y}px)`,
                y: index % 2 === 0 ? y1 : y2
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { 
                opacity: 1, 
                scale: 1,
                x: hoveredSkill && hoveredSkill !== skill.id ? skill.position.x * 0.5 : 0
              } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.1, zIndex: 10 }}
              onHoverStart={() => setHoveredSkill(skill.id)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <motion.div
                className="relative group cursor-pointer"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-60"
                  style={{ 
                    background: skill.color,
                    scale: 1.2
                  }}
                  animate={{
                    opacity: hoveredSkill === skill.id ? 0.6 : 0,
                  }}
                />
                
                {/* Card */}
                <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-lg min-w-[250px]">
                  <motion.div
                    className="flex items-center gap-3 mb-3"
                    animate={{
                      scale: hoveredSkill === skill.id ? 1.05 : 1,
                    }}
                  >
                    <div 
                      className="p-3 rounded-lg"
                      style={{ 
                        background: `linear-gradient(135deg, ${skill.color}, ${skill.color}90)` 
                      }}
                    >
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{skill.title}</h3>
                      <p className="text-sm text-muted-foreground">{skill.subtitle}</p>
                    </div>
                  </motion.div>
                  
                  <motion.p 
                    className="text-sm text-muted-foreground"
                    animate={{
                      opacity: hoveredSkill === skill.id ? 1 : 0.8,
                    }}
                  >
                    {skill.description}
                  </motion.p>

                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100"
                    style={{ 
                      borderColor: skill.color,
                      borderImage: `linear-gradient(45deg, ${skill.color}, transparent, ${skill.color}) 1`
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Central connecting element */}
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              className="relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center">
                <MousePointer2 className="w-8 h-8 text-white" />
              </div>
              
              {/* Pulsing rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border-2 border-primary/30"
                  animate={{
                    scale: [1, 2, 3],
                    opacity: [0.8, 0.2, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 1,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom text */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.p
            className="text-lg text-muted-foreground"
            style={{ y: y1 }}
          >
            Bringing ideas to life through{" "}
            <motion.span
              className="gradient-text font-semibold"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              innovative technology
            </motion.span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsShowcase;