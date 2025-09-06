import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Building, GraduationCap, Award, Code } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

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

  // testing 
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Mathematics',
      school: 'T N B College Bhagalpur Bihar',
      location: 'Bhagalpur, Bihar',
      period: '2018 - 2021',
      description: 'Focused on advance mathematics, algorithms, and web development. Graduated with honors.',
      achievements: [
        'Dean\'s List for 3 consecutive years',
        'Capstone project: E-commerce platform with 1000+ users',
        'Member of Maths Club and Hackathon team'
      ]
    }
  ]

  // const certifications = [
  //   {
  //     id: 1,
  //     name: 'AWS Certified Developer Associate',
  //     issuer: 'Amazon Web Services',
  //     date: '2023',
  //     description: 'Demonstrated expertise in developing and maintaining applications on AWS platform.'
  //   },
  //   {
  //     id: 2,
  //     name: 'MongoDB Certified Developer',
  //     issuer: 'MongoDB University',
  //     date: '2022',
  //     description: 'Proven skills in MongoDB database design, development, and administration.'
  //   },
  //   {
  //     id: 3,
  //     name: 'React Developer Certification',
  //     issuer: 'Meta',
  //     date: '2021',
  //     description: 'Advanced React development skills including hooks, context, and performance optimization.'
  //   }
  // ]
  const certifications = []

  const skills = [
    {
      category: 'Frontend',
      skills: ['React.js', 'Next.js', 'TypeScript', 'TailwindCSS', 'Redux', 'Framer Motion']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'Python', 'Django', 'GraphQL', 'REST APIs']
    },
    {
      category: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase']
    },
    {
      category: 'DevOps & Tools',
      skills: ['Docker', 'AWS', 'Git', 'CI/CD', 'Jest', 'Webpack']
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
              Experience & Education
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              My professional journey, education, and the skills I've developed along the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Work Experience */}
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
              Work Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My professional journey in software development and the companies I've had the pleasure to work with.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                ref={index === 0 ? ref : null}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12"
              >
                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-12 bg-gray-300 dark:bg-gray-600"></div>
                )}

                <div className="flex items-start space-x-6">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
                    <Building className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium mb-2">
                          <Building className="w-4 h-4 mr-2" />
                          {exp.company}
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
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
              Education
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My academic background and educational achievements.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium mb-2">
                          <Building className="w-4 h-4 mr-2" />
                          {edu.school}
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                          <MapPin className="w-4 h-4 mr-2" />
                          {edu.location}
                        </div>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.period}
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <Award className="w-4 h-4 text-yellow-500 mr-2 mt-0.5" />
                            <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      Certifications
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Certifications
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Professional certifications that validate my skills and expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                  {cert.issuer}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                  {cert.date}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Skills Summary */}
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
              Skills Summary
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <Code className="w-6 h-6 text-primary-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="space-y-2">
                  {skillGroup.skills.map((skill) => (
                    <div
                      key={skill}
                      className="text-gray-600 dark:text-gray-300 text-sm"
                    >
                      • {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience
