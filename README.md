# The Edge Sheet Metal & Aluminum Ltd.

A premium, production-ready web platform for **The Edge Sheet Metal & Aluminum Ltd.**, featuring a professional industrial redesign, modern UI/UX enhancements, and a unified backend.

## 🚀 Live Demo & Repository
- **GitHub Repository**: [crishh007/IKEA](https://github.com/crishh007/IKEA)
- **Local Access**: `http://localhost:5000` (after setup)

## ✨ Key Features
- **Professional Redesign**: matched color palette (`#28a745` Green, `#002147` Blue) and typography of leading industry standards.
- **Glassmorphism Header**: A sticky, blurred-background navigation bar with a built-in Contact TopBar.
- **Scroll Reveal Animations**: Dynamic fade-in and slide-in effects as the user scrolls through the site.
- **6 Integrated Pages**: Home, About, Services, Projects, Contact, and a dedicated "Free Quote" page.
- **Unified Backend**: A single Node.js server serving the React frontend and all API endpoints.
- **Form Integration**: Fully functional Contact and Newsletter forms powered by Nodemailer and MongoDB.
- **SEO Optimized**: Meta tags, sitemap, and robots.txt included for search engine visibility.

## 🛠️ Tech Stack
- **Frontend**: React.js, Vite, React Router, FontAwesome.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB Atlas.
- **Email**: Nodemailer (configured for SMTP).
- **Styling**: Vanilla CSS with HSL variables and modern layout patterns.

## 📦 Project Structure
```text
edge-about/
├── client/             # React (Vite) Frontend
│   ├── src/            # Components, Hooks, Pages
│   └── dist/           # Production Build
├── server/             # Node.js/Express Backend
│   ├── models/         # Mongoose Schemas
│   ├── routes/         # API Endpoints
│   └── server.js       # Main entry point
└── README.md           # This file
```

## ⚙️ Local Setup

### 1. Prerequisites
- Node.js (v16+)
- MongoDB Atlas account (or local MongoDB)

### 2. Installation
Clone the repository and install dependencies in both the client and server:

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 3. Build the Frontend
```bash
npm run build
```

### 4. Configuration
Create a `.env` file in the `server` directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
RECIPIENT_EMAIL=admin@example.com
```

### 5. Start the Application
Run the unified server from the `server` directory:
```bash
cd server
node server.js
```
The application will be available at `http://localhost:5000`.

## 🔒 Security & Performance
- **IP Whitelisting**: Ensure your server's IP is added to the MongoDB Atlas access list.
- **Production Build**: The server is configured to serve static files from `client/dist` for maximum performance.

## 🤝 Contact
For any inquiries regarding this platform, please reach out to the project administrator.
