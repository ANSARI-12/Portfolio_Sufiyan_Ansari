# Portfolio - Sufiyan Ansari

A modern, responsive portfolio website showcasing my skills, projects, and experience as a full-stack developer.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS
- **Interactive Components**: Smooth animations and transitions
- **Project Showcase**: Featured projects with live demos and GitHub links
- **Contact Form**: Integrated contact form with email functionality
- **Dark/Light Theme**: Theme switching capability

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Icons**: Lucide React, FontAwesome
- **Forms**: React Hook Form, Zod validation
- **Email**: EmailJS for contact form
- **Deployment**: Lovable platform

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── Hero.tsx       # Hero section
│   │   ├── About.tsx      # About section
│   │   ├── Projects.tsx   # Projects carousel
│   │   ├── Experience.tsx # Experience section
│   │   ├── Skills.tsx     # Skills section
│   │   ├── Contact.tsx    # Contact form
│   │   └── Footer.tsx     # Footer
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   └── assets/            # Images and media
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── README.md
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ANSARI-12/Portfolio_Sufiyan_Ansari.git
cd Portfolio_Sufiyan_Ansari
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser.

## 📦 Build for Production

```bash
npm run build
```

## 🎯 Key Sections

### Hero Section
- Professional introduction with animated text
- Call-to-action buttons for contact and resume download

### About Section
- Personal background and career summary
- Key achievements and interests

### Projects Section
- Interactive carousel showcasing featured projects
- Live demo links and GitHub repositories
- Technology stack badges

### Experience Section
- Professional work experience timeline
- Key responsibilities and achievements

### Skills Section
- Technical skills categorized by type
- Proficiency levels and tools

### Contact Section
- Contact form with validation
- Social media links
- Direct email and phone contact

## 🔧 Customization

### Adding New Projects
Edit `src/components/Projects.tsx` and add new project objects to the `projects` array.

### Updating Personal Information
Modify the relevant sections in the component files:
- `src/components/Hero.tsx` - Hero content
- `src/components/About.tsx` - About content
- `src/components/Experience.tsx` - Experience details
- `src/components/Skills.tsx` - Skills and technologies

### Styling Changes
- Global styles: `src/index.css`
- Component styles: Inline with Tailwind classes
- Theme colors: `tailwind.config.ts`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

The project is deployed on **Vercel** and **Lovable** platforms.

### Live Demo
🌐 **Vercel Deployment**: https://portfolio-o2ksc2kqh-sufiyan-ansaris-projects.vercel.app

### Deployment Options

#### Vercel (Recommended)
- **URL**: https://portfolio-o2ksc2kqh-sufiyan-ansaris-projects.vercel.app
- **Features**: Automatic deployments from GitHub, fast performance, global CDN
- **Setup**: Connected to GitHub repository for automatic deployments

#### Lovable
- **URL**: https://lovable.dev/projects/73a45f84-1285-4868-8897-89b9f545366b
- **Features**: Easy editing interface, instant previews

### Deploy Updates
1. Push changes to the main branch on GitHub
2. Vercel automatically deploys the updates
3. Changes are reflected in both deployment URLs

## 📞 Contact

**Sufiyan Ansari**
- Email: [your-email@example.com]
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [https://github.com/ANSARI-12]

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ If you like this portfolio, give it a star on GitHub!
