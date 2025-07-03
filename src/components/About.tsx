import React from 'react';
import { GraduationCap, Code, Database, Zap, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2019',
      title: 'B.Com Graduate',
      description: 'Completed Bachelor of Commerce with a focus on business fundamentals',
      icon: GraduationCap,
      color: 'from-cyan-400 to-blue-500'
    },
    {
      year: '2020',
      title: 'Tech Transition',
      description: 'Self-taught programming, started with Python and web technologies',
      icon: Code,
      color: 'from-purple-400 to-pink-500'
    },
    {
      year: '2021',
      title: 'Specialization',
      description: 'Focused on web scraping, data extraction, and automation tools',
      icon: Database,
      color: 'from-cyan-400 to-purple-500'
    },
    {
      year: '2022',
      title: 'Freelance Success',
      description: 'Built a reputation as a reliable web scraping consultant',
      icon: Zap,
      color: 'from-green-400 to-teal-500'
    },
    {
      year: '2023',
      title: 'Business Growth',
      description: 'Expanded services to include AI-powered solutions and consulting',
      icon: TrendingUp,
      color: 'from-orange-400 to-red-500'
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Established as a trusted expert in web scraping and data extraction',
      icon: Award,
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  const skills = [
    { name: 'Python', level: 95, color: 'from-yellow-400 to-orange-500' },
    { name: 'Web Scraping', level: 98, color: 'from-cyan-400 to-blue-500' },
    { name: 'Django', level: 90, color: 'from-green-400 to-teal-500' },
    { name: 'Scrapy', level: 95, color: 'from-purple-400 to-pink-500' },
    { name: 'REST APIs', level: 88, color: 'from-indigo-400 to-purple-500' },
    { name: 'Data Analysis', level: 85, color: 'from-pink-400 to-red-500' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              My Journey
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From commerce graduate to tech specialist - a story of passion, persistence, and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-8">Timeline</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${item.color} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-sm font-semibold text-gray-400">{item.year}</span>
                        <div className="h-px bg-gradient-to-r from-gray-700 to-transparent flex-1"></div>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-purple-400 mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mt-8">
              <h4 className="text-xl font-semibold text-cyan-400 mb-4">What Drives Me</h4>
              <p className="text-gray-300 leading-relaxed">
                I believe in the power of data to transform businesses. My journey from commerce to tech has given me 
                a unique perspective on how data extraction and automation can solve real-world business challenges. 
                Every project is an opportunity to create value and drive innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;