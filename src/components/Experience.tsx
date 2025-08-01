import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Led a team of 5 developers in building scalable web applications using React, Node.js, and AWS. Increased application performance by 40% and reduced deployment time by 60%.',
      achievements: [
        'Architected microservices infrastructure serving 1M+ users',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines reducing deployment errors by 90%',
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Developed responsive web applications and collaborated with designers to create intuitive user interfaces. Built the company\'s design system used across 10+ products.',
      achievements: [
        'Built reusable component library adopted company-wide',
        'Improved application load time by 50% through optimization',
        'Collaborated with UX team to increase user engagement by 30%',
      ],
      technologies: ['React', 'Vue.js', 'Sass', 'JavaScript', 'Figma'],
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      location: 'Austin, TX',
      period: '2019 - 2020',
      description: 'Worked on diverse client projects ranging from e-commerce platforms to SaaS applications. Delivered 15+ projects on time and within budget.',
      achievements: [
        'Developed custom CMS solutions for 5+ clients',
        'Integrated third-party APIs and payment systems',
        'Maintained 99.9% uptime for production applications',
      ],
      technologies: ['PHP', 'MySQL', 'WordPress', 'JavaScript', 'Bootstrap'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey spanning various roles and technologies
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-gray-50 dark:border-gray-800 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg text-indigo-600 dark:text-indigo-400 font-semibold mb-3">
                      {exp.company}
                    </h4>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-600 dark:text-gray-300 flex items-start"
                          >
                            <span className="text-emerald-500 mr-2 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;