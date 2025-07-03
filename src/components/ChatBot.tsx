import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Shana's virtual assistant. How can I help you with your web scraping or data extraction needs?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);

  const quickReplies = [
    'What services do you offer?',
    'How much does web scraping cost?',
    'Can you help with my project?',
    'What\'s your turnaround time?'
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: 'user',
        timestamp: new Date()
      };
      
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: "Thanks for your message! I'll connect you with Shana right away. For immediate assistance, feel free to use the contact form or email directly at contact@shanasherin.in",
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleQuickReply = (reply: string) => {
    const newMessage = {
      id: messages.length + 1,
      text: reply,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages([...messages, newMessage]);
    
    // Simulate bot response based on quick reply
    setTimeout(() => {
      let botResponse = '';
      switch (reply) {
        case 'What services do you offer?':
          botResponse = 'I offer comprehensive web scraping, data extraction, API development, automation solutions, and consulting services. Check out the Services section for more details!';
          break;
        case 'How much does web scraping cost?':
          botResponse = 'Pricing depends on project complexity, data volume, and requirements. I offer competitive rates starting from $50. Let\'s discuss your specific needs!';
          break;
        case 'Can you help with my project?':
          botResponse = 'Absolutely! I\'d love to help with your project. Please share your requirements through the contact form or email, and I\'ll get back to you within 24 hours.';
          break;
        case 'What\'s your turnaround time?':
          botResponse = 'Most projects are completed within 3-7 days depending on complexity. I always provide realistic timelines and keep you updated throughout the process.';
          break;
        default:
          botResponse = 'Great question! For detailed information, please use the contact form or email me directly. I\'m here to help!';
      }
      
      const response = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg hover:scale-110 transition-all duration-300 ${
          isOpen ? 'rotate-180' : ''
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-4 flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5 text-gray-900" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Shana's Assistant</h3>
              <p className="text-cyan-100 text-sm">Online now</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'bg-gray-800 text-gray-300'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="p-4 border-t border-gray-800">
              <div className="grid grid-cols-2 gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs bg-gray-800 text-gray-300 px-3 py-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-800">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none text-white text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;