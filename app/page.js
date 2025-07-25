'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import { FaRocket, FaUserShield, FaMagic, FaArrowRight } from 'react-icons/fa';

export default function Home() {
  // Animation variants
  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0A0A0F] transition-colors duration-500">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient blobs */}
        <motion.div 
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full filter blur-[120px] opacity-20 bg-purple-900"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full filter blur-[120px] opacity-20 bg-blue-900"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full filter blur-[120px] opacity-20 bg-pink-900"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-[0.15]"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold tracking-tight text-white"
          >
            Your<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Brand</span>
          </motion.h1>
          
          <div className="flex items-center space-x-6">            
            <div className="space-x-4">
              <Link href="/login">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full backdrop-blur-md font-semibold transition-all bg-white/5 text-white hover:bg-white/10 border border-white/10"
                >
                  Login
                </motion.button>
              </Link>
              <Link href="/signup">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition-all"
                >
                  Sign Up
                </motion.button>
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center mt-32"
        >
          <motion.h2
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight text-white"
          >
            Welcome to the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Future
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl mb-12 max-w-2xl leading-relaxed text-gray-400"
          >
            Experience the next generation of digital innovation with our cutting-edge platform.
          </motion.p>
          
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            {[
              { icon: <FaRocket />, text: "Lightning Fast" },
              { icon: <FaUserShield />, text: "Secure & Safe" },
              { icon: <FaMagic />, text: "Easy to Use" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-3 backdrop-blur-md p-6 rounded-xl border transition-colors bg-white/5 text-white border-white/10"
              >
                <span className="text-3xl">{item.icon}</span>
                <span className="font-semibold">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <Link href="/signup">
              <motion.button
                whileHover={{ scale: 1.05, gap: '1.5rem' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg hover:opacity-90 transition-all"
              >
                Get Started <FaArrowRight />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}