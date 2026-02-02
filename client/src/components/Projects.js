import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch from API
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        // Fallback data
        setProjects([
          {
            _id: 1,
            title: 'E-Commerce Platform',
            description: 'Full-stack MERN e-commerce application with payment integration',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            liveLink: '#',
            githubLink: '#',
            featured: true,
          },
          {
            _id: 2,
            title: 'Task Management App',
            description: 'Collaborative task management tool with real-time updates',
            technologies: ['React', 'Firebase', 'Tailwind CSS'],
            liveLink: '#',
            githubLink: '#',
            featured: true,
          },
          {
            _id: 3,
            title: 'Weather Application',
            description: 'Real-time weather app with location-based forecasts',
            technologies: ['React', 'API', 'Chart.js'],
            liveLink: '#',
            githubLink: '#',
            featured: false,
          },
        ]);
        setLoading(false);
      });
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        {loading ? (
          <p>Loading projects...</p>
        ) : (
          <div className="grid">
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="project-header">
                  <h3>{project.title}</h3>
                  {project.featured && <span className="badge">Featured</span>}
                </div>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  {project.technologies?.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveLink && (
                    <a href={project.liveLink} className="link-btn">
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} className="link-btn github">
                      GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
