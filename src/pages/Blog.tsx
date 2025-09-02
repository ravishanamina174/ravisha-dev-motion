import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const blogPosts = [
    {
      id: 1,
      title: 'How I Built My Full-Stack E-Commerce App',
      excerpt: 'A deep dive into building Mebius, a digital shopping ecosystem using Node.js, Express, MongoDB, and React. Learn about the challenges, solutions, and key architectural decisions.',
      content: `Building a full-stack e-commerce application from scratch was one of the most challenging yet rewarding experiences in my development journey. Here's how I approached it:

## Planning & Architecture

The first step was to design a scalable architecture that could handle user authentication, product management, payments, and file uploads. I chose the MERN stack for its flexibility and modern ecosystem.

## Key Technologies Used

- **Backend**: Node.js with Express.js for robust API development
- **Database**: MongoDB for flexible document storage
- **Authentication**: Clerk for secure user management
- **Payments**: Stripe integration for secure transactions
- **Storage**: AWS S3 for scalable file storage
- **Frontend**: React with TypeScript for type safety

## Challenges & Solutions

### 1. Authentication & Authorization
Implementing secure authentication was crucial. Clerk provided a comprehensive solution with social logins, email verification, and role-based access control.

### 2. Payment Processing
Integrating Stripe required careful handling of webhooks and ensuring PCI compliance. I implemented proper error handling and transaction logging.

### 3. File Upload Management
AWS S3 integration allowed for scalable image and document storage with proper access controls and CDN delivery.

## Key Learnings

- **Clean Architecture**: Separating concerns made the codebase maintainable
- **Error Handling**: Comprehensive error handling improves user experience
- **Testing**: Unit and integration tests are essential for reliability
- **Security**: Never compromise on security, especially for e-commerce

## Performance Optimizations

- Database indexing for faster queries
- Image optimization and lazy loading
- API rate limiting and caching
- Code splitting for better load times

This project taught me the importance of planning, proper architecture, and attention to detail in full-stack development.`,
      author: 'Ravisha Abeysekara',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['Full-Stack', 'React', 'Node.js', 'E-Commerce', 'MongoDB'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Lessons from My First Backend Project',
      excerpt: 'Reflecting on the journey of building my first production-ready backend. From API design to database optimization, here are the key lessons I learned.',
      content: `My first serious backend project was both exciting and intimidating. Here are the most valuable lessons I learned that shaped my approach to backend development:

## Starting with the Right Foundation

### API Design Principles
- **RESTful conventions**: Following REST principles made the API intuitive
- **Consistent naming**: Using clear, consistent endpoint naming improved developer experience
- **Proper HTTP status codes**: Using the right status codes for different scenarios

### Database Design
- **Normalization vs. Denormalization**: Learning when to normalize and when to denormalize for performance
- **Indexing strategy**: Understanding how indexes impact query performance
- **Data relationships**: Properly modeling relationships between entities

## Security Best Practices

### Authentication & Authorization
- **JWT implementation**: Secure token-based authentication
- **Role-based access**: Implementing proper authorization layers
- **Input validation**: Never trust client input

### Data Protection
- **Environment variables**: Keeping sensitive data secure
- **HTTPS everywhere**: Ensuring encrypted communication
- **Rate limiting**: Protecting against abuse and attacks

## Performance Considerations

### Database Optimization
- **Query optimization**: Writing efficient database queries
- **Connection pooling**: Managing database connections effectively
- **Caching strategies**: Implementing Redis for frequently accessed data

### Code Structure
- **Middleware pattern**: Using Express middleware for cross-cutting concerns
- **Error handling**: Centralized error handling for consistency
- **Logging**: Proper logging for debugging and monitoring

## Testing & Deployment

### Testing Strategy
- **Unit tests**: Testing individual functions and modules
- **Integration tests**: Testing API endpoints and database interactions
- **Test-driven development**: Writing tests first improved code quality

### Deployment Lessons
- **Environment configuration**: Managing different environments (dev, staging, prod)
- **CI/CD pipelines**: Automated testing and deployment
- **Monitoring**: Setting up proper monitoring and alerting

## Key Takeaways

1. **Start simple, iterate quickly**: Don't over-engineer from the beginning
2. **Documentation matters**: Good API documentation saves time for everyone
3. **Error handling is crucial**: Proper error handling improves user experience
4. **Security from day one**: Don't treat security as an afterthought
5. **Performance is a feature**: Consider performance implications early

## Tools That Made a Difference

- **Postman**: For API testing and documentation
- **MongoDB Compass**: For database visualization and queries
- **Express.js**: For rapid API development
- **Helmet.js**: For security headers
- **Morgan**: For request logging

This project taught me that backend development is not just about making things work, but making them work securely, efficiently, and maintainably.`,
      author: 'Ravisha Abeysekara',
      date: '2024-01-10',
      readTime: '6 min read',
      tags: ['Backend', 'API Design', 'Database', 'Security', 'Performance'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Modern React Patterns I Use in Every Project',
      excerpt: 'Exploring the React patterns and practices that have become essential in my development workflow. From custom hooks to component composition.',
      content: `After building several React applications, I've developed a set of patterns and practices that I now use in every project. Here are the most impactful ones:

## Custom Hooks for Logic Reuse

### useLocalStorage Hook
\`\`\`typescript
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}
\`\`\`

## Component Composition Patterns

### Compound Components
Instead of passing multiple props, I use compound components for better API design:

\`\`\`typescript
const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

Modal.Header = ({ children }) => <header className="modal-header">{children}</header>;
Modal.Body = ({ children }) => <main className="modal-body">{children}</main>;
Modal.Footer = ({ children }) => <footer className="modal-footer">{children}</footer>;
\`\`\`

## State Management Patterns

### Context + Reducer for Complex State
For complex state logic, I combine Context API with useReducer:

\`\`\`typescript
type State = {
  user: User | null;
  loading: boolean;
  error: string | null;
};

type Action = 
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_USER'; payload: User }
  | { type: 'SET_ERROR'; payload: string };

const authReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_USER':
      return { ...state, user: action.payload, error: null };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
\`\`\`

## Performance Optimization Patterns

### Memoization Strategy
- **React.memo**: For component memoization
- **useMemo**: For expensive calculations
- **useCallback**: For function references in dependencies

### Lazy Loading
\`\`\`typescript
const LazyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

## Error Boundary Pattern
\`\`\`typescript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}
\`\`\`

## Form Handling with React Hook Form
\`\`\`typescript
function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await submitForm(data);
      toast.success('Form submitted successfully!');
    } catch (error) {
      toast.error('Submission failed');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email', { 
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address'
          }
        })}
        placeholder="Email"
      />
      {errors.email && <span>{errors.email.message}</span>}
    </form>
  );
}
\`\`\`

## Testing Patterns

### Custom Render Function
\`\`\`typescript
function customRender(ui: ReactElement, options?: RenderOptions) {
  return render(ui, {
    wrapper: ({ children }) => (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    ),
    ...options,
  });
}
\`\`\`

These patterns have significantly improved my development speed, code quality, and maintainability. The key is to understand when to apply each pattern and not to over-engineer simple solutions.`,
      author: 'Ravisha Abeysekara',
      date: '2024-01-05',
      readTime: '10 min read',
      tags: ['React', 'JavaScript', 'TypeScript', 'Patterns', 'Best Practices'],
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (selectedPost !== null) {
    const post = blogPosts.find(p => p.id === selectedPost);
    if (!post) return null;

    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={() => setSelectedPost(null)}
                className="flex items-center"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
              <Link to="/">
                <Button variant="outline">
                  Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Article */}
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Article Header */}
              <header className="mb-12 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${post.gradient} rounded-lg flex items-center justify-center mx-auto mb-6`}>
                  <div className="w-8 h-8 bg-white rounded opacity-90" />
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap justify-center items-center gap-4 text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {post.readTime}
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </header>

              {/* Article Content */}
              <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
                <div className="whitespace-pre-line leading-relaxed">
                  {post.content}
                </div>
              </div>

              {/* Article Footer */}
              <footer className="mt-12 pt-8 border-t border-border">
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Thanks for reading! Share your thoughts or questions.
                  </p>
                  <Link to="/#contact">
                    <Button>
                      Get In Touch
                    </Button>
                  </Link>
                </div>
              </footer>
            </motion.div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" ref={ref}>
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold gradient-text"
            >
              Blog
            </motion.h1>
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Thoughts on <span className="gradient-text">Development</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sharing insights, lessons learned, and best practices from my journey 
              in software development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 max-w-4xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="glow-border card-hover cursor-pointer" onClick={() => setSelectedPost(post.id)}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${post.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <div className="w-6 h-6 bg-white rounded opacity-90" />
                      </div>
                      <div className="flex flex-wrap gap-2 ml-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <CardTitle className="text-2xl mb-3 hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-primary hover:text-primary/80 transition-colors">
                      <span className="font-medium mr-2">Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;