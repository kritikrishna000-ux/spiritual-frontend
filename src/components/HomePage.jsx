import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Sparkles, Heart, Infinity } from "lucide-react";
import DivineBg from "./DivineBg";
import FallingFlowers from "./FallingFlowers";

const HomePage = ({ onStartChat, user, logout }) => {
  const [message, setMessage] = useState("");

  const handleStartChat = () => {
    if (message.trim()) {
      onStartChat(message);
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100">
      <FallingFlowers />
      
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 p-6 flex justify-between items-center"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
            <Sparkles className="text-white text-xl" />
          </div>
          <h1 className="text-2xl font-bold font-serif bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
            Spiritual Guru
          </h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="font-medium font-serif text-amber-700">{user?.username}</p>
            <p className="text-sm text-amber-600">{user?.email}</p>
          </div>
          <button
            onClick={logout}
            className="px-4 py-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-xl transition-all duration-300 font-serif"
          >
            Logout
          </button>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-4xl w-full text-center">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full mb-6 shadow-2xl relative"
              style={{
                boxShadow: '0 0 40px rgba(255, 215, 0, 0.4)'
              }}
            >
              <Sparkles className="text-4xl text-white drop-shadow-lg" />
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
            
            <h2 className="text-5xl font-bold font-serif bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 bg-clip-text text-transparent mb-4">
              Welcome to Divine Wisdom
            </h2>
            
            <p className="text-xl text-amber-700 mb-8 max-w-2xl mx-auto leading-relaxed font-serif">
              Seek guidance from the eternal teachings of the Bhagavad Gita. 
              Ask questions about life, spirituality, and find your inner peace.
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/40">
              <Heart className="text-3xl text-pink-500 mx-auto mb-4" />
              <h3 className="font-semibold font-serif text-amber-800 mb-2">Inner Peace</h3>
              <p className="text-sm text-amber-700 font-serif">Find tranquility through ancient wisdom</p>
            </div>
            
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/40">
              <Infinity className="text-3xl text-amber-500 mx-auto mb-4" />
              <h3 className="font-semibold font-serif text-amber-800 mb-2">Eternal Wisdom</h3>
              <p className="text-sm text-amber-700 font-serif">Access timeless spiritual teachings</p>
            </div>
            
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/40">
              <Sparkles className="text-3xl text-yellow-500 mx-auto mb-4" />
              <h3 className="font-semibold font-serif text-amber-800 mb-2">Divine Guidance</h3>
              <p className="text-sm text-amber-700 font-serif">Receive personalized spiritual advice</p>
            </div>
          </motion.div>

          {/* Message Input */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border border-white/40">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask me anything spiritual... How can I find inner peace? What does the Gita say about..."
                    className="w-full p-4 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-2xl focus:outline-none focus:border-yellow-400 focus:bg-white/40 transition-all duration-300 resize-none placeholder-amber-600 text-amber-800 font-serif"
                    style={{
                      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
                    }}
                    rows="3"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleStartChat();
                      }
                    }}
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleStartChat}
                  disabled={!message.trim()}
                  className="self-end bg-gradient-to-r from-yellow-400 to-amber-500 text-white p-4 rounded-2xl hover:from-yellow-500 hover:to-amber-600 disabled:opacity-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{
                    boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)'
                  }}
                >
                  <Send className="text-xl" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Floating Action Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onStartChat("")}
            className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center"
            style={{
              boxShadow: '0 0 30px rgba(255, 215, 0, 0.4)'
            }}
          >
            <MessageCircle className="text-2xl" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 animate-ping opacity-20" />
          </motion.button>

          {/* Divine Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12"
          >
            <p className="text-amber-700 italic text-lg font-serif">
              "You have the right to perform your actions, but you are not entitled to the fruits of action."
            </p>
            <p className="text-yellow-600 font-medium font-serif mt-2">- Bhagavad Gita 2.47</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;