import React from 'react';
import { Globe, Database, Bot, FileText, Zap, TrendingUp, Users, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Scraping Projects',
      description: 'Custom web scraping solutions for extracting data from any website or API',
      features: ['E-commerce data extraction', 'Social media monitoring', 'Price tracking', 'Lead generation'],
      color: 'from-cyan-400 to-blue-500',
      bgColor: 'from-cyan-500/10 to-blue-500/10'
    },
    {
      icon: Database,
      title: 'Data Extraction Consulting',
      description: 'Expert consultation on data extraction strategies and implementation',
      features: ['Architecture planning', 'Tool selection', 'Performance optimization', 'Compliance guidance'],
      color: 'from-purple-400 to-pink-500',
      bgColor: 'from-purple-500/10 to-pink-500/10'
    },
    {
      icon: Bot,
      title: 'AI-Powered Solutions',
      description: 'Intelligent automation and AI-enhanced data processing services',
      features: ['Resume optimization', 'Cover letter generation', 'Content analysis', 'Smart filtering'],
      color: 'from-green-400 to-teal-500',
      bgColor: 'from-green-500/10 to-teal-500/10'
    },
    {
      icon: TrendingUp,
      title: 'Side Hustle Projects',
      description: 'Small-scale automation projects and passive income solutions',
      features: ['Automated workflows', 'Data monetization', 'API integrations', 'Market research'],
      color: 'from-orange-400 to-red-500',
      bgColor: 'from-orange-500/10 to-red-500/10'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising quality'
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Following best practices and legal guidelines'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Ongoing support and maintenance for all projects'
    },
    {
      icon: FileText,
      title: 'Detailed Documentation',
      description: 'Comprehensive guides and technical documentation'
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive web scraping and data extraction services tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`relative group bg-gradient-to-br ${service.bgColor} rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:-translate-y-1`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`mt-6 px-6 py-3 bg-gradient-to-r ${service.color} rounded-full font-semibold text-white hover:scale-105 transition-all duration-300 hover:shadow-lg`}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-500 transition-all duration-300">
                <benefit.icon className="w-8 h-8 text-cyan-400 group-hover:text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;