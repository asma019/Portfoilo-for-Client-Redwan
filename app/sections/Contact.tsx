"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiArrowRight, FiCheck, FiAlertCircle, FiYoutube, FiInstagram, FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";


const Contact = () => {
  const formName = "MehediMS"; // Form name to keep it consistent with the API
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail size={22} />,
      label: "Email",
      value: "ratulahmedreadhoan123@gmail.com",
      link: "mailto:ratulahmedreadhoan123@gmail.com",
    },
    {
      icon: <FiPhone size={22} />,
      label: "Phone",
      value: "+8801623032821",
      link: "tel:+8801623032821",
    },
    {
      icon: <FiMapPin size={22} />,
      label: "Location",
      value: "Uttara 1230, Dhaka, Bangladesh",
      link: "https://maps.google.com/?q=Uttara 1230, Dhaka, Bangladesh",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-4">Contact Me</span>
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto"></div>
          <p className="paragraph text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Looking for a dynamic Esports caster for your next event? 
            I'd love to bring excitement and expert commentary to your broadcast!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2 space-y-6 md:space-y-8"
          >
            <div className="flex items-center mb-6 md:mb-8">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-600 text-white flex items-center justify-center shadow-md mr-3 md:mr-4 border-2 border-white dark:border-gray-800">
                <FiMail size={18} className="md:text-xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                Contact Information
              </h3>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start bg-white dark:bg-gray-800 p-4 md:p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700 group"
                >
                  <div className="flex-shrink-0 h-10 w-10 md:h-12 md:w-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3 md:mr-4 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {info.label}
                    </h4>
                    <a
                      href={info.link}
                      className="text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-words"
                      target={info.label === "Location" ? "_blank" : undefined}
                      rel={info.label === "Location" ? "noopener noreferrer" : undefined}
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6 md:pt-8 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4 md:mb-5">
                <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                  Follow Me
                </h4>
                <div className="h-px flex-grow bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-700 ml-4"></div>
              </div>
              <div className="flex justify-center space-x-4 md:space-x-5">
              <a
                href="https://www.linkedin.com/in/rdhjunior/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
              >
                <FiLinkedin size={20} className="md:text-xl" />
              </a>

                <a
                  href="https://www.youtube.com/@RDHJUNIOR926"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
                >
                  <FiYoutube size={20} className="md:text-xl" />
                </a>
                <a
                  href="https://www.instagram.com/rdhjunior109/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
                >
                  <FiInstagram size={20} className="md:text-xl" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61556356408961"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
                >
                  <FiFacebook size={20} className="md:text-xl" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-xl p-5 md:p-8 border border-gray-100 dark:border-gray-700 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
              
              <div className="relative">
                <div className="flex items-center mb-5 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-600 text-white flex items-center justify-center shadow-md mr-3 md:mr-4 border-2 border-white dark:border-gray-800">
                    <FiSend size={18} className="md:text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                      Send Me a Message
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    </p>
                  </div>
                </div>
                
                {submitStatus === "success" && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 md:mb-8 p-3 md:p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800/50 rounded-xl text-green-800 dark:text-green-200 flex items-center"
                  >
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mr-2 md:mr-3 text-green-600 dark:text-green-300">
                      <FiCheck size={16} className="md:text-lg" />
                    </div>
                    <div>
                      <p className="font-medium text-sm md:text-base">Your message has been sent successfully!</p>
                      <p className="text-xs md:text-sm text-green-600 dark:text-green-400 mt-1">I'll get back to you soon.</p>
                    </div>
                  </motion.div>
                )}
                
                {submitStatus === "error" && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 md:mb-8 p-3 md:p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800/50 rounded-xl text-red-800 dark:text-red-200 flex items-center"
                  >
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-red-100 dark:bg-red-800 flex items-center justify-center mr-2 md:mr-3 text-red-600 dark:text-red-300">
                      <FiAlertCircle size={16} className="md:text-lg" />
                    </div>
                    <div>
                      <p className="font-medium text-sm md:text-base">Failed to send message</p>
                      <p className="text-xs md:text-sm text-red-600 dark:text-red-400 mt-1">{errorMessage || "There was an error sending your message. Please try again later."}</p>
                    </div>
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors text-sm md:text-base"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors text-sm md:text-base"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors text-sm md:text-base"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2.5 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors text-sm md:text-base"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full sm:w-auto px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg md:rounded-xl shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 flex items-center justify-center
                        ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""} active:scale-[0.98]`}
                    >
                      {isSubmitting ? (
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        <FiSend className="mr-2" />
                      )}
                      <span className="text-sm md:text-base">{isSubmitting ? "Sending..." : "Send Message"}</span>
                      {!isSubmitting && <FiArrowRight className="ml-2" />}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default Contact; 