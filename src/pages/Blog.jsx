import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { Calendar, Clock, Tag, Filter, X } from 'lucide-react'
import { blogsAPI } from '../utils/api'
import Button from '../components/ui/Button'

const Blog = () => {
  const [blogs, setBlogs] = useState([])
  const [featuredBlogs, setFeaturedBlogs] = useState([])
  const [tags, setTags] = useState([])
  const [selectedTag, setSelectedTag] = useState('all')
  const [loading, setLoading] = useState(true)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    fetchBlogs()
    fetchFeaturedBlogs()
    fetchTags()
  }, [])

  const fetchBlogs = async () => {
    try {
      const response = await blogsAPI.getAll({ limit: 12 })
      setBlogs(response.data.data || [])
    } catch (error) {
      console.error('Error fetching blogs:', error)
      setBlogs(sampleBlogs)
    } finally {
      setLoading(false)
    }
  }

  const fetchFeaturedBlogs = async () => {
    try {
      const response = await blogsAPI.getFeatured(3)
      setFeaturedBlogs(response.data.data || [])
    } catch (error) {
      console.error('Error fetching featured blogs:', error)
      setFeaturedBlogs(sampleBlogs.filter(blog => blog.featured).slice(0, 3))
    }
  }

  const fetchTags = async () => {
    try {
      const response = await blogsAPI.getTags()
      setTags(response.data.data || [])
    } catch (error) {
      console.error('Error fetching tags:', error)
      setTags(['React', 'Node.js', 'MongoDB', 'JavaScript', 'TypeScript', 'Web Development'])
    }
  }

  const filteredBlogs = selectedTag === 'all' 
    ? blogs 
    : blogs.filter(blog => blog.tags.includes(selectedTag))

  const clearFilter = () => {
    setSelectedTag('all')
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Sample blogs for demonstration
  const sampleBlogs = [
    {
      _id: '1',
      title: 'Building Scalable APIs with Node.js and Express',
      excerpt: 'Learn how to design and implement RESTful APIs that can handle thousands of concurrent requests using Node.js and Express.js.',
      content: 'Full blog content here...',
      slug: 'building-scalable-apis-nodejs-express',
      tags: ['Node.js', 'Express', 'API', 'Backend'],
      published: true,
      featured: true,
      readTime: 8,
      author: 'Your Name',
      createdAt: '2024-01-15T10:00:00Z'
    },
    {
      _id: '2',
      title: 'React Performance Optimization Techniques',
      excerpt: 'Discover advanced techniques to optimize your React applications for better performance and user experience.',
      content: 'Full blog content here...',
      slug: 'react-performance-optimization-techniques',
      tags: ['React', 'Performance', 'Frontend', 'JavaScript'],
      published: true,
      featured: true,
      readTime: 12,
      author: 'Your Name',
      createdAt: '2024-01-10T10:00:00Z'
    },
    {
      _id: '3',
      title: 'MongoDB Best Practices for Production',
      excerpt: 'Essential MongoDB practices to ensure your database performs optimally in production environments.',
      content: 'Full blog content here...',
      slug: 'mongodb-best-practices-production',
      tags: ['MongoDB', 'Database', 'Backend', 'Production'],
      published: true,
      featured: false,
      readTime: 10,
      author: 'Your Name',
      createdAt: '2024-01-05T10:00:00Z'
    },
    {
      _id: '4',
      title: 'TypeScript vs JavaScript: When to Use What',
      excerpt: 'A comprehensive comparison of TypeScript and JavaScript to help you choose the right tool for your project.',
      content: 'Full blog content here...',
      slug: 'typescript-vs-javascript-comparison',
      tags: ['TypeScript', 'JavaScript', 'Programming', 'Frontend'],
      published: true,
      featured: false,
      readTime: 15,
      author: 'Your Name',
      createdAt: '2023-12-28T10:00:00Z'
    },
    {
      _id: '5',
      title: 'Docker for Web Developers: A Complete Guide',
      excerpt: 'Learn how to containerize your web applications with Docker for consistent development and deployment.',
      content: 'Full blog content here...',
      slug: 'docker-web-developers-complete-guide',
      tags: ['Docker', 'DevOps', 'Deployment', 'Backend'],
      published: true,
      featured: false,
      readTime: 18,
      author: 'Your Name',
      createdAt: '2023-12-20T10:00:00Z'
    },
    {
      _id: '6',
      title: 'Building Real-time Applications with Socket.io',
      excerpt: 'Create interactive real-time applications using Socket.io and Node.js for instant communication.',
      content: 'Full blog content here...',
      slug: 'real-time-applications-socketio',
      tags: ['Socket.io', 'Real-time', 'Node.js', 'Web Development'],
      published: true,
      featured: false,
      readTime: 14,
      author: 'Your Name',
      createdAt: '2023-12-15T10:00:00Z'
    }
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    )
  }

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
              Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Thoughts, tutorials, and insights about web development, technology, and best practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredBlogs.length > 0 && (
        <section className="py-16 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Posts
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Most popular and insightful articles
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredBlogs.map((blog, index) => (
                <motion.div
                  key={blog._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(blog.createdAt)}
                      <Clock className="w-4 h-4 ml-4 mr-2" />
                      {blog.readTime} min read
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                      {blog.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/blog/${blog.slug}`}
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                    >
                      Read more →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Filter by tag:
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Tags</option>
                {tags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>

              {selectedTag !== 'all' && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearFilter}
                  className="flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Clear
                </Button>
              )}
            </div>
          </div>

          {/* Blog Grid */}
          <AnimatePresence mode="wait">
            {filteredBlogs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  No posts found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Try selecting a different tag or check back later for new posts.
                </p>
                <Button onClick={clearFilter}>
                  View All Posts
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
                {filteredBlogs.map((blog, index) => (
                  <motion.div
                    key={blog._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(blog.createdAt)}
                        <Clock className="w-4 h-4 ml-4 mr-2" />
                        {blog.readTime} min read
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                        {blog.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {blog.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {blog.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {blog.tags.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                            +{blog.tags.length - 3}
                          </span>
                        )}
                      </div>

                      <Link
                        to={`/blog/${blog.slug}`}
                        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                      >
                        Read more →
                      </Link>
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

export default Blog
