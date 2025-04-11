"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin, FiCheck, FiExternalLink, FiGlobe } from "react-icons/fi";
import Image from "next/image";

const Experience = () => {
  const experiences = [
    {
      title: "E-sports Caster",
      company: "Discovery One",
      location: "Dhaka, Bangladesh (Remote)",
      period: "2024-01 - Current",
      description: "I'm an energetic e-sports caster with a passion for competitive gaming. I bring electrifying play-by-play commentary and in-depth game analysis. I connect with audiences using engaging storytelling and expert insights.",
      achievements: [
        "Provide commentary for Call Of Duty Mobile and EFootball (Lan) tournaments",
        "Deliver rapid analytical commentary during high-stakes matches",
        "Engage viewers with enthusiastic and knowledgeable game insights"
      ],
      image: "/images/exp-discovery.jpg",
      imagePosition: "center center",
      videoUrl: "https://www.youtube.com/live/kiubB7r1biQ?si=apg_8fkULzENz3zA"
    },
    {
      title: "E-sports Caster",
      company: "Arekta Gaming",
      location: "Dhaka, Bangladesh (Remote)",
      period: "2024-01 - Current",
      description: "Energetic e-sports caster igniting excitement in every match. Expert in translating gameplay into captivating commentary. Your guide through thrilling digital battles and strategy. Bringing passion, insight, and adrenaline to the stage.",
      achievements: [
        "Worked on EFootball and EA FC Mobile (Lan) tournaments",
        "Delivered dynamic play-by-play commentary during intense matches",
        "Provided expert analysis and strategic insights for the audience"
      ],
      image: "/images/exp-arekta.jpg",
      imagePosition: "center top",
      videoUrl: "https://www.youtube.com/live/yzVKLOKqbxg"
    },
    {
      title: "E-sports Caster",
      company: "Zenetic Esports",
      location: "Dhaka, Bangladesh (Remote)",
      period: "2024-01 - Current",
      description: "Passionate e-sports caster who fuses expert analysis with electrifying energy to captivate the gaming community.",
      achievements: [
        "Worked on EFootball and EA FC Mobile (LAN) tournaments",
        "Delivered comprehensive game analysis during competitive matches",
        "Created engaging commentary that resonated with the gaming audience"
      ],
      image: "/images/exp-zenetic.jpg",
      imagePosition: "center 30%",
      videoUrl: null
    },
    {
      title: "E-sports Caster",
      company: "Liquid Esports",
      location: "Dhaka, Bangladesh (Remote)",
      period: "2021-01 - Current",
      description: "Energetic e-sports caster bringing passion, expert insights, and electrifying play-by-play action to every match. Dynamic and engaging commentary that keeps you at the edge of your seat. Your go-to guide for the latest in competitive gaming thrills.",
      achievements: [
        "Worked on Free Fire (LAN + Online) tournaments",
        "Delivered high-energy commentary for major competitive events",
        "Provided in-depth analysis and strategic breakdowns of gameplay"
      ],
      image: "/images/exp-liquid.jpg",
      imagePosition: "center 40%",
      videoUrl: null
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-full h-[1px] bg-blue-200/50 dark:bg-blue-800/50"></div>
      <div className="absolute top-60 left-20 w-5 h-5 bg-blue-400/30 dark:bg-blue-400/20 rounded-full"></div>
      <div className="absolute bottom-80 right-40 w-3 h-3 bg-blue-400/30 dark:bg-blue-400/20 rounded-full"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-4">Experience</span>
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">Professional Journey</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto"></div>
        </motion.div>

        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`relative ${index < experiences.length - 1 ? 'pb-20' : ''}`}
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-[39px] top-20 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 to-transparent"></div>
              )}
              
              <div className="flex flex-col md:flex-row gap-8">
              {/* Timeline dot */}
                <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full border-2 border-blue-200 dark:border-blue-800 z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full animate-pulse-slow"></div>
                    <div className="absolute inset-4 bg-gradient-to-br from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 rounded-full z-20 flex items-center justify-center text-white">
                      <FiBriefcase size={20} />
                    </div>
                  </div>
                </div>
                
                {/* Content card */}
                <div className="flex-grow">
                  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 group hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row">
                    {/* Image section - Only visible on md and larger */}
                    <div className="relative h-60 md:w-80 md:h-auto overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 hidden md:block">
                      {/* Background effects */}
                      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                      
                      <div className="relative w-full h-full overflow-hidden">
                        {/* Modern slanted image container */}
                        <div className="absolute inset-0 z-20 overflow-hidden clip-slant">
                          <Image
                            src={exp.image}
                            alt={`${exp.company} - ${exp.title}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 320px"
                            className="object-cover scale-110 group-hover:scale-125 transition-all duration-1000 ease-out"
                            style={{ objectPosition: exp.imagePosition || 'center center' }}
                          />
                          
                          {/* Image gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent z-10"></div>
                          
                          {/* Animated divider lines */}
                          <div className="absolute -top-full left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent group-hover:top-[15%] transition-all duration-1000 ease-out z-20"></div>
                          <div className="absolute -bottom-full left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent group-hover:bottom-[15%] transition-all duration-1000 ease-out z-20"></div>
                          
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 group-hover:hover-reveal"></div>
                        </div>
                        
                        {/* Decorative overlay shapes */}
                        <div className="absolute top-0 right-0 h-full w-[15%] bg-blue-600/20 dark:bg-blue-500/30 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out z-10"></div>
                        
                        {/* Decorative corner elements */}
                        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-blue-400/50 rounded-tl-sm z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-purple-400/50 rounded-br-sm z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
                        
                        {/* Company watermark */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-30 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="text-xl font-bold text-white drop-shadow-lg group-hover:text-blue-200 transition-colors duration-300">
                            {exp.company}
                          </div>
                          <div className="text-sm text-blue-300 flex items-center drop-shadow-md mt-1 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                            <FiCalendar className="mr-1" size={14} /> {exp.period}
                          </div>
                        </div>
                        
                        {/* Animated overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-5 scale-105 group-hover:scale-100"></div>
                      </div>
                    </div>
                    
                    {/* Image section - Only visible on smaller than md */}
                    <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 md:hidden">
                      {/* Background effects */}
                      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                      
                      <div className="relative w-full h-full overflow-hidden">
                        {/* Modern slanted image container */}
                        <div className="absolute inset-0 z-20 overflow-hidden clip-slant">
                          <Image
                            src={exp.image}
                            alt={`${exp.company} - ${exp.title}`}
                            fill
                            sizes="100vw"
                            className="object-cover scale-110 group-hover:scale-125 transition-all duration-1000 ease-out"
                            style={{ objectPosition: exp.imagePosition || 'center center' }}
                          />
                          
                          {/* Image gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent z-10"></div>
                          
                          {/* Animated divider lines */}
                          <div className="absolute -top-full left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent group-hover:top-[15%] transition-all duration-1000 ease-out z-20"></div>
                          <div className="absolute -bottom-full left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent group-hover:bottom-[15%] transition-all duration-1000 ease-out z-20"></div>
                          
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 group-hover:hover-reveal"></div>
                        </div>
                        
                        {/* Decorative overlay shapes */}
                        <div className="absolute top-0 right-0 h-full w-[15%] bg-blue-600/20 dark:bg-blue-500/30 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out z-10"></div>
                        
                        {/* Decorative corner elements */}
                        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-blue-400/50 rounded-tl-sm z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-purple-400/50 rounded-br-sm z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
                        
                        {/* Company watermark */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-30 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="text-xl font-bold text-white drop-shadow-lg group-hover:text-blue-200 transition-colors duration-300">
                            {exp.company}
                          </div>
                          <div className="text-sm text-blue-300 flex items-center drop-shadow-md mt-1 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                            <FiCalendar className="mr-1" size={14} /> {exp.period}
                          </div>
                        </div>
                        
                        {/* Animated overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-5 scale-105 group-hover:scale-100"></div>
                      </div>
                    </div>
                    
                    {/* Content section */}
                    <div className="p-6 md:p-8 flex-grow">
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 shadow-sm">
                          <FiCalendar className="mr-1" /> {exp.period}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 shadow-sm">
                          <FiMapPin className="mr-1" /> {exp.location}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {exp.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                          <FiCheck className="mr-2 text-blue-500" /> Key Contributions
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0">
                                <FiCheck size={12} />
                              </div>
                              <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                            </li>
                  ))}
                </ul>
                </div>

                      {exp.videoUrl && (
                    <a 
                          href={exp.videoUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                    >
                          Watch Commentary
                          <FiExternalLink className="ml-2" />
                    </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 text-center relative overflow-hidden group hover:-translate-y-1">
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-xl"></div>
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
              <FiBriefcase className="text-blue-600 dark:text-blue-400 text-2xl group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
            <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 text-center relative overflow-hidden group hover:-translate-y-1">
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-xl"></div>
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
              <FiCalendar className="text-blue-600 dark:text-blue-400 text-2xl group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-400">Events Casted</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 text-center relative overflow-hidden group hover:-translate-y-1">
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-xl"></div>
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
              <FiGlobe className="text-blue-600 dark:text-blue-400 text-2xl group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">4</div>
            <div className="text-gray-600 dark:text-gray-400">Organizations</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 text-center relative overflow-hidden group hover:-translate-y-1">
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-xl"></div>
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
              <FiExternalLink className="text-blue-600 dark:text-blue-400 text-2xl group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10K+</div>
            <div className="text-gray-600 dark:text-gray-400">Viewers Reached</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 