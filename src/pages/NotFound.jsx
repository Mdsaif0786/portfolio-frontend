import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import Button from '../components/ui/Button'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-8xl font-bold text-primary-600 mb-4">404</div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="flex items-center">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
              className="flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound
