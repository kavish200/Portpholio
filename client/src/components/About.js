import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/about')
      .then(res => res.json())
      .then(data => {
        setAbout(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setAbout({
          name: 'John Doe',
          title: 'Full Stack Developer',
          bio: 'I\'m a passionate student developer focused on building beautiful and functional web applications. Currently learning MERN stack and exploring modern web technologies.',
          social: {
            email: 'john@example.com',
            github: '#',
            linkedin: '#',
          },
        });
        setLoading(false);
      });
  }, []);

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        {loading ? (
          <p>Loading about...</p>
        ) : (
          <motion.div
            className="about-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="about-text">
              <h3>{about?.name}</h3>
              <p className="about-title">{about?.title}</p>
              <p className="about-bio">{about?.bio}</p>
              <button className="btn btn-primary">Download Resume</button>
            </div>
            <div className="about-image">
              <div className="image-placeholder"></div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default About;
