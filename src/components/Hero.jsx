import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, Coffee, Code2 } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a link to download the resume PDF
    const link = document.createElement('a');
    link.href = '/Buvanesh_Resume.pdf';
    link.download = 'Buvanesh_Resume.pdf';
    link.click();
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="hero-greeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Coffee className="greeting-icon" />
              <span>Hello, I'm</span>
            </motion.div>

            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Buvaneshkumar
            </motion.h1>

            <motion.div
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Code2 className="title-icon" />
              <span>Software Engineer</span>
            </motion.div>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Software Engineer with 2+ years of experience in designing and developing scalable web applications 
              and microservices. Passionate about building performant, maintainable, and secure systems.
            </motion.p>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">4</span>
                <span className="stat-label">Key Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">2</span>
                <span className="stat-label">Medium Articles</span>
              </div>
            </motion.div>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <button className="btn btn-primary" onClick={scrollToContact}>
                <Mail className="btn-icon" />
                Get In Touch
              </button>
              <button className="btn btn-secondary" onClick={downloadResume}>
                <Download className="btn-icon" />
                Download Resume
              </button>
            </motion.div>

            <motion.div
              className="hero-social"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="code-window">
              <div className="window-header">
                <div className="window-controls">
                  <span className="control red"></span>
                  <span className="control yellow"></span>
                  <span className="control green"></span>
                </div>
                <span className="window-title">JavaDeveloper.java</span>
              </div>
              <div className="code-content">
                <motion.div
                  className="code-line"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6 }}
                >
                  <span className="keyword">public class</span> <span className="class-name">JavaDeveloper</span> {'{'}
                </motion.div>
                <motion.div
                  className="code-line indent"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8 }}
                >
                  <span className="keyword">private</span> <span className="type">String</span> name = <span className="string">"Buvanesh"</span>;
                </motion.div>
                <motion.div
                  className="code-line indent"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.0 }}
                >
                  <span className="keyword">private</span> <span className="type">String[]</span> skills = {'{'}
                </motion.div>
                <motion.div
                  className="code-line indent-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.2 }}
                >
                  <span className="string">"Java"</span>, <span className="string">"Spring Boot"</span>, <span className="string">"React"</span>
                </motion.div>
                <motion.div
                  className="code-line indent"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.4 }}
                >
                  {'}'};
                </motion.div>
                <motion.div
                  className="code-line"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.6 }}
                >
                  {'}'}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
          position: relative;
          overflow: hidden;
          padding-top: 80px;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
          z-index: 0;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-greeting {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        .greeting-icon {
          width: 1.2rem;
          height: 1.2rem;
          color: var(--accent-color);
        }

        .hero-name {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .title-icon {
          width: 1.5rem;
          height: 1.5rem;
          color: var(--primary-color);
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .hero-stats {
          display: flex;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-color);
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .btn-icon {
          width: 1rem;
          height: 1rem;
        }

        .hero-social {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          background: var(--bg-primary);
          border: 2px solid var(--border-color);
          border-radius: 50%;
          color: var(--text-secondary);
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-link:hover {
          background: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
          transform: translateY(-2px);
        }

        .code-window {
          background: var(--bg-dark);
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          max-width: 500px;
        }

        .window-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          background: #1e293b;
          border-bottom: 1px solid #334155;
        }

        .window-controls {
          display: flex;
          gap: 0.5rem;
        }

        .control {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .control.red {
          background: #ef4444;
        }

        .control.yellow {
          background: #f59e0b;
        }

        .control.green {
          background: #10b981;
        }

        .window-title {
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .code-content {
          padding: 1.5rem;
          font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .code-line {
          color: #e2e8f0;
          margin-bottom: 0.5rem;
        }

        .indent {
          padding-left: 2rem;
        }

        .indent-2 {
          padding-left: 4rem;
        }

        .keyword {
          color: #8b5cf6;
        }

        .class-name {
          color: #06b6d4;
        }

        .type {
          color: #10b981;
        }

        .string {
          color: #f59e0b;
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .hero-name {
            font-size: 3rem;
          }

          .hero-stats {
            justify-content: center;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .code-window {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;