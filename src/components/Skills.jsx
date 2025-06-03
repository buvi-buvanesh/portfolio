import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Server, Wrench, Cloud } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('backend');

  const skillCategories = {
    backend: {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Java 8', level: 90, description: 'Core Java, OOP, Lambda Expressions, Streams' },
        { name: 'Spring Boot', level: 90, description: 'REST APIs, Security, Data JPA, Microservices' },
        { name: 'Microservices', level: 85, description: 'Architecture, Service Communication, Scalability' },
        { name: 'Spring Cache', level: 80, description: 'Caching Strategies, Performance Optimization' },
        { name: 'RabbitMQ', level: 75, description: 'Message Queuing, Asynchronous Processing' },
        { name: 'WebSocket', level: 75, description: 'Real-time Communication, Chat Systems' }
      ]
    },
    frontend: {
      title: 'Frontend Development',
      icon: Globe,
      skills: [
        { name: 'React', level: 85, description: 'Hooks, Component Architecture, State Management' },
        { name: 'React Zustand', level: 80, description: 'State Management, Store Management' },
        { name: 'JavaScript (ES6+)', level: 85, description: 'Modern JS, Async/Await, Modules' },
        { name: 'HTML5/CSS3', level: 80, description: 'Semantic HTML, Flexbox, Grid, Responsive Design' },
        { name: 'Responsive Design', level: 85, description: 'Mobile-first, Cross-browser Compatibility' },
        { name: 'UI/UX Design', level: 75, description: 'User Interface, User Experience Design' }
      ]
    },
    database: {
      title: 'Database & Storage',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 85, description: 'NoSQL, Aggregation, Schema Design, Performance' },
        { name: 'MySQL', level: 85, description: 'Complex Queries, Indexing, Performance Tuning' },
        { name: 'Database Design', level: 80, description: 'Schema Design, Normalization, Optimization' },
        { name: 'Data Modeling', level: 75, description: 'Entity Relationships, Data Architecture' },
        { name: 'Query Optimization', level: 80, description: 'Performance Tuning, Index Strategies' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: [
        { name: 'Docker', level: 80, description: 'Containerization, Multi-stage Builds, Deployment' },
        { name: 'Jenkins', level: 75, description: 'CI/CD Pipelines, Automated Deployment' },
        { name: 'Git/GitHub', level: 90, description: 'Version Control, Branching, Collaboration' },
        { name: 'IntelliJ IDEA', level: 90, description: 'Advanced IDE Features, Debugging' },
        { name: 'Postman', level: 85, description: 'API Testing, Documentation' },
        { name: 'Maven', level: 80, description: 'Build Tools, Dependency Management' }
      ]
    },
    cloud: {
      title: 'DevOps & Integration',
      icon: Cloud,
      skills: [
        { name: 'REST APIs', level: 90, description: 'RESTful Design, Documentation, Testing' },
        { name: 'ChatGPT API', level: 75, description: 'AI Integration, Natural Language Processing' },
        { name: 'Media Processing', level: 70, description: 'Video Conversion, File Processing' },
        { name: 'IDP Authentication', level: 75, description: 'Identity Provider Integration' },
        { name: 'SDLC', level: 85, description: 'Software Development Life Cycle Management' }
      ]
    }
  };

  const categories = Object.keys(skillCategories);

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <motion.div
          className="skills-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Code className="skills-icon" />
          <p>
            My technical expertise spans across the full stack, with a strong focus on Java ecosystem 
            and modern web technologies. I'm passionate about writing clean, efficient code and 
            staying updated with the latest industry trends.
          </p>
        </motion.div>

        <motion.div
          className="skills-categories"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => {
            const CategoryIcon = skillCategories[category].icon;
            return (
              <button
                key={category}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                <CategoryIcon className="category-icon" />
                <span>{skillCategories[category].title}</span>
              </button>
            );
          })}
        </motion.div>

        <motion.div
          className="skills-content"
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="skills-grid">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="skill-header">
                  <h4>{skill.name}</h4>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <p className="skill-description">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>What I Bring to the Table</h3>
          <div className="summary-points">
            <div className="summary-point">
              <strong>Full Stack Expertise:</strong> End-to-end development from database design to user interface
            </div>
            <div className="summary-point">
              <strong>Java Mastery:</strong> Deep understanding of Java ecosystem and Spring framework
            </div>
            <div className="summary-point">
              <strong>Modern Practices:</strong> Test-driven development, clean code, and agile methodologies
            </div>
            <div className="summary-point">
              <strong>Problem Solving:</strong> Analytical thinking and creative solutions to complex challenges
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .skills-intro {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 3rem;
          padding: 2rem;
          background: var(--bg-secondary);
          border-radius: 1rem;
          text-align: center;
        }

        .skills-icon {
          width: 3rem;
          height: 3rem;
          color: var(--primary-color);
          flex-shrink: 0;
        }

        .skills-intro p {
          font-size: 1.1rem;
          margin: 0;
        }

        .skills-categories {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
          overflow-x: auto;
          padding: 1rem 0;
        }

        .category-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 1.5rem;
          background: var(--bg-primary);
          border: 2px solid var(--border-color);
          border-radius: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .category-btn:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
        }

        .category-btn.active {
          background: var(--primary-color);
          border-color: var(--primary-color);
          color: white;
        }

        .category-icon {
          width: 1.2rem;
          height: 1.2rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .skill-card {
          background: var(--bg-primary);
          padding: 1.5rem;
          border-radius: 1rem;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .skill-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-2px);
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .skill-header h4 {
          margin: 0;
          color: var(--text-primary);
        }

        .skill-percentage {
          font-weight: 600;
          color: var(--primary-color);
        }

        .skill-bar {
          width: 100%;
          height: 8px;
          background: var(--bg-secondary);
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 1rem;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          border-radius: 4px;
        }

        .skill-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .skills-summary {
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          color: white;
          padding: 3rem;
          border-radius: 1rem;
          text-align: center;
        }

        .skills-summary h3 {
          color: white;
          margin-bottom: 2rem;
        }

        .summary-points {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .summary-point {
          background: rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          border-radius: 0.5rem;
          text-align: left;
        }

        .summary-point strong {
          color: var(--accent-color);
        }

        @media (max-width: 768px) {
          .skills-intro {
            flex-direction: column;
            text-align: center;
          }

          .skills-categories {
            flex-direction: column;
          }

          .category-btn {
            justify-content: center;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .summary-points {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;