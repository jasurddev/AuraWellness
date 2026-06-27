"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  // @ts-ignore
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat(
    // @ts-ignore
    {
      initialMessages: [
      {
        id: "1",
        role: "assistant",
        content: "Halo! Saya TwakAI Advisor. Ada yang bisa saya bantu terkait sistem manajemen klinik TwakOS hari ini?",
      },
    ],
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={clsx(
          "fixed bottom-6 right-6 p-4 rounded-full shadow-2xl z-50 transition-all",
          "bg-slate-900 text-white hover:bg-slate-800",
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-6 right-6 w-[380px] max-w-[calc(100vw-3rem)] h-[550px] max-h-[calc(100vh-6rem)] z-50 flex flex-col rounded-3xl shadow-2xl overflow-hidden border border-slate-200/50 bg-white/80 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-yellow-700" />
                </div>
                <div>
                  <h3 className="font-serif font-medium text-slate-900 leading-none mb-1">TwakAI Advisor</h3>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={clsx(
                    "flex gap-3 max-w-[85%]",
                    message.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                  )}
                >
                  <div className={clsx(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                    message.role === "user" ? "bg-slate-100" : "bg-yellow-50"
                  )}>
                    {message.role === "user" ? (
                      <User className="w-4 h-4 text-slate-600" />
                    ) : (
                      <Bot className="w-4 h-4 text-yellow-600" />
                    )}
                  </div>
                  
                  <div className={clsx(
                    "px-4 py-3 rounded-2xl text-sm leading-relaxed",
                    message.role === "user" 
                      ? "bg-slate-900 text-white rounded-tr-sm" 
                      : "bg-white border border-slate-100 text-slate-700 shadow-sm rounded-tl-sm"
                  )}>
                    {message.content}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex gap-3 max-w-[85%] mr-auto">
                  <div className="w-8 h-8 rounded-full bg-yellow-50 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div className="px-5 py-4 rounded-2xl bg-white border border-slate-100 shadow-sm rounded-tl-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-4 bg-white/80 border-t border-slate-100">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ketik pertanyaan Anda..."
                  className="w-full pl-5 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all placeholder:text-slate-400 text-slate-700"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 p-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 disabled:opacity-50 disabled:hover:bg-slate-900 transition-colors"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
