import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const coursework = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Software Architecture',
    'Business Analysis',
    'Software Engineering Methods',
    'Database Management Systems',
    'Web Technologies',
    'Systems Analysis & Design'
  ];

  return (
    <section id="education" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building a strong foundation in software engineering principles and modern technologies
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glow-border card-hover">
              <CardHeader className="pb-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">
                      BSc (Hons) in Software Engineering
                    </CardTitle>
                    <div className="space-y-2">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>SLTC Research University</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>2023 - 2027 (Expected)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* About the Program */}
                  <div>
                    <h4 className="font-semibold mb-4 flex items-center">
                      <BookOpen className="h-5 w-5 mr-2 text-primary" />
                      About the Program
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      A comprehensive 4-year program focusing on modern software development practices, 
                      system design, and emerging technologies. The curriculum combines theoretical 
                      foundations with hands-on project experience, preparing students for the 
                      evolving demands of the software industry.
                    </p>
                  </div>

                  {/* Relevant Coursework */}
                  <div>
                    <h4 className="font-semibold mb-4">Relevant Coursework</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {coursework.map((course, index) => (
                        <motion.div
                          key={course}
                          initial={{ opacity: 0, x: 20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                          transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        >
                          <Badge 
                            variant="outline" 
                            className="justify-start w-full p-2 hover:bg-primary/10 transition-colors"
                          >
                            {course}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Academic Focus */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-8 p-6 bg-gradient-secondary rounded-lg"
                >
                  <h4 className="font-semibold mb-3">Academic Focus & Achievements</h4>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Strong foundation in software engineering principles and methodologies</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Hands-on experience with modern development frameworks and tools</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Project-based learning with real-world application development</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Focus on clean code practices and scalable system architecture</span>
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;