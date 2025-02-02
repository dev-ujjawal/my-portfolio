import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'To-Do List App',
    description: 'A feature-rich task management application with real-time updates',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=500',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Snake Game',
    description: 'Classic snake game with modern features and multiplayer support',
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=500',
    technologies: ['JavaScript', 'HTML Canvas', 'Socket.io'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Calculator',
    description: 'Scientific calculator with advanced mathematical functions',
    image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&q=80&w=500',
    technologies: ['React', 'TypeScript', 'Material-UI'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Weather App',
    description: 'Real-time weather forecasting with location detection',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=500',
    technologies: ['React', 'OpenWeather API', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Featured <span className="text-cyan-500">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  github,
  demo,
}: {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}) => (
  <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all transform hover:scale-105">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-gray-800 text-cyan-500 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-cyan-500 transition-colors"
        >
          <Github size={20} />
          <span>Code</span>
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-cyan-500 transition-colors"
        >
          <ExternalLink size={20} />
          <span>Demo</span>
        </a>
      </div>
    </div>
  </div>
);

export default Projects;