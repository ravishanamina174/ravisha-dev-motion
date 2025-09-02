import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Users, Lightbulb, Target } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Proficient in MERN stack with modern frameworks and tools'
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Strong teamwork and communication skills in project environments'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Analytical approach to complex technical challenges'
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'Focus on delivering impactful solutions and measurable improvements'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glow-border card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">
                  Software Engineering Undergraduate
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm a Software Engineering undergraduate at SLTC Research University (2023–2027) 
                  who has developed scalable web applications that improve usability and system 
                  performance. Through applying MERN stack, React, Next.js, and UI/UX principles, 
                  I've successfully solved complex problems in both academic and personal projects.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My passion lies in creating efficient, user-centered solutions that bridge the 
                  gap between technical complexity and intuitive design. I'm driven to bring the 
                  same impact and innovation to my role as a Software Engineer Intern, contributing 
                  to meaningful projects that make a difference.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="card-hover h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h4 className="font-semibold mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;