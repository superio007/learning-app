# Learning Platform - Frontend Application

A modern, responsive web application built with React, TypeScript, and Mantine UI. This project showcases a pixel-perfect implementation of an educational platform design with a focus on clean code architecture and best practices.

## ✨ Features

- 🎨 **Pixel-Perfect Design** - Closely matches the original Figma design specifications
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and optimized builds
- 🎯 **Type-Safe** - Written in TypeScript for better developer experience
- 🧩 **Component-Based** - Modular and reusable component architecture
- 🎭 **Modern UI** - Built entirely with Mantine UI components
- 🔄 **Code Splitting** - Lazy loading for optimal bundle size
- 🎪 **Interactive Carousel** - Smooth team member showcase with Embla Carousel

## 🚀 Tech Stack

- **Framework:** React 19.2.0
- **Language:** TypeScript 5.9.3
- **Build Tool:** Vite 7.3.1
- **UI Library:** Mantine 8.3.14
- **Routing:** React Router DOM 7.13.0
- **Forms:** React Hook Form 7.71.1
- **Icons:** Lucide React
- **Carousel:** Embla Carousel 8.6.0

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher) or **yarn** (v1.22 or higher)

## 🛠️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd learning-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📦 Available Scripts

| Command           | Description                                            |
| ----------------- | ------------------------------------------------------ |
| `npm run dev`     | Start development server with hot reload               |
| `npm run build`   | Build for production (includes TypeScript compilation) |
| `npm run preview` | Preview production build locally                       |
| `npm run lint`    | Run ESLint to check code quality                       |

## 📁 Project Structure

```
learning-app/
├── public/              # Static assets
├── src/
│   ├── app/            # App configuration (theme, App component)
│   ├── assets/         # Images and media files
│   ├── components/     # React components
│   │   ├── General/    # Shared components (Navbar, Footer)
│   │   ├── Home/       # Home page sections
│   │   └── UI/         # Reusable UI components
│   ├── layout/         # Layout components
│   ├── pages/          # Page components
│   ├── styles/         # Global styles
│   ├── types/          # TypeScript type definitions
│   └── main.tsx        # Application entry point
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── eslint.config.js    # ESLint configuration
```

## 🎨 Key Components

### Pages

- **HomePage** - Main landing page with hero, packages, team, and newsletter sections
- **NotFound** - Custom 404 error page

### Sections

- **HeroSection** - Eye-catching hero with CTA buttons
- **PackagesSection** - Showcase of educational packages
- **TeamSection** - Interactive carousel of team members
- **NewsLetter** - Email subscription form

### UI Components

- **Navbar** - Responsive navigation with mobile drawer
- **Footer** - Multi-column footer with links and contact info
- **NewsLetterForm** - Form with validation using React Hook Form
- **FallbackLoader** - Loading state for lazy-loaded components

## 🎯 Design Principles

- **Mantine-First Approach** - Minimal custom CSS, leveraging Mantine's styling system
- **Responsive Design** - Mobile-first approach with breakpoint-specific styling
- **Accessibility** - Semantic HTML and ARIA labels where needed
- **Performance** - Code splitting and lazy loading for optimal load times
- **Type Safety** - Comprehensive TypeScript types for better DX

## 🔧 Configuration

### Theme Customization

The app uses a custom Mantine theme defined in `src/app/theme.ts`:

- Primary color: Green (`#96BA7B`)
- Font family: Inter
- Custom button defaults

### ESLint

Configured with:

- React Hooks rules
- React Refresh plugin
- TypeScript ESLint
- Modern ES2020 syntax support

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Code Quality

This project follows modern React and TypeScript best practices:

- Functional components with hooks
- TypeScript for type safety
- ESLint for code quality
- Component-based architecture
- Proper error boundaries and loading states

## 🚧 Future Enhancements

- [ ] Add unit tests with Vitest
- [ ] Implement E2E tests with Playwright
- [ ] Add Storybook for component documentation
- [ ] Set up CI/CD pipeline
- [ ] Add internationalization (i18n)
- [ ] Implement dark mode support

## 📄 License

This project is private and not licensed for public use.

## 🤝 Contributing

This is a private project. If you have access and would like to contribute, please follow the standard pull request process.

---

Built with ❤️ using React, TypeScript, and Mantine UI
