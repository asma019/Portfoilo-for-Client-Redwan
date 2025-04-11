"use client";

import { motion } from "framer-motion";
import { FiMic, FiServer, FiVideo, FiRadio, FiBriefcase, FiGlobe, FiUser, FiAward, FiCheck } from "react-icons/fi";
import Image from "next/image";

const About = () => {
  const skills = [
    { name: "Rapid Analytical Commentary", level: 90 },
    { name: "Conciseness", level: 85 },
    { name: "Engaging Tone and Energy", level: 95 },
    { name: "Clarity under Pressure", level: 85 },
    { name: "Instant Game Sense", level: 90 },
    { name: "Contextual Knowledge", level: 80 },
    { name: "EA FC Mobile", level: 85 },
    { name: "Free Fire", level: 90 },
    { name: "EFootball", level: 85 },
  ];

  const categories = [
    {
      icon: <FiMic size={24} />,
      title: "Commentary Skills",
      skills: ["Rapid Analytical Commentary", "Conciseness", "Engaging Tone and Energy"],
    },
    {
      icon: <FiVideo size={24} />,
      title: "Gaming Expertise",
      skills: ["EA FC Mobile", "Free Fire", "EFootball"],
    },
    {
      icon: <FiRadio size={24} />,
      title: "Broadcast Skills",
      skills: ["Clarity under Pressure", "Instant Game Sense", "Contextual Knowledge"],
    },
    {
      icon: <FiGlobe size={24} />,
      title: "Platforms",
      skills: ["YouTube", "Twitch", "Tournament Broadcasts"],
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400/30 dark:bg-blue-400/20 rounded-full"></div>
      <div className="absolute top-60 left-40 w-4 h-4 bg-blue-400/30 dark:bg-blue-400/20 rounded-full"></div>
      <div className="absolute bottom-40 right-60 w-8 h-8 bg-blue-400/30 dark:bg-blue-400/20 rounded-full"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-4">About Me</span>
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">Know Me Better</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8 flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-600 text-white flex items-center justify-center shadow-md mr-4 border-2 border-white dark:border-gray-800">
                <FiUser size={20} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Who I Am
              </h3>
            </div>
            
            <div className="relative">
              {/* Profile image card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative z-10 mx-auto lg:mx-0 mb-8 max-w-sm"
              >
                <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl group">
                  <Image
                    src="/images/profile.jpeg"
                    alt="Redwan Ahmed Ratul"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-2xl font-bold text-white mb-1">RDH JUNIOR</h4>
                    <p className="text-blue-300 flex items-center">
                      <FiMic className="mr-2" /> Professional E-sports Caster
                    </p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-5 -left-5 w-24 h-24 border-t-4 border-l-4 border-blue-500 rounded-tl-2xl -z-10"></div>
                <div className="absolute -bottom-5 -right-5 w-24 h-24 border-b-4 border-r-4 border-blue-500 rounded-br-2xl -z-10"></div>
              </motion.div>
            
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-2xl"></div>
                
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="paragraph text-gray-600 dark:text-gray-400 mb-6 leading-relaxed relative z-10"
                >
                  I am a dynamic e-sports caster with a proven track record at Liquid Esports, delivering rapid analytical 
                  commentary and electrifying play-by-play action for competitive gaming events. With years of experience
                  in the esports industry, I've developed a reputation for engaging storytelling and expert game insights.
                </motion.p>
                
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="paragraph text-gray-600 dark:text-gray-400 mb-6 leading-relaxed relative z-10"
                >
                  Currently working with multiple esports organizations, I specialize in EA FC Mobile, EFootball, and Free Fire
                  competitions. I'm an undergraduate student at Dania College & University in Sonir Akhra, Dhaka, balancing my 
                  education with my passion for esports casting.
                </motion.p>
                
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="paragraph text-gray-600 dark:text-gray-400 leading-relaxed relative z-10"
                >
                  I excel in high-pressure environments, captivating audiences while showcasing instant game sense and clarity.
                  My distinctive style combines technical understanding with an engaging energy that keeps viewers on the 
                  edge of their seats during every match. I am passionate about competitive gaming and igniting excitement in every match.
                </motion.p>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 flex items-center group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <FiBriefcase size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">E-sports Caster</h4>
                  <p className="text-gray-600 dark:text-gray-400">Professional Commentary</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 flex items-center group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <FiGlobe size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Code Name</h4>
                  <p className="text-gray-600 dark:text-gray-400">RDH JUNIOR</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="mb-8 flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-600 text-white flex items-center justify-center shadow-md mr-4 border-2 border-white dark:border-gray-800">
                <FiAward size={20} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                My Skills
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {categories.map((category, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {category.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {category.title}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8"
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-xl"></div>
                
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <FiCheck className="mr-2 text-blue-500" />
                  Key Skill Levels
                </h4>
                
                <div className="space-y-5">
                  {skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.1 * idx }}
                          className="h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 