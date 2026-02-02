import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/skills')
      .then(res => res.json())
      .then(data => {
        setSkills(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        // Fallback data
        setSkills([
          {
            _id: 1,
            category: 'Frontend',
            skills: [
              { name: 'React', proficiency: 90 },
              { name: 'JavaScript', proficiency: 85 },
              { name: 'CSS/Tailwind', proficiency: 88 },
              { name: 'HTML', proficiency: 95 },
            ],
          },
          {
            _id: 2,
            category: 'Backend',
            skills: [
              { name: 'Node.js', proficiency: 85 },
              { name: 'Express', proficiency: 80 },
              { name: 'MongoDB', proficiency: 82 },
              { name: 'REST API', proficiency: 88 },
            ],
          },
          {
            _id: 3,
            category: 'Tools',
            skills: [
              { name: 'Git', proficiency: 90 },
              { name: 'VS Code', proficiency: 95 },
              { name: 'Figma', proficiency: 75 },
              { name: 'Docker', proficiency: 70 },
            ],
          },
        ]);
        setLoading(false);
      });
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>

        {loading ? (
          <p>Loading skills...</p>
        ) : (
          <div className="skills-grid">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup._id}
                className="skill-group"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              >
                <h3>{skillGroup.category}</h3>
                <div className="skills-list">
                  {skillGroup.skills?.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent">{skill.proficiency}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;
