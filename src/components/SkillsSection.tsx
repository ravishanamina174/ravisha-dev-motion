import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 88 },
        { name: 'JavaScript', level: 92 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Shadcn UI', level: 85 }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'SQL', level: 78 },
        { name: 'REST APIs', level: 90 },
        { name: 'Python', level: 75 }
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Tools & Cloud',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Vercel', level: 88 },
        { name: 'Render', level: 82 },
        { name: 'Cloudflare R2', level: 80 },
        { name: 'AWS S3', level: 78 },
        { name: 'Java', level: 75 }
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const SkillBar = ({ skill, delay }: { skill: { name: string; level: number }; delay: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">{skill.name}</span>
        <Badge variant="secondary" className="text-xs">
          {skill.level}%
        </Badge>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <motion.div
          className="h-2 bg-gradient-primary rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <Card className="card-hover h-full">
                <CardHeader>
                  <CardTitle className="text-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                      <div className="w-6 h-6 bg-white rounded opacity-90" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      delay={categoryIndex * 0.2 + skillIndex * 0.1}
                    />
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold mb-6">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Clerk Auth', 'Stripe', 'Framer Motion', 'React Query', 
              'Vite', 'Clean Architecture', 'Responsive Design', 
              'UI/UX Design', 'Problem Solving', 'Team Collaboration'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
              >
                <Badge 
                  variant="outline" 
                  className="px-3 py-1 hover:bg-primary/10 transition-colors cursor-default"
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