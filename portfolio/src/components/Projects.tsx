import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  image: string;
}

const Projects = () => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "Expense Tracker",
      description: "A comprehensive expense tracking application that helps users manage their finances with an intuitive interface and detailed analytics.",
      technologies: ["React", "JavaScript", "LocalStorage", "CSS"],
      liveLink: "https://regulusrk.github.io/expense-tracker/",
      githubLink: "https://github.com/RegulusRK/expense-tracker",
      image: "https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      title: "User Registration App",
      description: "A sleek user registration system with form validation and user management capabilities.",
      technologies: ["React", "JavaScript", "Form Validation", "Responsive Design"],
      liveLink: "https://regulusrk.github.io/user-registration-app/",
      githubLink: "https://github.com/RegulusRK/user-registration-app",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      title: "Weather Forecast App",
      description: "A weather application that provides real-time weather data and forecasts using external API integration.",
      technologies: ["JavaScript", "Weather API", "Async/Await", "Geolocation"],
      liveLink: "https://regulusrk.github.io/weather-forecast-app/",
      githubLink: "https://github.com/RegulusRK/weather-forecast-app",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      title: "Task List",
      description: "A feature-rich task management application with CRUD operations and local storage persistence.",
      technologies: ["JavaScript", "LocalStorage", "DOM Manipulation", "CSS"],
      liveLink: "https://regulusrk.github.io/tasklist/",
      githubLink: "https://github.com/RegulusRK/tasklist",
      image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]);

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">My Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Here's a selection of projects I've worked on. Each one presented unique challenges and learning opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-800/50 rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-full transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" /> Live
                    </a>
                  )}
                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-white bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-full transition-colors"
                    >
                      <Github size={16} className="mr-1" /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;