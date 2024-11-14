// src/app/page.tsx
'use client';

import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  link: string;
}

interface Skill {
  category: string;
  technologies: string;
}

const projects: Project[] = [
  {
    title: "Project 1",
    description: "Description of your first major project and its key features.",
    link: "#"
  },
  {
    title: "Project 2",
    description: "Description of your second major project and its key features.",
    link: "#"
  }
];

const skills: Skill[] = [
  {
    category: "Frontend",
    technologies: "React, Next.js, TypeScript"
  },
  {
    category: "Backend",
    technologies: "Node.js, Express, Python"
  },
  {
    category: "Database",
    technologies: "MongoDB, PostgreSQL"
  }
];

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900">Pintu Bhattacharya</h1>
            <div className="flex space-x-4">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Full Stack Developer
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Building robust and scalable web applications
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <User className="h-8 w-8 text-gray-900 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate full-stack developer with expertise in modern web technologies.
              My focus is on creating efficient, scalable, and user-friendly applications
              that solve real-world problems.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900">{skill.category}</h3>
                  <p className="text-gray-600 text-sm">{skill.technologies}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <Code className="h-8 w-8 text-gray-900 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4 flex items-center">
                  <a href={project.link} className="text-blue-600 hover:text-blue-800 flex items-center">
                    View Project <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <Mail className="h-8 w-8 text-gray-900 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Contact</h2>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p className="text-center text-gray-600 mb-6">
              I'm always open to discussing new projects and opportunities.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                <Mail className="h-5 w-5 mr-2" />
                Email Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Pintu Bhattacharya. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Page;