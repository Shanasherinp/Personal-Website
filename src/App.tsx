import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-teal-900/10 pointer-events-none"></div>
      
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;