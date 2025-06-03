import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Database, Globe, Server, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Fintech Platform - Loan Management System",
      description: "Built a comprehensive loan management system with real-time updates, client onboarding, and commission tracking. Implemented efficient caching mechanisms for optimal performance.",
      image: "/api/placeholder/400/250",
      technologies: ["Spring Boot", "React", "Spring Cache", "MySQL", "REST APIs"],
      category: "fullstack",
      features: [
        "Real-time loan status updates",
        "Client onboarding workflow",
        "Commission tracking system",
        "Spring Cache implementation for performance",
        "Comprehensive dashboard and reporting"
      ],
      github: "https://github.com/buvanesh/fintech-platform",
      live: null,
      status: "Completed"
    },
    {
      id: 2,
      title: "LMS - Learning Management System",
      description: "Developed an AI-assisted assessment generator with secure test distribution using ChatGPT integration. Built with microservices architecture for scalability.",
      image: "/api/placeholder/400/250",
      technologies: ["Spring Microservices", "MongoDB", "React", "ChatGPT API", "Spring Security"],
      category: "fullstack",
      features: [
        "AI-assisted assessment generation using ChatGPT",
        "Secure test distribution system",
        "Microservices architecture",
        "MongoDB for flexible data storage",
        "Role-based access control for educators and students"
      ],
      github: "https://github.com/buvanesh/lms-platform",
      live: null,
      status: "Completed"
    },
    {
      id: 3,
      title: "TROVE Chat Platform",
      description: "Engineered a feature-rich chat system with private/group messaging, IDP-based authentication, and media processor that converts video files to multiple resolutions.",
      image: "/api/placeholder/400/250",
      technologies: ["RabbitMQ", "WebSocket", "React Zustand", "Spring Boot", "Media Processing"],
      category: "fullstack",
      features: [
        "Private and group messaging functionality",
        "IDP-based authentication system",
        "Media processor for video file conversion",
        "Multiple video resolution support",
        "Real-time messaging with WebSocket and RabbitMQ"
      ],
      github: "https://github.com/buvanesh/trove-chat",
      live: null,
      status: "Completed"
    },
    {
      id: 4,
      title: "OKR System - Performance Tracking",
      description: "Designed and implemented a comprehensive performance tracking system supporting quarterly cycles, self-ratings, and manager evaluations for organizational goal management.",
      image: "/api/placeholder/400/250",
      technologies: ["Spring Boot", "MongoDB", "React", "REST APIs", "Spring Security"],
      category: "fullstack",
      features: [
        "Quarterly performance cycle management",
        "Self-rating and peer evaluation system",
        "Manager evaluation and feedback",
        "Goal setting and tracking",
        "Comprehensive reporting and analytics"
      ],
      github: "https://github.com/buvanesh/okr-system",
      live: null,
      status: "Completed"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: Code },
    { id: 'fullstack', label: 'Full Stack', icon: Globe },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'frontend', label: 'Frontend', icon: Database }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className="projects-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Here are some of my recent projects that showcase my skills in Java development, 
          full-stack web development, and modern software engineering practices.
        </motion.p>

        <motion.div
          className="projects-grid"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <Code className="placeholder-icon" />
                </div>
                <div className="project-status">
                  <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Want to see more?</h3>
          <p>Check out my GitHub profile for more projects and contributions to open source.</p>
          <a 
            href="https://github.com/buvanesh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <Github className="btn-icon" />
            View GitHub Profile
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .projects-intro {
          text-align: center;
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .project-filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: var(--bg-primary);
          border: 2px solid var(--border-color);
          border-radius: 2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .filter-btn:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
        }

        .filter-btn.active {
          background: var(--primary-color);
          border-color: var(--primary-color);
          color: white;
        }

        .filter-icon {
          width: 1rem;
          height: 1rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .project-card {
          background: var(--bg-primary);
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .project-card:hover {
          box-shadow: var(--shadow-xl);
        }

        .project-image {
          position: relative;
          height: 200px;
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        }

        .placeholder-icon {
          width: 4rem;
          height: 4rem;
          color: white;
          opacity: 0.7;
        }

        .project-status {
          position: absolute;
          top: 1rem;
          right: 1rem;
        }

        .status {
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .status.completed {
          background: #10b981;
          color: white;
        }

        .status.in-progress {
          background: #f59e0b;
          color: white;
        }

        .project-content {
          padding: 2rem;
        }

        .project-content h3 {
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .project-description {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .project-features h4 {
          color: var(--text-primary);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .project-features ul {
          list-style: none;
          padding: 0;
          margin-bottom: 1.5rem;
        }

        .project-features li {
          position: relative;
          padding-left: 1rem;
          margin-bottom: 0.25rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .project-features li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--primary-color);
          font-weight: bold;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          background: var(--bg-secondary);
          color: var(--text-primary);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.8rem;
          border: 1px solid var(--border-color);
        }

        .project-actions {
          display: flex;
          gap: 1rem;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          flex: 1;
          justify-content: center;
        }

        .github-btn {
          background: var(--text-primary);
          color: white;
        }

        .github-btn:hover {
          background: var(--text-secondary);
          transform: translateY(-2px);
        }

        .live-btn {
          background: var(--primary-color);
          color: white;
        }

        .live-btn:hover {
          background: var(--secondary-color);
          transform: translateY(-2px);
        }

        .action-icon {
          width: 1rem;
          height: 1rem;
        }

        .projects-cta {
          text-align: center;
          background: var(--bg-secondary);
          padding: 3rem;
          border-radius: 1rem;
        }

        .projects-cta h3 {
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .projects-cta p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .btn-icon {
          width: 1rem;
          height: 1rem;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-filters {
            flex-direction: column;
            align-items: center;
          }

          .filter-btn {
            width: 200px;
            justify-content: center;
          }

          .project-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;