import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: 'Mebius - Digital Shopping Ecosystem',
      description: 'A comprehensive e-commerce platform built with modern technologies. Features include user authentication, payment processing, admin dashboard, and cloud storage integration.',
      technologies: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'Clerk Auth', 'Stripe', 'AWS S3', 'React'],
      liveUrl: 'https://my-react-node-app.vercel.app',
      githubUrl: 'https://github.com/ravishanamina174/my-react-node-app',
      features: [
        'Full-stack architecture with clean code principles',
        'Secure authentication and authorization',
        'Payment processing with Stripe integration',
        'Cloud storage for media files',
        'Responsive admin dashboard',
        'REST API design and implementation'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'ParkNet - Smart Parking Management',
      description: 'An intelligent parking management system with real-time IoT sensor simulation, interactive maps, and modern UI/UX design for smart city solutions.',
      technologies: ['React', 'TypeScript', 'Clerk OAuth', 'Google Maps API', 'Vite', 'Tailwind CSS', 'Shadcn UI'],
      liveUrl: 'https://parknet-smarter-cities.vercel.app',
      githubUrl: 'https://github.com/ravishanamina174/parknet-smarter-cities',
      features: [
        'Real-time parking availability tracking',
        'IoT sensor simulation for smart parking',
        'Interactive Google Maps integration',
        'OAuth authentication with Clerk',
        'Protected routes and user management',
        'Responsive design with modern UI components'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing my latest work in full-stack development and modern web technologies
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="glow-border card-hover overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Project Info */}
                  <div className="p-8">
                    <CardHeader className="p-0 mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center mb-4`}>
                        <div className="w-6 h-6 bg-white rounded opacity-90" />
                      </div>
                      <CardTitle className="text-2xl mb-3">{project.title}</CardTitle>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </CardHeader>

                    <CardContent className="p-0">
                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          asChild
                          className="btn-glow flex-1"
                        >
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          asChild
                          className="btn-glow flex-1"
                        >
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>

                  {/* Project Features */}
                  <div className="bg-muted/30 p-8 flex items-center">
                    <div>
                      <h4 className="font-semibold mb-4 text-lg">Key Features</h4>
                      <ul className="space-y-3">
                        {project.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                            transition={{ duration: 0.4, delay: index * 0.2 + featureIndex * 0.1 }}
                            className="flex items-start"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more projects or discuss a collaboration?
          </p>
          <Button
            size="lg"
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-glow"
          >
            Let's Work Together
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;