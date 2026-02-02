# MERN Portfolio Website

A modern, responsive portfolio website built with the MERN stack (MongoDB, Express, React, Node.js) perfect for students showcasing their projects and skills.

## Features

✨ **Modern UI Design**
- Clean, modern, and responsive interface
- Smooth animations and transitions
- Dark/Light mode ready
- Mobile-first approach

🎯 **Key Sections**
- **Hero Section**: Eye-catching introduction
- **About**: Personal bio and introduction
- **Projects**: Showcase featured projects with technologies
- **Skills**: Display skills with proficiency levels
- **Blog**: Latest articles and insights
- **Contact**: Contact form for visitors

🚀 **Full-Stack**
- React frontend with Framer Motion animations
- Express.js backend with RESTful API
- MongoDB for data persistence
- Real-time form submissions

## Tech Stack

### Frontend
- React 18
- Framer Motion (animations)
- React Scroll (smooth scrolling)
- React Icons
- CSS3 with modern features

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled
- JWT ready

## Project Structure

```
portfolio/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── styles/        # Global styles
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .gitignore
│
├── server/                # Express backend
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── controllers/       # Route handlers
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── .gitignore
│
└── README.md
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables in `.env`:
```
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
NODE_ENV=development
JWT_SECRET=your_secret_key
```

4. Start the server:
```bash
npm run dev
```

Server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

Client will open on `http://localhost:3000`

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (admin)
- `PATCH /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Skills
- `GET /api/skills` - Get all skills
- `POST /api/skills` - Create skill category
- `PATCH /api/skills/:id` - Update skills
- `DELETE /api/skills/:id` - Delete skill

### Blog
- `GET /api/blog` - Get all blog posts
- `GET /api/blog/featured` - Get featured posts
- `GET /api/blog/slug/:slug` - Get post by slug
- `POST /api/blog` - Create blog post
- `PATCH /api/blog/:id` - Update blog post
- `DELETE /api/blog/:id` - Delete blog post

### Contact
- `GET /api/contact` - Get all messages (admin)
- `POST /api/contact` - Submit contact form
- `PATCH /api/contact/:id/read` - Mark as read
- `DELETE /api/contact/:id` - Delete message

### About
- `GET /api/about` - Get about info
- `PATCH /api/about` - Update about info

## Customization

### Colors
Edit CSS variables in [client/src/styles/global.css](client/src/styles/global.css):
```css
:root {
  --primary: #6366f1;
  --secondary: #ec4899;
  --dark: #1f2937;
  --light: #f3f4f6;
  /* ... more variables */
}
```

### Content
1. Update project data via API or directly in components
2. Modify navigation links in [Navbar.js](client/src/components/Navbar.js)
3. Update social links in [Hero.js](client/src/components/Hero.js)
4. Customize sections as needed

### Adding New Sections
1. Create component in `client/src/components/`
2. Add route to `server/routes/`
3. Create model in `server/models/` if needed
4. Import and add component to [App.js](client/src/App.js)

## Deployment

### Backend (Heroku/Railway)
```bash
cd server
npm install
git push heroku main
```

### Frontend (Vercel/Netlify)
```bash
cd client
npm run build
# Deploy build folder to Vercel or Netlify
```

## Performance Tips

- Use React.memo for non-changing components
- Implement lazy loading for images
- Optimize animations for mobile devices
- Compress images before uploading
- Use CDN for static assets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Search functionality
- [ ] Comment system for blog
- [ ] Social media integration

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

MIT License - feel free to use this template for your personal portfolio.

## Support

For support, reach out via the contact form or create an issue in the repository.

---

**Made with ❤️ by [Your Name]**

Happy coding! 🚀
