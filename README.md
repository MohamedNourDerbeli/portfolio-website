# Mohamed Derbeli - Personal Portfolio Website

A modern, dark-themed personal portfolio website showcasing cybersecurity expertise and software development skills.

## 🚀 Features

- **Modern Dark Cybersecurity Theme**: Professional design with Matrix-inspired aesthetics
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth animations, hover effects, and typing animations
- **Skills Visualization**: Progress bars and skill categorization
- **Project Showcase**: Featured projects with technology stacks and GitHub links
- **Contact Form**: Professional contact section with social media integration
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Technologies Used

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, Custom CSS animations
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 📁 Project Structure

```
mohamed-portfolio/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── hero-bg.jpg
│   │       ├── matrix-bg.jpg
│   │       └── security-icon.jpg
│   ├── components/
│   │   └── ui/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── dist/                 # Production build
├── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MohamedNourDerbeli/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Start the development server:
```bash
pnpm run dev
# or
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
pnpm run build
# or
npm run build
```

The production files will be generated in the `dist/` directory.

## 🌐 Deployment

### GitHub Pages

1. Build the project:
```bash
pnpm run build
```

2. Deploy the `dist/` folder to GitHub Pages:
   - Push the `dist/` folder contents to the `gh-pages` branch
   - Enable GitHub Pages in repository settings
   - Set source to `gh-pages` branch

### Alternative Deployment Options

- **Netlify**: Drag and drop the `dist/` folder
- **Vercel**: Connect your GitHub repository
- **Surge**: `surge dist/`

## 📝 Customization

### Personal Information
Update the following in `src/App.jsx`:
- Name and title
- Contact information
- Skills and experience
- Project details
- Social media links

### Styling
- Main styles: `src/App.css`
- Color scheme: CSS custom properties in `:root`
- Animations: Custom CSS classes

### Images
Replace images in `src/assets/images/` with your own:
- `hero-bg.jpg`: Hero section background
- `matrix-bg.jpg`: Matrix-style background
- `security-icon.jpg`: Security-related icons

## 🎨 Design Features

### Color Palette
- **Primary**: #00ff41 (Matrix Green)
- **Secondary**: #1a1a1a (Dark Gray)
- **Accent**: #ff6b35 (Cyber Orange)
- **Background**: #0a0a0a (Deep Black)
- **Text**: #ffffff (White)

### Animations
- Typing animation for hero text
- Smooth scroll navigation
- Hover effects with glow
- Progress bar animations
- Gradient button effects

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Mohamed Derbeli**
- Email: derbelnourmohamed@gmail.com
- LinkedIn: [md-nr-db](https://www.linkedin.com/in/md-nr-db)
- GitHub: [MohamedNourDerbeli](https://github.com/MohamedNourDerbeli)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/MohamedNourDerbeli/portfolio-website/issues).

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

Built with ❤️ and passion for cybersecurity by Mohamed Derbeli

