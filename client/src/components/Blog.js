import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Blog.css';

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blog')
      .then(res => res.json())
      .then(data => {
        setBlogs(data.slice(0, 3));
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setBlogs([
          {
            _id: 1,
            title: 'Getting Started with React Hooks',
            excerpt: 'Learn how to use React Hooks to manage state and side effects in your components.',
            tags: ['React', 'JavaScript'],
            views: 234,
          },
          {
            _id: 2,
            title: 'Building Scalable Node.js Applications',
            excerpt: 'Best practices for building scalable backend applications with Node.js and Express.',
            tags: ['Node.js', 'Backend'],
            views: 156,
          },
          {
            _id: 3,
            title: 'MongoDB Tips & Tricks',
            excerpt: 'Advanced MongoDB techniques to optimize your database queries.',
            tags: ['MongoDB', 'Database'],
            views: 89,
          },
        ]);
        setLoading(false);
      });
  }, []);

  return (
    <section className="blog" id="blog">
      <div className="container">
        <h2 className="section-title">Latest Articles</h2>

        {loading ? (
          <p>Loading blog posts...</p>
        ) : (
          <div className="blog-grid">
            {blogs.map((post, index) => (
              <motion.article
                key={post._id}
                className="blog-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="blog-header">
                  <h3>{post.title}</h3>
                </div>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-footer">
                  <div className="blog-tags">
                    {post.tags?.map((tag, i) => (
                      <span key={i} className="blog-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="blog-views">{post.views} views</span>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Blog;
