# SIBIN K S - Portfolio

A modern, responsive portfolio website built with React showcasing my skills, experience, and projects.

## 🚀 Features

- **Modern Design**: Clean and professional dark theme
- **Responsive**: Works perfectly on all devices
- **Interactive**: Smooth animations and hover effects
- **Contact Form**: Functional contact form for inquiries
- **Certificate Viewer**: Interactive PDF certificate display
- **Loading Animation**: Elegant loading screen
- **Smooth Scrolling**: Seamless navigation between sections

## 📋 Sections

1. **Hero**: Introduction with animated statistics
2. **About**: Personal information and background
3. **Skills**: Technical skills with tooltips
4. **Experience**: Work experience and achievements
5. **Projects**: Portfolio projects with detailed descriptions
6. **Education**: Academic background
7. **Contact**: Contact information and message form
8. **Certificates**: Interactive certificate display

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **CSS3**: Custom styling with CSS variables
- **Font Awesome**: Icons
- **HTML5**: Semantic markup

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd PORTFOLLIO
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add required assets**
   - Copy `sibin.jpg` to `src/assets/` folder
   - Copy `ccsa.pdf` to `src/assets/` folder
   - Copy `SIBIN.pdf` to `public/` folder

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open in browser**
   The app will open automatically at `http://localhost:3000`

## 🎨 Customization

### Colors
Update the CSS variables in `src/index.css`:
```css
:root {
  --primary: #00bcd4;    /* Main accent color */
  --accent: #ff9800;     /* Secondary accent */
  --bg-dark: #181a1b;    /* Dark background */
  --bg-card: #23272a;    /* Card background */
  --text-main: #fff;     /* Main text color */
  --text-muted: #b0b0b0; /* Muted text color */
}
```

### Content
- Update personal information in respective component files
- Modify skills, projects, and experience in their components
- Change contact information in `Contact.js`

### Images
- Replace `sibin.jpg` with your profile photo
- Update certificate PDFs as needed
- Add project screenshots to enhance the portfolio

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

## 📞 Contact

- **Email**: sibinks46@gmail.com
- **Phone**: +91 8590637451
- **LinkedIn**: [Sibin K S](https://linkedin.com/in/sibin-k-s)
- **Instagram**: [_sibin_k_s_](https://instagram.com/_sibin_k_s_)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ by SIBIN K S** 