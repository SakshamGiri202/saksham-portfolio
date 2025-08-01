import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com', name: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://linkedin.com', name: 'LinkedIn' },
    { icon: <Twitter size={20} />, url: 'https://twitter.com', name: 'Twitter' },
    { icon: <Mail size={20} />, url: 'mailto:john@example.com', name: 'Email' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand and Description */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Saksham Giri
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Full-stack developer passionate about creating exceptional digital experiences.
              Always learning, always building, always improving.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target={social.url.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 transform hover:scale-110"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-indigo-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p>Bangalore, KA</p>
              <a
                href="mailto:sakshamgiri500@gmail.com"
                className="hover:text-indigo-400 transition-colors duration-200"
              >
                sakshamgiri500@gmail.com
              </a>
              <br />
              <a
                href="tel:+919142620641"
                className="hover:text-indigo-400 transition-colors duration-200"
              >
                +91 9142620641
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Saksham Gir. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with ❤️ by Saksham
            </p>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
