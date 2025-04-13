"use client";

import { motion } from "framer-motion";
import { FiBookOpen, FiCalendar, FiMapPin, FiAward } from "react-icons/fi";

const Education = () => {
  const education = [
    {
      degree: "HSC",
      institution: "Dania College & University",
      location: "Uttara 1230, Dhaka",
      period: "2024-Present",
      description: "Currently pursuing undergraduate studies while balancing my professional career as an Esports caster.",
      achievements: [],
    },
    {
      degree: "SSC",
      institution: "Purba Jalkuri Adarsha High School",
      location: "Uttara 1230, Dhaka",
      period: "2018-2023",
      description: "Completed Secondary School Certificate with a focus on developing communication and presentation skills that have proven valuable in my Esports casting career.",
      achievements: [],
    }
  ];

  const certifications = [
    {
      title: "Professional Esports Commentary",
      issuer: "Liquid Esports",
      date: "2023",
      credential: "In-house certification"
    },
    {
      title: "Game Analysis and Coach",
      issuer: "Discovery One",
      date: "2024",
      credential: "Professional training"
    }
  ];

  return (
    <section id="education" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-4">Academic Journey</span>
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8 flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-600 text-white flex items-center justify-center shadow-md mr-4 border-2 border-white dark:border-gray-800">
                <FiBookOpen size={20} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 relative group hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-blue-900/20 rounded-bl-full opacity-70 pointer-events-none"></div>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                      <FiCalendar className="mr-1" /> {edu.period}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400">
                      <FiMapPin className="mr-1" /> {edu.location}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {edu.degree}
                  </h4>
                  <h5 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    {edu.institution}
                  </h5>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {edu.description}
                  </p>
                  
                  {edu.achievements.length > 0 && (
                    <div className="mt-4">
                      <h6 className="font-medium text-gray-900 dark:text-white mb-2">Achievements:</h6>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="mb-8 flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-600 text-white flex items-center justify-center shadow-md mr-4 border-2 border-white dark:border-gray-800">
                <FiAward size={20} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Professional Certifications
              </h3>
            </div>
            
            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 relative group hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-blue-100/50 to-blue-50/30 dark:from-blue-800/30 dark:to-blue-900/20 rounded-full blur-sm"></div>
                  
                  <div className="mb-4 flex items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 border border-blue-200 dark:border-blue-700">
                      <FiAward size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400">{cert.issuer}</p>
                    </div>
                  </div>
                  
                  <div className="pl-16">
                    <div className="flex items-center mb-2 text-gray-600 dark:text-gray-400">
                      <FiCalendar className="mr-2" size={14} />
                      <span>{cert.date}</span>
                    </div>
                    {cert.credential && (
                      <p className="text-gray-600 dark:text-gray-400">
                        <strong>Credential:</strong> {cert.credential}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 bg-gradient-to-br from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 p-8 rounded-xl shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full transform translate-x-1/3 -translate-y-1/3 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full transform -translate-x-1/3 translate-y-1/3 blur-2xl"></div>
              
              <h4 className="text-xl font-bold text-white mb-4 relative z-10">Professional Development</h4>
              <p className="text-blue-100 mb-6 leading-relaxed relative z-10">
                In addition to formal education, I continuously develop my casting skills through mentorship and practice.
                I regularly analyze professional commentary to improve my technique and stay current with gaming trends.
              </p>
              
              <div className="relative z-10 space-y-3">
                <div className="flex items-center text-white">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                  <span>Voice and diction training</span>
                </div>
                <div className="flex items-center text-white">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                  <span>Game-specific knowledge building</span>
                </div>
                <div className="flex items-center text-white">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                  <span>Broadcast technology training</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education; 