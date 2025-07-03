import React from 'react';
import { Database, Github, Linkedin, Youtube, Mail, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Scraping',
    'Data Extraction',
    'API Development',
    'Automation',
    'Consulting',
    'AI Solutions'
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/shana-sherin', name: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/shana-sherin', name: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/@Juwassy', name: 'YouTube' },
    { icon: Mail, href: 'mailto:contact@shanasherin.in', name: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Database className="w-8 h-8 text-cyan-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Shana Sherin
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming web data into business opportunities through innovative scraping solutions and automation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 hover:scale-110 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="text-gray-400">
                <strong className="text-gray-300">Email:</strong>
                <br />
                <a href="mailto:contact@shanasherin.in" className="hover:text-cyan-400 transition-colors duration-300">
                  contact@shanasherin.in
                </a>
              </div>
              <div className="text-gray-400">
                <strong className="text-gray-300">Location:</strong>
                <br />
                Kerala, India
              </div>
              <div className="text-gray-400">
                <strong className="text-gray-300">Response Time:</strong>
                <br />
                Within 24 hours
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Shana Sherin. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a 
                href="https://shanasherin.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-1"
              >
                <span>Portfolio</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="https://juwassy.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-1"
              >
                <span>Juwassy</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-gray-400">Privacy Policy</span>
              <span className="text-gray-400">Terms of Service</span>
            </div>
          </div>
          
          <div className="text-center mt-4 text-gray-500 text-sm">
            Made with <Heart className="w-4 h-4 inline text-red-400 animate-pulse" /> by Shana Sherin
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;