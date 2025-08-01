import React from 'react';
import { ArrowDown, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              Saksham Giri
            </h1>

            <div className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed space-y-4">
              <p>
                I'm a <span className="text-emerald-500 font-semibold">backend developer</span> who loves building the logic behind great user experiences. From designing scalable APIs to working with databases and authentication systems, I enjoy crafting reliable systems that power modern applications.
              </p>

              <p>
                Currently a CSE undergrad, I've worked on projects using Node.js, MongoDB, REST APIs, real-time data sync, and more. I'm all about clean architecture, performance, and writing code that makes sense.
              </p>

              <p>
                In my free time, you'll probably find me ricing my Linux setup (yes, I'm that kind of person) — tweaking everything from window managers to terminal themes to get that perfect dev flow.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 px-6 py-3 font-medium transition-colors duration-200"
              >
                View My Work →
              </a>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/SakshamGiri202"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200 transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="www.linkedin.com/in/saksham-giri-316683261/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200 transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://x.com/sakshamgiri212"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200 transform hover:scale-110"
              >
                <Twitter size={24} />
              </a>
              <a
                href="mailto:sakshamgiri500@mail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200 transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Animated background circles */}
              <div className="absolute inset-0 animate-pulse-slow">
                <div className="w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-blue-500/20 rounded-full blur-xl"></div>
              </div>
              <div className="absolute inset-4 animate-pulse-slow" style={{ animationDelay: '1s' }}>
                <div className="w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-lg"></div>
              </div>

              {/* Main avatar container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-600 animate-spin-slow"></div>
                <div className="absolute inset-1 rounded-full overflow-hidden bg-white dark:bg-gray-900">
                  <img
                    src="https://i.pinimg.com/736x/42/2a/fd/422afd70305d17e003a9d01d571bd462.jpg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                    alt="Saksham Giri"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
                <span className="text-xl">💻</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                <span className="text-xl">🚀</span>
              </div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white shadow-lg animate-ping">
                <span className="text-sm">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
