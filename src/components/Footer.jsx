import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/buvanesh', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/buvaneshkumar-c-a82146208/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:buvaneshkumar293@gmail.com', label: 'Email' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-brand">
              <div className="brand-logo">
                <Code className="brand-icon" />
                <span className="brand-name">Buvanesh</span>
              </div>
              <p className="brand-description">
                Java Full Stack Developer passionate about creating efficient, 
                scalable solutions and writing clean, maintainable code.
              </p>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Quick Links</h3>
            <nav className="footer-nav">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  className="footer-link"
                  onClick={() => scrollToSection(link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Technologies</h3>
            <div className="tech-list">
              <span className="tech-item">Java</span>
              <span className="tech-item">Spring Boot</span>
              <span className="tech-item">React.js</span>
              <span className="tech-item">MySQL</span>
              <span className="tech-item">Docker</span>
              <span className="tech-item">AWS</span>
            </div>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Let's Connect</h3>
            <p className="connect-text">
              I'm always interested in hearing about new opportunities and interesting projects.
            </p>
            <a 
              href="mailto:buvaneshkumar293@gmail.com" 
              className="connect-btn"
            >
              <Mail className="connect-icon" />
              Get In Touch
            </a>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                © {currentYear} Buvanesh. Made with{' '}
                <Heart className="heart-icon" />{' '}
                and lots of{' '}
                <Coffee className="coffee-icon" />
              </p>
            </div>
            <button 
              className="scroll-top"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp className="scroll-icon" />
            </button>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--bg-dark);
          color: white;
          padding: 4rem 0 2rem;
          margin-top: 4rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-section h3 {
          color: white;
          margin-bottom: 1.5rem;
          font-size: 1.25rem;
        }

        .footer-brand {
          max-width: 300px;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .brand-icon {
          width: 2rem;
          height: 2rem;
          color: var(--accent-color);
        }

        .brand-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
        }

        .brand-description {
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .footer-social {
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: var(--primary-color);
          transform: translateY(-2px);
        }

        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-link {
          background: none;
          border: none;
          color: #94a3b8;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0.25rem 0;
          font-size: 1rem;
        }

        .footer-link:hover {
          color: var(--accent-color);
        }

        .tech-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .tech-item {
          color: #94a3b8;
          padding: 0.25rem 0;
          transition: color 0.3s ease;
        }

        .tech-item:hover {
          color: var(--accent-color);
        }

        .connect-text {
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .connect-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: var(--primary-color);
          color: white;
          text-decoration: none;
          border-radius: 0.5rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .connect-btn:hover {
          background: var(--secondary-color);
          transform: translateY(-2px);
        }

        .connect-icon {
          width: 1rem;
          height: 1rem;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .copyright {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #94a3b8;
        }

        .copyright p {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          margin: 0;
        }

        .heart-icon {
          width: 1rem;
          height: 1rem;
          color: #ef4444;
          animation: heartbeat 2s ease-in-out infinite;
        }

        .coffee-icon {
          width: 1rem;
          height: 1rem;
          color: #8b5cf6;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .scroll-top {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          background: var(--primary-color);
          border: none;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .scroll-top:hover {
          background: var(--secondary-color);
          transform: translateY(-2px);
        }

        .scroll-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .footer-brand {
            max-width: none;
          }

          .footer-nav {
            align-items: center;
          }

          .tech-list {
            align-items: center;
          }

          .footer-bottom-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .copyright p {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;