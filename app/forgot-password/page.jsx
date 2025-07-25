'use client';
import { motion } from 'framer-motion';
import { FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function ForgotPassword() {
  return (
    <div className="min-h-screen w-full relative bg-[#0A0A0F] flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-pink-600/20 blur-[120px]" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50, 0],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Back Button */}
      <Link href="/login" className="absolute top-8 left-8 z-10">
        <motion.button
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-white/70 hover:text-white bg-transparent px-4 py-2 rounded-full border border-white/10"
        >
          <FaArrowLeft className="text-sm" /> Back to Login
        </motion.button>
      </Link>

      {/* Main Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        {/* Header */}
        <motion.div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Reset Password</h1>
          <p className="text-gray-400 mt-2">
            Enter your email address and send you instructions to reset your password
          </p>
        </motion.div>

        {/* Reset Form */}
        <motion.div
          className="backdrop-blur-lg bg-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
        >
          <form className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/60 ml-1">
                Email Address
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" />
                <input
                  type="email"
                  className="w-full pl-12 pr-4 py-4 bg-transparent border border-white/10 rounded-xl 
                    focus:outline-none focus:border-purple-500 
                    text-white placeholder-white/30 transition-colors"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full py-4 rounded-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
              <span className="relative text-white font-semibold">Send Reset Instructions</span>
            </motion.button>
          </form>
        </motion.div>

        {/* Additional Info */}
        <motion.p 
          className="text-center mt-8 text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Remember your password?{' '}
          <Link href="/login">
            <motion.span 
              className="text-purple-400 hover:text-purple-300 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </motion.span>
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
} 