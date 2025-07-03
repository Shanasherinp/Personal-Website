import React from 'react';
import { ExternalLink, Github, Eye, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce Price Tracker',
      description: 'Automated price monitoring system for multiple e-commerce platforms with real-time alerts',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'Scrapy', 'MongoDB', 'React'],
      color: 'from-cyan-400 to-blue-500',
      stats: { accuracy: '99.8%', websites: '50+', dataPoints: '1M+' }
    },
    {
      title: 'Social Media Analytics',
      description: 'Comprehensive social media data extraction and sentiment analysis platform',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'NLP', 'Django', 'PostgreSQL'],
      color: 'from-purple-400 to-pink-500',
      stats: { platforms: '5', posts: '500K+', sentiment: '95%' }
    },
    {
      title: 'Real Estate Data Pipeline',
      description: 'Automated real estate listing extraction and market analysis system',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'Selenium', 'FastAPI', 'Docker'],
      color: 'from-green-400 to-teal-500',
      stats: { listings: '100K+', cities: '25', automation: '100%' }
    },
    {
      title: 'Lead Generation System',
      description: 'B2B lead generation platform with automated contact discovery and verification',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'BeautifulSoup', 'Redis', 'Vue.js'],
      color: 'from-orange-400 to-red-500',
      stats: { leads: '50K+', accuracy: '92%', conversion: '15%' }
    }
  ];

  const achievements = [
    { number: '50+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '10M+', label: 'Data Points Extracted' },
    { number: '99.9%', label: 'Uptime Achieved' }
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing successful web scraping projects and data extraction solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="p-2 bg-gray-900/80 rounded-full hover:bg-cyan-500 transition-colors duration-300">
                    <Eye className="w-5 h-5 text-white" />
                  </button>
                  <button className="p-2 bg-gray-900/80 rounded-full hover:bg-purple-500 transition-colors duration-300">
                    <Github className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className={`text-lg font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                        {value}
                      </div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full py-3 bg-gradient-to-r ${project.color} rounded-full font-semibold text-white hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group`}>
                  <span>View Case Study</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {achievement.number}
              </div>
              <div className="text-gray-400">{achievement.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700">
            <span className="text-gray-300">Want to see more projects?</span>
            <a 
              href="https://shanasherin.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              <span>Visit Full Portfolio</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;