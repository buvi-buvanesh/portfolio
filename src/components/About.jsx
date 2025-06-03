import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Award, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Problem Solver",
      description: "I love tackling complex challenges and finding elegant solutions through clean, efficient code."
    },
    {
      icon: Award,
      title: "Quality Focused",
      description: "Committed to writing maintainable, scalable code following best practices and design patterns."
    },
    {
      icon: Heart,
      title: "Passionate Learner",
      description: "Continuously learning new technologies and staying updated with the latest industry trends."
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-highlights"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="highlight-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="highlight-icon">
                  <highlight.icon />
                </div>
                <h4>{highlight.title}</h4>
                <p>{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="about-blogs"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Technical Writing</h3>
          <p>
            I enjoy sharing my knowledge and experiences through technical writing. 
            I've published articles on Medium covering various aspects of software development:
          </p>
          <div className="blog-links">
            <a 
              href="https://medium.com/@buvaneshkumar2903/automating-ci-cd-with-jenkins-webhooks-and-docker-image-generation-in-springboot-1280ae60d795" 
              target="_blank" 
              rel="noopener noreferrer"
              className="blog-link"
            >
              <div className="blog-icon">📝</div>
              <div className="blog-content">
                <h4>Automating CI/CD with Jenkins, Webhooks, and Docker</h4>
                <p>Complete CI/CD pipeline setup using Jenkins integrated with GitHub webhooks and Docker</p>
              </div>
            </a>
            <a 
              href="https://medium.com/@buvaneshkumar2903/creating-a-simple-custom-annotation-in-spring-boot-c409a2446ddb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="blog-link"
            >
              <div className="blog-icon">🔧</div>
              <div className="blog-content">
                <h4>Creating Custom Annotations in Spring Boot</h4>
                <p>Learn how to create and implement custom annotations in Spring Boot applications</p>
              </div>
            </a>
          </div>
          <a 
            href="https://medium.com/@buvaneshkumar2903" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View All Articles
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .about-content {
          display: flex;
          justify-content: center;
          margin-top: 3rem;
        }

        .about-intro {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .intro-icon {
          width: 2rem;
          height: 2rem;
          color: var(--primary-color);
        }

        .about-intro h3 {
          color: var(--primary-color);
          margin: 0;
        }

        .about-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .about-skills-summary {
          margin: 2rem auto;
          padding: 2rem;
          background: var(--bg-secondary);
          border-radius: 1rem;
          border-left: 4px solid var(--primary-color);
          text-align: center;
          max-width: 800px;
        }

        .about-skills-summary h4 {
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }

        .skill-tag {
          background: var(--primary-color);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .about-highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .highlight-card {
          background: var(--bg-primary);
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .highlight-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-2px);
        }

        .highlight-icon {
          width: 3rem;
          height: 3rem;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          color: white;
        }

        .highlight-card h4 {
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .highlight-card p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin: 0;
        }

        .about-quote {
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          color: white;
          padding: 2rem;
          border-radius: 1rem;
          text-align: center;
          margin-top: 1rem;
        }

        .about-quote blockquote {
          font-size: 1.1rem;
          font-style: italic;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .about-quote cite {
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .about-blogs {
          margin-top: 3rem;
          text-align: center;
        }

        .about-blogs h3 {
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .about-blogs > p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .blog-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .blog-link {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          text-align: left;
        }

        .blog-link:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-2px);
          border-color: var(--primary-color);
        }

        .blog-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .blog-content h4 {
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }

        .blog-content p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin: 0;
          line-height: 1.5;
        }

        .btn-outline {
          background: transparent;
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }

        .btn-outline:hover {
          background: var(--primary-color);
          color: white;
        }

        @media (max-width: 768px) {
          .about-highlights {
            grid-template-columns: 1fr;
          }

          .about-skills-summary {
            margin: 1rem;
            padding: 1.5rem;
          }

          .skills-tags {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default About;