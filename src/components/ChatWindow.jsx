import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiMenu, FiPlus, FiTrash2, FiUser, FiLogOut } from "react-icons/fi";
import { GiLotusFlower, GiMeditation } from "react-icons/gi";
import { BiInfinite } from "react-icons/bi";
import LoadingSpinner from "./LoadingSpinner";
import DivineBg from "./DivineBg";

const ChatWindow = ({
  messages,
  input,
  setInput,
  sendMessage,
  loading,
  chats,
  currentChatId,
  createNewChat,
  loadChat,
  deleteChat,
  user,
  logout,
  showSidebar,
  setShowSidebar
}) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="h-screen relative flex">
      <DivineBg />
      
      {/* Sidebar */}
      <AnimatePresence>
        {showSidebar && (
          <motion.div
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="w-80 bg-white/95 backdrop-blur-xl shadow-2xl flex flex-col relative z-20 border-r border-white/20"
          >
            {/* Sidebar Header */}
            <div className="p-6 border-b border-gray-200/50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-amber-500 rounded-full flex items-center justify-center">
                    <GiLotusFlower className="text-white text-sm" />
                  </div>
                  <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-amber-600 bg-clip-text text-transparent">
                    Sacred Chats
                  </h2>
                </div>
                <button
                  onClick={() => setShowSidebar(false)}
                  className="text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
                >
                  ✕
                </button>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={createNewChat}
                className="w-full bg-gradient-to-r from-purple-500 to-amber-500 text-white py-3 rounded-xl hover:from-purple-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <FiPlus className="text-lg" />
                New Sacred Chat
              </motion.button>
            </div>

            {/* User Info */}
            <div className="p-6 border-b border-gray-200/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                    <FiUser className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{user?.username}</p>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                  </div>
                </div>
                <button
                  onClick={logout}
                  className="text-red-400 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-all duration-200"
                >
                  <FiLogOut />
                </button>
              </div>
            </div>

            {/* Chat List */}
            <div className="flex-1 overflow-y-auto">
              {chats.length === 0 ? (
                <div className="p-6 text-center text-gray-500">
                  <GiMeditation className="text-4xl mx-auto mb-4 opacity-50" />
                  <p>No sacred conversations yet</p>
                  <p className="text-sm mt-2">Start your spiritual journey</p>
                </div>
              ) : (
                chats.map((chat) => (
                  <motion.div
                    key={chat.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 4 }}
                    className={`p-4 border-b border-gray-100/50 cursor-pointer transition-all duration-200 ${
                      currentChatId === chat.id 
                        ? "bg-gradient-to-r from-purple-50 to-amber-50 border-purple-200" 
                        : "hover:bg-gray-50/50"
                    }`}
                    onClick={() => loadChat(chat.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-800 truncate">{chat.title}</p>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                          <BiInfinite className="text-xs" />
                          {new Date(chat.updated_at).toLocaleDateString()}
                        </p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteChat(chat.id);
                        }}
                        className="text-red-400 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-all duration-200"
                      >
                        <FiTrash2 className="text-sm" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col relative z-10">
        {/* Top Bar */}
        <div className="bg-white/90 backdrop-blur-xl shadow-sm p-4 flex items-center justify-between border-b border-white/20">
          <div className="flex items-center gap-4">
            {!showSidebar && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowSidebar(true)}
                className="text-gray-500 hover:text-purple-600 p-2 rounded-lg hover:bg-purple-50 transition-all duration-200"
              >
                <FiMenu className="text-xl" />
              </motion.button>
            )}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-amber-500 rounded-full flex items-center justify-center">
                <GiLotusFlower className="text-white text-lg" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-amber-600 bg-clip-text text-transparent">
                  Spiritual Guru
                </h1>
                <p className="text-sm text-gray-500">Divine wisdom awaits</p>
              </div>
            </div>
          </div>
          
          {currentChatId && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={createNewChat}
              className="bg-gradient-to-r from-purple-500 to-amber-500 text-white px-4 py-2 rounded-xl hover:from-purple-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <FiPlus />
              New Chat
            </motion.button>
          )}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mt-20"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-amber-500 rounded-full mb-6 shadow-2xl">
                <GiMeditation className="text-3xl text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-amber-600 bg-clip-text text-transparent mb-4">
                Welcome to Divine Wisdom
              </h2>
              <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
                Ask me anything about life, spirituality, or seek guidance from the eternal teachings of the Bhagavad Gita
              </p>
            </motion.div>
          ) : (
            messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-3xl rounded-br-lg"
                      : "bg-white/90 backdrop-blur-sm shadow-lg rounded-3xl rounded-bl-lg border border-white/20"
                  } p-6 relative`}
                >
                  {msg.sender === "bot" && msg.shloka ? (
                    <div className="text-left space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <GiLotusFlower className="text-amber-500" />
                          <span className="font-bold text-amber-600">Sanskrit Shloka</span>
                        </div>
                        <div className="text-lg font-medium text-amber-700 leading-relaxed bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-2xl border border-amber-200">
                          {msg.shloka}
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <BiInfinite className="text-indigo-500" />
                          <span className="font-bold text-indigo-600">Divine Meaning</span>
                        </div>
                        <div className="text-gray-700 leading-relaxed">{msg.meaning}</div>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <GiMeditation className="text-purple-500" />
                          <span className="font-bold text-purple-600">Spiritual Guidance</span>
                        </div>
                        <div className="text-gray-700 leading-relaxed">{msg.guidance}</div>
                      </div>
                    </div>
                  ) : (
                    <div className={`${msg.sender === "user" ? "text-white" : "text-gray-800"} leading-relaxed`}>
                      {msg.text}
                    </div>
                  )}
                  
                  {/* Message timestamp */}
                  <div className={`text-xs mt-3 ${msg.sender === "user" ? "text-purple-200" : "text-gray-400"}`}>
                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </motion.div>
            ))
          )}
          
          {loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="bg-white/90 backdrop-blur-sm shadow-lg p-6 rounded-3xl rounded-bl-lg border border-white/20">
                <LoadingSpinner />
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="bg-white/90 backdrop-blur-xl border-t border-white/20 p-6">
          <div className="flex gap-4 max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <textarea
                className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-purple-400 focus:bg-white transition-all duration-300 resize-none shadow-inner"
                placeholder="Ask something spiritual... How can I find inner peace?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
                rows="2"
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="self-end bg-gradient-to-r from-purple-500 to-amber-500 text-white p-4 rounded-2xl hover:from-purple-600 hover:to-amber-600 disabled:opacity-50 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
            >
              {loading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6"
                >
                  <GiLotusFlower className="text-xl" />
                </motion.div>
              ) : (
                <FiSend className="text-xl" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;