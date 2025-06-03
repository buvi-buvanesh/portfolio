import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Junior Developer",
      company: "HEPL - A Cavinkare Group",
      location: "Chennai, India",
      period: "2023 - Present",
      type: "Full-time",
      description: "Contributing as a Junior Developer in designing and developing scalable web applications and microservices. Working across the complete SDLC and collaborating in fast-paced environments to deliver robust solutions.",
      achievements: [
        "Developed scalable web applications using Java 8 and Spring Boot",
        "Implemented microservices architecture for improved system scalability",
        "Collaborated in fast-paced environments to deliver robust solutions",
        "Worked across complete Software Development Life Cycle (SDLC)",
        "Built performant, maintainable, and secure systems"
      ],
      technologies: ["Java 8", "Spring Boot", "Microservices", "React", "MongoDB", "MySQL", "Docker", "RabbitMQ", "Jenkins"]
    },
    {
      title: "Associate Consultant",
      company: "Bassure Solutions",
      location: "Chennai, India",
      period: "2022 - 2023",
      type: "Full-time",
      description: "Served as an Associate Consultant working on diverse tech stacks and business domains. Gained extensive experience in full-stack development and various technologies.",
      achievements: [
        "Worked on diverse tech stacks and business domains",
        "Developed full-stack applications using modern technologies",
        "Collaborated with cross-functional teams on multiple projects",
        "Implemented best practices in software development",
        "Contributed to system architecture and design decisions"
      ],
      technologies: ["Java", "Spring Boot", "React", "MongoDB", "MySQL", "Microservices"]
    },
    {
      title: "Intern",
      company: "Bassure Solutions",
      location: "Chennai, India",
      period: "2022",
      type: "Internship",
      description: "Started my professional journey as an intern, gaining hands-on experience with various technologies and business domains. Learned industry best practices and development methodologies.",
      achievements: [
        "Gained hands-on experience with various tech stacks",
        "Learned industry best practices and development methodologies",
        "Contributed to real-world projects and applications",
        "Developed foundational skills in full-stack development",
        "Participated in code reviews and team collaboration"
      ],
      technologies: ["Java", "Spring Boot", "React", "MongoDB", "Git"]
    }
  ];

  const certifications = [
    {
      name: "Oracle Certified Professional Java SE",
      issuer: "Oracle",
      year: "2023",
      icon: Award
    },
    {
      name: "AWS Certified Developer Associate",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: Award
    },
    {
      name: "Spring Professional Certification",
      issuer: "VMware",
      year: "2022",
      icon: Award
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>

        <div className="experience-content">
          <motion.div
            className="experience-timeline"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-marker">
                    <Briefcase className="timeline-icon" />
                  </div>
                  <div className="timeline-content">
                    <div className="experience-header">
                      <h3>{exp.title}</h3>
                      <span className="experience-type">{exp.type}</span>
                    </div>
                    <div className="experience-meta">
                      <div className="meta-item">
                        <Briefcase className="meta-icon" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="meta-item">
                        <MapPin className="meta-icon" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="meta-item">
                        <Calendar className="meta-icon" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="experience-description">{exp.description}</p>
                    
                    <div className="achievements">
                      <h4>Key Achievements:</h4>
                      <ul>
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="technologies">
                      <h4>Technologies Used:</h4>
                      <div className="tech-tags">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="experience-sidebar"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="sidebar-section">
              <h3>
                <TrendingUp className="section-icon" />
                Career Growth
              </h3>
              <div className="growth-stats">
                <div className="stat">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">7+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Technologies Mastered</span>
                </div>
              </div>
            </div>

            <div className="sidebar-section">
              <h3>
                <Award className="section-icon" />
                Certifications
              </h3>
              <div className="certifications">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="certification-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <cert.icon className="cert-icon" />
                    <div className="cert-details">
                      <h4>{cert.name}</h4>
                      <p>{cert.issuer} • {cert.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h3>Core Strengths</h3>
              <div className="strengths">
                <div className="strength-item">Problem Solving</div>
                <div className="strength-item">Team Leadership</div>
                <div className="strength-item">Code Quality</div>
                <div className="strength-item">Performance Optimization</div>
                <div className="strength-item">Agile Development</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .experience-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
        }

        .timeline {
          position: relative;
          padding-left: 2rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 1rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--primary-color), var(--accent-color));
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
        }

        .timeline-marker {
          position: absolute;
          left: -2rem;
          top: 0;
          width: 3rem;
          height: 3rem;
          background: var(--primary-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 4px var(--bg-primary);
        }

        .timeline-icon {
          width: 1.2rem;
          height: 1.2rem;
          color: white;
        }

        .timeline-content {
          background: var(--bg-primary);
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border-color);
          margin-left: 1rem;
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .experience-header h3 {
          color: var(--text-primary);
          margin: 0;
        }

        .experience-type {
          background: var(--primary-color);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .experience-meta {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .meta-icon {
          width: 1rem;
          height: 1rem;
        }

        .experience-description {
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .achievements h4,
        .technologies h4 {
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          font-size: 1rem;
        }

        .achievements ul {
          list-style: none;
          padding: 0;
          margin-bottom: 1.5rem;
        }

        .achievements li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
        }

        .achievements li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary-color);
          font-weight: bold;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background: var(--bg-secondary);
          color: var(--text-primary);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.8rem;
          border: 1px solid var(--border-color);
        }

        .experience-sidebar {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .sidebar-section {
          background: var(--bg-primary);
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border-color);
        }

        .sidebar-section h3 {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .section-icon {
          width: 1.5rem;
          height: 1.5rem;
          color: var(--primary-color);
        }

        .growth-stats {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .stat {
          text-align: center;
          padding: 1rem;
          background: var(--bg-secondary);
          border-radius: 0.5rem;
        }

        .stat-number {
          display: block;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-color);
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .certifications {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .certification-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: var(--bg-secondary);
          border-radius: 0.5rem;
        }

        .cert-icon {
          width: 2rem;
          height: 2rem;
          color: var(--accent-color);
        }

        .cert-details h4 {
          margin: 0 0 0.25rem 0;
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .cert-details p {
          margin: 0;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .strengths {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .strength-item {
          padding: 0.75rem;
          background: var(--bg-secondary);
          border-radius: 0.5rem;
          text-align: center;
          font-weight: 500;
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .experience-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .timeline {
            padding-left: 1rem;
          }

          .timeline::before {
            left: 0.5rem;
          }

          .timeline-marker {
            left: -1.5rem;
            width: 2rem;
            height: 2rem;
          }

          .timeline-content {
            margin-left: 0.5rem;
          }

          .experience-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .experience-meta {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;