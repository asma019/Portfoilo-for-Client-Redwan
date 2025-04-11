"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiHome } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold gradient-text">404</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto my-6 rounded-full"></div>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              <FiHome className="mr-2" />
              Back to Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-full shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <FiArrowLeft className="mr-2" />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 