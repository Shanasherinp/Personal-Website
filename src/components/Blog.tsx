import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Code } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'Advanced Web Scraping Techniques for Modern Websites',
      excerpt: 'Learn how to handle dynamic content, anti-bot measures, and complex JavaScript-rendered pages',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Technical',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Building Scalable Data Pipelines with Python',
      excerpt: 'A comprehensive guide to creating robust, maintainable data extraction workflows',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Tutorial',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Freelancing Success: From Zero to Web Scraping Expert',
      excerpt: 'My journey and practical tips for building a successful freelancing career in data extraction',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Career',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-green-400 to-teal-500'
    }
  ];

  const categories = [
    { name: 'Technical', count: 15, icon: Code, color: 'from-cyan-400 to-blue-500' },
    { name: 'Tutorial', count: 12, icon: BookOpen, color: 'from-purple-400 to-pink-500' },
    { name: 'Career', count: 8, icon: TrendingUp, color: 'from-green-400 to-teal-500' }
  ];

  return (
    <section id="blog" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Blog & Insights
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Sharing knowledge, experiences, and insights from the world of web scraping and data extraction
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <div key={index} className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
              <p className="text-gray-400">{category.count} articles</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <article key={index} className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${post.color} rounded-full text-sm font-medium text-white`}>
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <button className="group flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700">
            <span className="text-gray-300">Want to stay updated?</span>
            <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-medium hover:scale-105 transition-all duration-300">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;