import React from 'react';
import { ArrowRight, Github, Linkedin, Youtube, Mail, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Web Scraping Consultant
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300">
              Turning Data Into <span className="text-cyan-400">Opportunities</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              Transforming raw web data into actionable business insights. From B.Com graduate to IT specialist, 
              I help businesses unlock the power of automated data extraction and web scraping solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="mailto:pshanasherin567@gmail.com">
              <button className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                <span className="flex items-center space-x-2">
                  <span>Let's Connect</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </a>
            {/* <button className="px-8 py-3 border-2 border-gray-600 rounded-full font-semibold text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
              View Portfolio
            </button> */}
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://www.linkedin.com/in/shana-sherin-p/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white" />
            </a>
            <a
              href="https://github.com/Shanasherinp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-6 h-6 text-gray-300 group-hover:text-white" />
            </a>
            <a
              href="https://youtube.com/@Juwassy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 hover:scale-110 group"
            >
              <Youtube className="w-6 h-6 text-gray-300 group-hover:text-white" />
            </a>
            <a
              href="mailto:pshanasherin567@gmail.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="w-6 h-6 text-gray-300 group-hover:text-white" />
            </a>
          </div>

          <div className="flex items-center space-x-8 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">100+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">2+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400">100%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10">
            <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <img
                  src="https://connectv2s3.s3.ap-south-1.amazonaws.com/Media_Uploads/junks/58c9ab66e0814b7f87a259b7a5e53f85.jpg"
                  alt="Shana Sherin"
                  className="w-72 h-72 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-bounce delay-150"></div>
          
          <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 border border-gray-700 animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;