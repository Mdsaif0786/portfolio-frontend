import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  Shield,
  Zap,
  Users,
  Target,
  Award
} from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skills = [
    {
      category: 'Frontend',
      icon: Code,
      technologies: ['React.js', 'JavaScript', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Redux']
    },
    {
      category: 'Backend',
      icon: Server,
      technologies: ['Node.js', 'Express.js', 'JavaScript', 'TypeScript', 'REST APIs', 'GraphQL']
    },
    {
      category: 'Database',
      icon: Database,
      technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase' ]
    },
    {
      category: 'DevOps & Tools',
      icon: Zap,
      technologies: ['Docker', 'npm/yarn', 'Webpack', 'Vite', 'Git', 'CI/CD']
    },
    {
      category: 'AWS Cloud Services',
      icon: Globe,
      technologies: ['EC2', 'S3', 'CloudWatch', 'CloudFront', 'CodeCommit']
    },
    // {
    //   category: 'Mobile',
    //   icon: Smartphone,
    //   technologies: ['React Native', 'Expo', 'Flutter', 'Progressive Web Apps']
    // },
    {
      category: 'JavaScript Ecosystem',
      icon: Globe,
      technologies: ['npm/yarn', 'ES6+', 'Async/Await', 'Promises', 'Modules', 'JSON']
    },
    {
      category: 'Security',
      icon: Shield,
      technologies: ['JWT', 'OAuth', 'HTTPS', 'CORS', 'Rate Limiting', 'Input Validation']
    }
  ]

  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Software Engineer',
      company: 'Vivaconnect Pvt Ltd',
      location: 'Mumbai, India',
      period: '2023 - Present',
      description: 'Leading development of scalable web applications using MERN stack. Mentoring junior developers and implementing best practices.',
      achievements: [
        'Led a team of 5 developers in building a customer portal serving 10,000+ users',
        'Improved application performance by 40% through optimization and caching strategies',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored 3 junior developers and conducted code reviews'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'JavaScript', 'Express.js','RabbitMQ','Redis','JWT','Docker','CI/CD']
    },
    {
      id: 2,
      type: 'work',
      title: 'Backend Developer at FunctionUp',
      company: 'FunctionUp',
      location: 'Bangalore, India',
      period: '2022 - 2023',
      description: 'Built and maintained multiple client projects. Collaborated with cross-functional teams to deliver high-quality solutions.',
      achievements: [
        'Developed 5+ projects with 100% functional and non-functional requirements',
        'Built a real-time world ecomers website',
        'Reduced bug reports by 50% through improved testing practices',
        'Collaborated with designers and product managers in agile environment'
      ],
      technologies: [ 'Express.js', 'MongoDB', 'Socket.io', 'Jest', 'Git','Redis', 'Node.js','Docker']
    }

  ]

  const values = [
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on delivering results that exceed expectations and drive business value.'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborative approach with excellent communication and problem-solving skills.'
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Committed to writing clean, maintainable code and following best practices.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Passionate MERN Stack Developer with a love for creating innovative solutions 
              and exceptional user experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Who I Am
              </h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm a dedicated full-stack developer with over 3 years of experience 
                  building modern web applications. My journey in software development 
                  began with a curiosity about how things work on the web, which has 
                  evolved into a passion for creating robust, scalable solutions.
                </p>
                <p>
                  I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) 
                  and have worked on projects ranging from small business websites to 
                  complex enterprise applications. My approach combines technical expertise 
                  with a focus on user experience and business objectives.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with 
                  the developer community.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-2xl p-8">
                <div className="text-center space-y-4">
                  <div className="relative w-32 h-32 rounded-full mx-auto overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                    <img
                      src="/images/saif-raza.jpeg"
                      alt="SAIF RAZA - MERN Stack Developer"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback if image doesn't load */}
                    <div className="w-full h-full bg-primary-600 flex items-center justify-center" style={{ display: 'none' }}>
                      <span className="text-white text-4xl font-bold">SR</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-300">
                    SAIF RAZA
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400">
                    MERN Stack Developer
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I work with a wide range of technologies to deliver the best solutions for your projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="w-8 h-8 text-primary-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My journey in software development and the companies I've had the pleasure to work with.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full mt-2 md:mt-0">
                    {exp.year}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              My Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide my work and collaboration approach.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

