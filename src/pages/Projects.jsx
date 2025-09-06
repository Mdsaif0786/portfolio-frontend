import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Filter, X } from 'lucide-react'
import Button from '../components/ui/Button'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedTech, setSelectedTech] = useState('all')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  // Static project data based on MERN stack portfolio
  const projects = [
    {
      _id: '1',
      title: 'Broadcast Multi-Channel Messaging Platform',
      description: 'Advanced messaging platform with microservices architecture and real-time analytics.',
      longDescription: 'Developed and containerized microservices reducing deployment time by 50%. Implemented advanced caching strategies decreasing server load by 35%. Designed real-time analytics dashboard improving campaign insights for businesses.',
      image: 'https://mybucketraza.s3.ap-south-1.amazonaws.com/project-img/Screenshot+2025-08-27+at+2.56.30%E2%80%AFPM.png',
      githubUrl: 'https://github.com/Mdsaif0786',
      liveUrl: 'https://broadcastbeta.helo.ai',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'RabbitMQ', 'Docker'],
      category: ['fullstack','web','backend','frontend'],  
      featured: true,
      order: 1
    },
    {
      _id: '2',
      title: 'KhetBazaar Web Application',
      description: 'Real estate marketplace with optimized performance and AWS infrastructure.',
      longDescription: 'Architected and deployed scalable backend services using AWS infrastructure. Achieved 30% reduction in page load time, significantly improving user engagement and overall platform performance.',
      image: 'https://mybucketraza.s3.ap-south-1.amazonaws.com/project-img/Screenshot+2025-08-27+at+2.58.13%E2%80%AFPM.png',
      githubUrl: 'https://github.com/Mdsaif0786/khetbazaar',
      liveUrl: 'https://khetbazaar.in',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS', 'EC2', 'S3', 'Redis'],
      category: ['fullstack','web','backend','frontend'],
      featured: true,
      order: 2
    },



      {
      _id: '4',
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with dark/light theme and smooth animations.',
      longDescription: 'Built with React and TailwindCSS, includes smooth animations, responsive design, and contact form integration.',
      image: 'https://mybucketraza.s3.ap-south-1.amazonaws.com/project-img/Screenshot+2025-08-27+at+2.41.21%E2%80%AFPM.png',
      githubUrl: 'https://github.com/Mdsaif0786/portfolio-frontend',
      liveUrl: 'https://www.codingsikho.online/',
      techStack: ['React', 'TailwindCSS', 'Framer Motion', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'AWS', 'EC2', 'S3'],
      category: ['frontend','web'],
      featured: false,
      order: 4
    },
    {
      _id: '3',
      title: 'WhatsApp OnCloud',
      description: 'High-performance bulk messaging platform handling millions of messages daily.',
      longDescription: 'Developed a scalable bulk messaging platform with optimized message queuing system achieving 99.9% delivery success rate. Implemented load-balanced architecture for improved fault tolerance and reduced downtime.',
      image: 'https://mybucketraza.s3.ap-south-1.amazonaws.com/project-img/whatsapp.jpg',
      githubUrl: 'https://github.com/Mdsaif0786',
      liveUrl: 'https://broadcastbeta.helo.ai',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'RabbitMQ', 'AWS'],
      category: ['backend','web'],
      featured: true,
      order: 3
    },

  ]

  const categories = ['web', 'fullstack', 'backend', 'frontend']
  const techStack = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'RabbitMQ', 'AWS', 'Docker', 'Kubernetes', 'TailwindCSS', 'TypeScript', 'Next.js', 'Redux', 'JWT', 'Socket.io']



  const getFilteredProjects = () => {
    let filtered = projects

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.category.includes(selectedCategory))
    }

    if (selectedTech !== 'all') {
      filtered = filtered.filter(project => 
        project.techStack.some(tech => 
          tech.toLowerCase().includes(selectedTech.toLowerCase())
        )
      )
    }

    return filtered
  }

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedTech('all')
  }

  const hasActiveFilters = selectedCategory !== 'all' || selectedTech !== 'all'



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
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Explore my latest work and see how I bring ideas to life through code.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Filter by:
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>

              {/* Tech Stack Filter */}
              <select
                value={selectedTech}
                onChange={(e) => setSelectedTech(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Technologies</option>
                {techStack.map((tech) => (
                  <option key={tech} value={tech}>
                    {tech}
                  </option>
                ))}
              </select>

              {hasActiveFilters && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearFilters}
                  className="flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Clear
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {getFilteredProjects().length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  No projects found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Try adjusting your filters to see more projects.
                </p>
                <Button onClick={clearFilters}>
                  Clear All Filters
                </Button>
              </motion.div>
            ) : (
              <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {getFilteredProjects().map((project, index) => (
                  <motion.div
                    key={project._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      {project.featured && (
                        <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Project Links */}
                      <div className="flex gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            <span className="text-sm">Code</span>
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span className="text-sm">Live</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}

export default Projects
