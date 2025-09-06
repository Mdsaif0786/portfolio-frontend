import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react'
import { blogsAPI } from '../utils/api'

const BlogPost = () => {
  const { slug } = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBlog()
  }, [slug])

  const fetchBlog = async () => {
    try {
      const response = await blogsAPI.getBySlug(slug)
      setBlog(response.data.data)
    } catch (error) {
      console.error('Error fetching blog:', error)
      // Fallback to sample blog
      setBlog({
        title: 'Sample Blog Post',
        content: 'This is a sample blog post content...',
        excerpt: 'Sample excerpt',
        tags: ['Sample', 'Blog'],
        readTime: 5,
        author: 'Your Name',
        createdAt: new Date().toISOString()
      })
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Blog post not found
          </h1>
          <Link to="/blog" className="text-primary-600 hover:text-primary-700">
            Back to blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <article className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to blog
            </Link>

            <header className="mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {blog.title}
              </h1>
              
              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(blog.createdAt).toLocaleDateString()}
                <Clock className="w-4 h-4 ml-4 mr-2" />
                {blog.readTime} min read
              </div>

              {blog.tags && blog.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {blog.content || blog.excerpt}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  )
}

export default BlogPost
