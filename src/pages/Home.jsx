import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, Mail, Github, Linkedin, Twitter } from 'lucide-react'
import Button from '../components/ui/Button'

const Home = () => {
  const handleResumeDownload = () => {
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

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/Mdsaif0786',
      icon: Github,
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/md-saif-raza-99941523a',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      href: '#',
      icon: Mail,
      color: 'hover:text-red-500',
      onClick: handleEmailClick
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-lg text-primary-600 font-medium"
                >
                  Hello, I'm
                </motion.p>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                >
                  SAIF RAZA
                </motion.h1>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300"
                >
                  MERN Stack Developer
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg"
              >
                I build modern, scalable web applications using the MERN stack. 
                Passionate about creating exceptional user experiences and clean, 
                maintainable code.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/contact">
                  <Button size="lg" className="group">
                    Hire Me
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleResumeDownload}
                  className="group"
                >
                  <Download className="mr-2 w-4 h-4" />
                  View Resume
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="flex items-center space-x-6 pt-4"
              >
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Follow me:
                </span>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 transition-colors cursor-pointer ${social.color}`}
                    aria-label={social.name}
                    onClick={social.onClick}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Animated Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px]">
                {/* Professional photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-2xl flex items-center justify-center overflow-hidden">
                  <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
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
                </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-10 w-16 h-16 bg-yellow-400 rounded-full opacity-20"
                />
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-20 left-10 w-12 h-12 bg-blue-400 rounded-full opacity-20"
                />
                <motion.div
                  animate={{ y: [-5, 15, -5] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 right-20 w-8 h-8 bg-green-400 rounded-full opacity-20"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10+', label: 'Projects Completed' },
              { number: '3+', label: 'Years Experience' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Available' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
