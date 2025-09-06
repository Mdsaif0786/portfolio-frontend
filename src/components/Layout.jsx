import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Download } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { cn } from '../utils/cn'

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme, isDark } = useTheme()
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    // { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  const handleResumeDownload = () => {
    // Replace with your actual resume URL
    const resumeUrl = '/images/Saif_Resume_2025.pdf'
    
    // Try to open in new tab first (more reliable for PDFs)
    try {
      window.open(resumeUrl, '_blank')
    } catch (error) {
      // Fallback to download
      const link = document.createElement('a')
      link.href = resumeUrl
      link.download = 'Saif_Raza_Resume_2025.pdf'
      link.target = '_blank'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const handleEmailClick = (e) => {
    e.preventDefault()
    const email = 'mdsaifraza11@gmail.com'
    const subject = 'Portfolio Inquiry'
    const body = 'Hello Saif,\n\nI would like to discuss a potential project with you.\n\nBest regards,'
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Try to open email client directly
    try {
      window.location.href = mailtoLink
    } catch (error) {
      // Fallback: copy email to clipboard
      navigator.clipboard.writeText(email).then(() => {
        alert(`Email copied to clipboard: ${email}`)
      }).catch(err => {
        alert(`Please email me at: ${email}`)
      })
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center overflow-hidden"
              >
                <img
                  src="/images/saif-raza.jpeg"
                  alt="SAIF RAZA"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <span className="text-white font-bold text-sm" style={{ display: 'none' }}>SR</span>
              </motion.div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                SAIF RAZA
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary-600",
                    location.pathname === item.href
                      ? "text-primary-600"
                      : "text-gray-700 dark:text-gray-300"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={handleResumeDownload}
                className="btn btn-outline btn-sm"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
            >
              <div className="px-4 py-4 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "block text-base font-medium transition-colors hover:text-primary-600",
                      location.pathname === item.href
                        ? "text-primary-600"
                        : "text-gray-700 dark:text-gray-300"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={handleResumeDownload}
                    className="w-full btn btn-outline btn-sm mb-4"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </button>
                  <button
                    onClick={toggleTheme}
                    className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
                  >
                    {isDark ? (
                      <>
                        <Sun className="w-5 h-5 text-yellow-500 mr-2" />
                        Light Mode
                      </>
                    ) : (
                      <>
                        <Moon className="w-5 h-5 text-gray-600 mr-2" />
                        Dark Mode
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-primary-600 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/images/saif-raza.jpeg"
                  alt="SAIF RAZA"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <span className="text-white font-bold text-xs" style={{ display: 'none' }}>SR</span>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                © 2024 SAIF RAZA. All rights reserved.
              </span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/Mdsaif0786"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/md-saif-raza-99941523a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                onClick={handleEmailClick}
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
