'use client';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaArrowLeft, FaGoogle, FaGithub, FaApple } from 'react-icons/fa';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="min-h-screen w-full relative bg-[#0A0A0F] flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-pink-600/20 blur-[120px]" />
        
        {/* Animated Lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />

        {/* Moving Particles */}
        {[...Array(6)].map((_, i) => (
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
      <Link href="/" className="absolute top-8 left-8 z-10">
        <motion.button
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-white/70 hover:text-white bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10"
        >
          <FaArrowLeft className="text-sm" /> Back
        </motion.button>
      </Link>

      {/* Main Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        {/* Brand Logo */}
        <motion.div 
          className="text-center mb-8"
          whileHover={{ scale: 1.05 }}
        >
         
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-gray-400 mt-2">Sign in to continue your journey</p>
        </motion.div>

        {/* Login Form */}
        <motion.div
          className="backdrop-blur-lg bg-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Social Login
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { icon: <FaGoogle />, label: 'Google', color: 'hover:bg-red-500/10' },
              { icon: <FaGithub />, label: 'GitHub', color: 'hover:bg-gray-500/10' },
              { icon: <FaApple />, label: 'Apple', color: 'hover:bg-white/10' }
            ].map((social, index) => (
              <motion.button
                key={index}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`relative group p-4 rounded-xl bg-white/5 border border-white/10 transition-all ${social.color}`}
              >
                <span className="text-white/80 group-hover:text-white text-xl">{social.icon}</span>
                <motion.div
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-md bg-white/10 text-white text-xs opacity-0 transition-opacity"
                  initial={false}
                  animate={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {social.label}
                </motion.div>
              </motion.button>
            ))}
          </div>

          <div className="relative flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-white/40 text-sm px-2">or continue with</span>
            <div className="flex-1 h-px bg-white/10" />
          </div> */}

          <form className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/60 ml-1">Email Address</label>
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

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/60 ml-1">Password</label>
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" />
                <input
                  type="password"
                  className="w-full pl-12 pr-4 py-4 bg-transparent border border-white/10 rounded-xl 
                    focus:outline-none focus:border-purple-500 
                    text-white placeholder-white/30 transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <div className="relative">
                  <input type="checkbox" className="peer sr-only" />
                  <div className="w-5 h-5 rounded-md border border-white/20 bg-transparent 
                    peer-checked:bg-purple-500 peer-checked:border-purple-500" />
                  <div className="absolute inset-0 flex items-center justify-center text-white 
                    transform scale-0 peer-checked:scale-100">
                    ✓
                  </div>
                </div>
                <span className="text-sm text-white/60">Remember me</span>
              </label>
              <button className="text-sm text-purple-400 hover:text-purple-300 font-medium">
              <Link href="/forgot-password" className="text-sm text-purple-400 hover:text-purple-300 font-medium">
  Forgot Password?
</Link>
              </button>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full py-4 rounded-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 
                opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
              <span className="relative text-white font-semibold">Sign In</span>
            </motion.button>
          </form>
        </motion.div>

        {/* Sign Up Link */}
        <motion.p 
          className="text-center mt-8 text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
        {"Don't have an account?"}
          <Link href="/signup">
            <motion.span 
              className="text-purple-400 hover:text-purple-300 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up
            </motion.span>
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
} 