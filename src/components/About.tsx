import React from 'react';
import { Code, Palette, Rocket, Users } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code size={24} />,
      title: 'Frontend Development',
      description: 'React, TypeScript, Next.js, Tailwind CSS',
    },
    {
      icon: <Rocket size={24} />,
      title: 'Backend Development',
      description: 'Node.js, Python, PostgreSQL, MongoDB',
    },
    {
      icon: <Palette size={24} />,
      title: 'UI/UX Design',
      description: 'Figma, Adobe Creative Suite, Prototyping',
    },
    {
      icon: <Users size={24} />,
      title: 'Team Leadership',
      description: 'Project Management, Mentoring, Agile',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with over 5 years of experience creating
            digital solutions that bridge the gap between design and technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://i.pinimg.com/736x/42/2a/fd/422afd70305d17e003a9d01d571bd462.jpg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
              alt="Profile"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:mx-0"
            />
          </div>

          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              My journey began with a curiosity for how things work, which led me to pursue
              computer science and fall in love with the art of problem-solving through code.
              I specialize in creating scalable web applications and have worked with startups
              and established companies alike.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or sharing my knowledge through technical writing and
              mentoring.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-indigo-600 dark:text-indigo-400 mb-3">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
