# Developer Portfolio

A modern, responsive developer portfolio built with React, TypeScript, and shadcn/ui.

## Features

- 🌓 Light and dark mode support
- 📱 Fully responsive design
- ⚡ Fast and optimized performance
- 🎨 Beautiful UI with shadcn/ui components
- 🔄 Smooth animations with Framer Motion
- 🧩 Modular and maintainable code structure

## Sections

- Header with navigation
- Hero/Introduction
- Skills & Expertise
- Projects showcase
- Contact form
- Footer with social links

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

## Customization

### Personal Information

Edit the following files to customize the portfolio with your information:

- `src/components/Hero.tsx` - Update your name, title, and introduction
- `src/components/Skills.tsx` - Update your skills and expertise
- `src/components/Projects.tsx` - Add your own projects
- `src/components/Contact.tsx` - Update your contact information and social links
- `src/components/Footer.tsx` - Update copyright information

### Styling

The project uses Tailwind CSS for styling. You can customize the theme in:

- `tailwind.config.js` - Modify theme settings
- `src/globals.css` - Modify global styles and CSS variables

## Deployment

Build the project for production:

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory, which you can deploy to any static hosting service like Vercel, Netlify, or GitHub Pages.

## Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## License

This project is open source and available under the [MIT License](LICENSE).