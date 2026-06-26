"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

export function AIConciergeChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: 'Halo Emma, bagaimana kondisi kulit Anda setelah sesi Happy Aging Peeling 2 hari yang lalu?',
      time: '09:00 AM'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!inputText.trim()) return;
    
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        sender: 'ai',
        text: 'Itu reaksi yang sangat normal karena proses regenerasi sel sedang berlangsung. Pastikan Anda mengaplikasikan Deep Hydration Moisturizer lebih tebal malam ini ya. Ada keluhan nyeri?',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 2000);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-[0_8px_20px_rgba(84,87,67,0.3)] flex items-center justify-center z-50 border border-primary/20"
          >
            <Sparkles className="w-6 h-6 absolute opacity-20" />
            <MessageSquare className="w-6 h-6 relative z-10" />
            
            {/* Notification Badge */}
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-[#F9F8F6] rounded-full"></span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-border/50 flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary text-white p-4 flex items-center justify-between relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-serif font-medium text-sm">AI Post-Care</h3>
                  <p className="text-[10px] text-white/80">Always here for your Happy Aging</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors relative z-10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 bg-[#F9F8F6] p-4 overflow-y-auto flex flex-col gap-3">
              <div className="text-center mb-2">
                <span className="text-[10px] text-muted-foreground bg-border/40 px-2 py-0.5 rounded-full">Today</span>
              </div>
              
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed shadow-sm ${
                    msg.sender === 'user' 
                      ? 'bg-accent text-white rounded-tr-sm' 
                      : 'bg-white text-primary border border-border/50 rounded-tl-sm'
                  }`}>
                    {msg.text}
                    <div className={`text-[9px] mt-1 text-right ${msg.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'}`}>
                      {msg.time}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-border/50 rounded-2xl rounded-tl-sm p-3 shadow-sm flex items-center gap-1">
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-border flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 bg-[#F9F8F6] border border-border/50 rounded-full px-4 py-2 text-xs focus:outline-none focus:border-primary/50 text-primary"
              />
              <button 
                onClick={handleSend}
                disabled={!inputText.trim()}
                className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:bg-primary"
              >
                <Send className="w-3.5 h-3.5 -ml-0.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
