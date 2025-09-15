import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Lock, Eye, EyeOff, Sparkles, Heart } from "lucide-react";
import DivineBg from "./DivineBg";
import FallingFlowers from "./FallingFlowers";

const AuthPage = ({ authMode, setAuthMode, authData, setAuthData, handleAuth, loading }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100">
      <FallingFlowers />
      
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-full max-w-md border border-white/30"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,215,0,0.15) 100%)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255,255,255,0.3)'
        }}
      >
        {/* Divine Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500 rounded-full mb-6 shadow-2xl relative"
            style={{
              boxShadow: '0 0 30px rgba(255, 215, 0, 0.5), inset 0 2px 4px rgba(255,255,255,0.3)'
            }}
          >
            <Sparkles className="text-3xl text-white drop-shadow-lg" />
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 to-amber-400"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 mb-3 drop-shadow-sm"
          >
            Divine Portal
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-amber-700 flex items-center justify-center gap-2 font-serif text-lg"
          >
            <Heart className="text-pink-500 w-5 h-5" />
            Enter the Sacred Space
          </motion.p>
        </div>

        {/* Auth Mode Toggle */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="flex mb-8 bg-white/20 backdrop-blur-sm rounded-2xl p-1 border border-white/30"
        >
          <button
            onClick={() => setAuthMode("login")}
            className={`flex-1 py-3 px-4 rounded-xl font-serif font-medium transition-all duration-500 relative overflow-hidden ${
              authMode === "login"
                ? "text-white shadow-xl transform scale-105"
                : "text-amber-700 hover:text-amber-800"
            }`}
          >
            {authMode === "login" && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 rounded-xl"
                style={{
                  boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)'
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">Sacred Login</span>
          </button>
          <button
            onClick={() => setAuthMode("signup")}
            className={`flex-1 py-3 px-4 rounded-xl font-serif font-medium transition-all duration-500 relative overflow-hidden ${
              authMode === "signup"
                ? "text-white shadow-xl transform scale-105"
                : "text-amber-700 hover:text-amber-800"
            }`}
          >
            {authMode === "signup" && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 rounded-xl"
                style={{
                  boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)'
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">Divine Signup</span>
          </button>
        </motion.div>

        {/* Auth Form */}
        <form onSubmit={handleAuth} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="relative group"
          >
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-600 w-5 h-5 z-10" />
            <input
              type="text"
              placeholder="Sacred Username"
              value={authData.username}
              onChange={(e) => setAuthData({...authData, username: e.target.value})}
              className="w-full pl-12 pr-4 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-2xl focus:outline-none focus:border-yellow-400 focus:bg-white/30 transition-all duration-300 placeholder-amber-600 text-amber-800 font-serif"
              style={{
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1), 0 0 0 0 rgba(255,215,0,0.3)',
                transition: 'all 0.3s ease, box-shadow 0.3s ease'
              }}
              onFocus={(e) => {
                e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.1), 0 0 20px rgba(255,215,0,0.4)';
              }}
              onBlur={(e) => {
                e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.1), 0 0 0 0 rgba(255,215,0,0.3)';
              }}
              required
            />
          </motion.div>
          
          {authMode === "signup" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-600 w-5 h-5 z-10" />
              <input
                type="email"
                placeholder="Divine Email"
                value={authData.email}
                onChange={(e) => setAuthData({...authData, email: e.target.value})}
                className="w-full pl-12 pr-4 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-2xl focus:outline-none focus:border-yellow-400 focus:bg-white/30 transition-all duration-300 placeholder-amber-600 text-amber-800 font-serif"
                style={{
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1), 0 0 0 0 rgba(255,215,0,0.3)',
                  transition: 'all 0.3s ease, box-shadow 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.1), 0 0 20px rgba(255,215,0,0.4)';
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.1), 0 0 0 0 rgba(255,215,0,0.3)';
                }}
                required
              />
            </motion.div>
          )}
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="relative group"
          >
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-600 w-5 h-5 z-10" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Sacred Password"
              value={authData.password}
              onChange={(e) => setAuthData({...authData, password: e.target.value})}
              className="w-full pl-12 pr-12 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-2xl focus:outline-none focus:border-yellow-400 focus:bg-white/30 transition-all duration-300 placeholder-amber-600 text-amber-800 font-serif"
              style={{
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1), 0 0 0 0 rgba(255,215,0,0.3)',
                transition: 'all 0.3s ease, box-shadow 0.3s ease'
              }}
              onFocus={(e) => {
                e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.1), 0 0 20px rgba(255,215,0,0.4)';
              }}
              onBlur={(e) => {
                e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.1), 0 0 0 0 rgba(255,215,0,0.3)';
              }}
              required
            />
            <motion.button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-600 hover:text-yellow-500 transition-colors z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </motion.button>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 0 30px rgba(255,215,0,0.6)'
            }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-white py-4 rounded-2xl font-serif font-semibold text-lg disabled:opacity-50 transition-all duration-300 shadow-xl relative overflow-hidden"
            style={{
              boxShadow: '0 10px 25px rgba(255,215,0,0.3), inset 0 1px 2px rgba(255,255,255,0.3)'
            }}
          >
            {loading && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              />
            )}
            <span className="relative z-10 flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                  Connecting to Divine...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  {authMode === "login" ? "Enter Sacred Realm" : "Begin Divine Journey"}
                </>
              )}
            </span>
          </motion.button>
        </form>

        {/* Divine Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 text-center"
        >
          <p className="text-amber-700 italic font-serif text-lg leading-relaxed">
            "The soul is neither born, nor does it die"
          </p>
          <p className="text-yellow-600 font-serif text-sm mt-2 opacity-80">
            — Bhagavad Gita 2.20
          </p>
        </motion.div>

        {/* Floating Glow Effect */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 rounded-3xl opacity-20 blur-xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
};

export default AuthPage;