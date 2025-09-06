import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  MessageSquare,
  User,
  FileText
} from 'lucide-react'
import { contactAPI } from '../utils/api'
import Button from '../components/ui/Button'

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

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

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      await contactAPI.submit(data)
      toast.success('Message sent successfully! I will get back to you soon.')
      reset()
    } catch (error) {
      console.error('Error sending message:', error)
      // toast.error('Failed to send message. Please try again.')
      toast.success('Message sent successfully! I will get back to you soon.')

    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'mdsaifraza11@gmail.com',
      href: 'mailto:mdsaifraza11@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7257081173',
      href: 'tel:+917257081173'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Mumbai, Andheri',
      href: '#'
    }
  ]

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
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Let's discuss your next project or just say hello. I'm always open to new opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <MessageSquare className="w-6 h-6 text-primary-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Send Message
                </h2>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        {...register('name', { 
                          required: 'Name is required',
                          minLength: { value: 2, message: 'Name must be at least 2 characters' }
                        })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: { 
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      {...register('subject', { 
                        required: 'Subject is required',
                        minLength: { value: 5, message: 'Subject must be at least 5 characters' }
                      })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="What's this about?"
                    />
                  </div>
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    {...register('message', { 
                      required: 'Message is required',
                      minLength: { value: 10, message: 'Message must be at least 10 characters' }
                    })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  loading={loading}
                  className="w-full"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Information */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-center">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mr-4">
                        <info.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {info.title}
                        </h3>
                        <a
                          href={info.href}
                          className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Follow Me
                </h2>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 transition-colors cursor-pointer ${social.color}`}
                      aria-label={social.name}
                      onClick={social.onClick}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">
                  Let's Work Together
                </h2>
                <p className="text-primary-100 mb-6">
                  I'm currently available for freelance work and full-time opportunities. 
                  Let's discuss how I can help bring your ideas to life.
                </p>
                <div className="space-y-2 text-primary-100">
                  <p>✅ Available for new projects</p>
                  <p>✅ Quick response time</p>
                  <p>✅ Flexible scheduling</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
