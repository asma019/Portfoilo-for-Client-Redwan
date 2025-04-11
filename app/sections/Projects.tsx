"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink, FiPlay, FiYoutube, FiVideo, FiTv } from "react-icons/fi";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { id: "all", label: "All" },
    { id: "live", label: "Live Events" },
    { id: "tournament", label: "Tournaments" },
    { id: "feature", label: "Featured" },
  ];
  
  const projects = [
    {
      id: 1,
      title: "E-sports Live Commentary",
      description: "Delivered high-energy live commentary for this major e-sports tournament, providing detailed game analysis and play-by-play action.",
      image: "/images/project1.jpg",
      demo: "https://www.youtube.com/live/kiubB7r1biQ?si=apg_8fkULzENz3zA",
      category: "live",
      tags: ["Live", "E-sports", "Commentary"],
    },
    {
      id: 2,
      title: "Tournament Finals Cast",
      description: "Provided expert analysis and exciting commentary during the championship finals, keeping viewers engaged throughout the intense matchup.",
      image: "/images/project2.jpg",
      demo: "https://www.youtube.com/live/yzVKLOKqbxg",
      category: "tournament",
      tags: ["Finals", "Commentary", "Analysis"],
    },
    {
      id: 3,
      title: "RDH JUNIOR YouTube Channel",
      description: "My official YouTube channel featuring various e-sports casting highlights, commentary tutorials, and gaming content.",
      image: "/images/project3.jpg",
      demo: "https://www.youtube.com/@RDHJUNIOR926",
      category: "feature",
      tags: ["YouTube", "Casting", "Portfolio"],
    },
    {
      id: 4,
      title: "EA FC Mobile Tournament",
      description: "Commentary for EA FC Mobile competitive matches, providing insights into player strategies and game mechanics.",
      image: "/images/project4.jpg",
      demo: "#",
      category: "tournament",
      tags: ["EA FC Mobile", "Tournament", "Mobile Gaming"],
    },
    {
      id: 5,
      title: "Free Fire Championship",
      description: "Energetic play-by-play commentary for the Free Fire Championship, capturing all the action and excitement.",
      image: "/images/project5.jpg",
      demo: "#",
      category: "tournament",
      tags: ["Free Fire", "Championship", "Battle Royale"],
    },
    {
      id: 6,
      title: "EFootball League Broadcast",
      description: "Live casting for the EFootball League matches, providing detailed tactical analysis and engaging commentary.",
      image: "/images/project6.jpg",
      demo: "#",
      category: "live",
      tags: ["EFootball", "League", "Live Broadcast"],
    },
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
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
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-4">My Work</span>
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">Featured Broadcasts</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto"></div>
          <p className="paragraph text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            A collection of my e-sports casting work and commentary highlights.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-full p-1.5 shadow-md border border-gray-100 dark:border-gray-700 flex flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:-translate-y-2"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-colors duration-300"
                    aria-label={`Watch ${project.title}`}
                  >
                    {project.demo.includes('youtube') ? <FiYoutube size={16} /> : <FiPlay size={16} />}
                  </a>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    {project.category === 'live' && <FiTv className="mr-2" />}
                    {project.category === 'tournament' && <FiPlay className="mr-2" />}
                    {project.category === 'feature' && <FiYoutube className="mr-2" />}
                    <span className="text-sm font-medium capitalize">{project.category === 'live' ? 'Live Event' : project.category === 'tournament' ? 'Tournament' : 'Featured'}</span>
                  </div>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium group/link"
                  >
                    Watch Broadcast 
                    <FiExternalLink className="ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View YouTube Channel button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-12"
        >
          <a 
            href="https://www.youtube.com/@RDHJUNIOR926" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            Visit My YouTube Channel
            <FiYoutube className="ml-2 text-xl" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 