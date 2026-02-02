# Getting Started with Portfolio Website

## Quick Start Guide

### 1. Install Dependencies

**Backend:**
```bash
cd server
npm install
```

**Frontend:**
```bash
cd client
npm install
```

### 2. Setup MongoDB

- **Option A: Local MongoDB**
  - Install [MongoDB Community Edition](https://docs.mongodb.com/manual/installation/)
  - Ensure MongoDB is running on your system

- **Option B: MongoDB Atlas (Cloud)**
  - Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
  - Create a cluster and get connection string
  - Update `.env` with connection string

### 3. Configure Environment Variables

Create `.env` file in server folder:
```
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
NODE_ENV=development
JWT_SECRET=dev_secret_key_change_in_production
```

### 4. Run the Application

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```
Should see: `Server running on port 5000`

**Terminal 2 - Frontend:**
```bash
cd client
npm start
```
Should open: `http://localhost:3000`

## Adding Your Content

### Add Projects
1. Go to `http://localhost:3000`
2. Use admin endpoints to add projects:
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Project",
    "description": "Project description",
    "technologies": ["React", "Node.js"],
    "liveLink": "https://example.com",
    "githubLink": "https://github.com/user/project",
    "featured": true
  }'
```

### Add Skills
```bash
curl -X POST http://localhost:5000/api/skills \
  -H "Content-Type: application/json" \
  -d '{
    "category": "Frontend",
    "skills": [
      {"name": "React", "proficiency": 90},
      {"name": "JavaScript", "proficiency": 85}
    ]
  }'
```

### Update About Section
```bash
curl -X PATCH http://localhost:5000/api/about \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Your Name",
    "title": "Full Stack Developer",
    "bio": "Your bio here",
    "social": {
      "github": "https://github.com/yourname",
      "linkedin": "https://linkedin.com/in/yourname",
      "email": "your@email.com"
    }
  }'
```

## Customization Checklist

- [ ] Update your name in components
- [ ] Add your social media links
- [ ] Upload your profile image
- [ ] Add your projects
- [ ] Update skills section
- [ ] Customize colors in global.css
- [ ] Update hero section text
- [ ] Configure contact email
- [ ] Add blog posts
- [ ] Optimize for SEO

## Troubleshooting

**MongoDB Connection Error**
- Check if MongoDB is running
- Verify connection string in .env
- Check username/password if using Atlas

**CORS Error**
- Backend CORS is enabled
- Check if frontend proxy is configured (package.json)
- Verify backend is running on port 5000

**Port Already in Use**
- Change PORT in .env (backend)
- Change port in package.json (frontend)

## Performance Optimization

1. **Images**: Compress before uploading
2. **Animations**: Reduce on mobile devices
3. **Build**: `npm run build` for production
4. **Assets**: Use CDN for static files

## Next Steps

1. ✅ Add your personal content
2. ✅ Customize styling
3. ✅ Add projects and skills
4. ✅ Test all features
5. ✅ Deploy to production

## Useful Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Manual](https://docs.mongodb.com/manual)
- [Framer Motion](https://www.framer.com/motion)
- [Tailwind CSS](https://tailwindcss.com)

Happy building! 🚀
