'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const quickReplies = [
  'Emergency tarping needed',
  'Get a free estimate',
  'Insurance claim help',
  'Schedule inspection',
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm here to help with your roofing needs. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('emergency') || lowerMessage.includes('tarp') || lowerMessage.includes('urgent')) {
      return "I understand you need emergency help. Our crews are available 24/7. For immediate assistance, please call us at 1-800-555-ROOF. Would you like me to have someone call you back?";
    }
    if (lowerMessage.includes('estimate') || lowerMessage.includes('quote') || lowerMessage.includes('cost') || lowerMessage.includes('price')) {
      return "We offer free estimates for all roofing services. I can help you schedule one. What type of service do you need? (Storm damage repair, leak repair, inspection, etc.)";
    }
    if (lowerMessage.includes('insurance') || lowerMessage.includes('claim')) {
      return "We have extensive experience with insurance claims and can help you through the entire process. We'll document the damage, meet with adjusters, and ensure you get fair compensation. Would you like to schedule a free inspection?";
    }
    if (lowerMessage.includes('inspection') || lowerMessage.includes('schedule')) {
      return "Great! I can help you schedule an inspection. Our storm damage inspections are free. What's the best day and time for you? You can also call us directly at 1-800-555-ROOF.";
    }
    if (lowerMessage.includes('leak') || lowerMessage.includes('water')) {
      return "Roof leaks should be addressed quickly to prevent further damage. Is this an active leak right now? If so, I recommend calling our emergency line at 1-800-555-ROOF for immediate assistance.";
    }
    if (lowerMessage.includes('storm') || lowerMessage.includes('hurricane') || lowerMessage.includes('damage')) {
      return "We specialize in storm damage restoration. Our team can inspect your roof, document the damage for insurance, and handle repairs. Would you like to schedule a free storm damage inspection?";
    }
    if (lowerMessage.includes('hours') || lowerMessage.includes('open')) {
      return "Our office is open Monday-Friday 7am-7pm, Saturday 8am-5pm. However, our emergency crews are available 24/7 for urgent situations. How can I help you today?";
    }
    if (lowerMessage.includes('location') || lowerMessage.includes('area') || lowerMessage.includes('serve')) {
      return "We serve all of Florida including Miami, Tampa, Orlando, Jacksonville, and Fort Lauderdale. What area are you located in?";
    }
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! Thanks for reaching out. How can I help you with your roofing needs today?";
    }
    if (lowerMessage.includes('thank')) {
      return "You're welcome! Is there anything else I can help you with?";
    }
    if (lowerMessage.includes('call') || lowerMessage.includes('phone') || lowerMessage.includes('talk')) {
      return "You can reach us at 1-800-555-ROOF. We're available 24/7 for emergencies. Would you prefer to have someone call you back?";
    }

    return "Thanks for your message. For the fastest service, you can call us at 1-800-555-ROOF. Otherwise, let me know if you need help with emergency tarping, storm damage repair, leak repairs, or insurance claims.";
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(messageText),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'bg-slate-700 rotate-0' : 'bg-orange-500 hover:bg-orange-600 hover:scale-110'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Notification Badge */}
      {!isOpen && (
        <span className="fixed bottom-[5.5rem] right-6 z-50 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
          1
        </span>
      )}

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl transition-all duration-300 transform ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L2 12h3v9h14v-9h3L12 3zm0 2.84L18.5 12H18v8H6v-8h-.5L12 5.84z"/>
                </svg>
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">Florida Roof Restore</h3>
              <p className="text-xs text-gray-400">Typically replies within minutes</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-slate-800 rounded-lg transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                  message.sender === 'user'
                    ? 'bg-orange-500 text-white rounded-br-md'
                    : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-md'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-orange-200' : 'text-gray-400'}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white text-gray-800 shadow-sm border border-gray-100 rounded-2xl rounded-bl-md px-4 py-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        {messages.length <= 2 && (
          <div className="px-4 py-2 border-t border-gray-100 bg-white">
            <p className="text-xs text-gray-500 mb-2">Quick replies:</p>
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => handleSendMessage(reply)}
                  className="text-xs bg-gray-100 hover:bg-orange-100 hover:text-orange-600 text-gray-700 px-3 py-1.5 rounded-full transition"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-gray-100 bg-white rounded-b-2xl">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2.5 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim()}
              className="w-10 h-10 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          <p className="text-xs text-gray-400 text-center mt-2">
            For emergencies, call <a href="tel:1-800-555-ROOF" className="text-orange-500 font-medium">1-800-555-ROOF</a>
          </p>
        </div>
      </div>
    </>
  );
}
