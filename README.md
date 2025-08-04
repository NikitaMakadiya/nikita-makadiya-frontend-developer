# ThemeApp - Multi-Theme React Application

A modern React application built with Vite that demonstrates dynamic theme switching with three distinct visual themes: Minimalist, Dark, and Colorful. The app features a product catalog with different layout views based on the selected theme.

## 🚀 Features

- **Dynamic Theme Switching**: Three distinct themes (Minimalist, Dark, Colorful)
- **Responsive Design**: Adapts to different screen sizes
- **Product Catalog**: Displays products from FakeStore API
- **Theme-Based Layouts**: Different product layouts based on selected theme
- **Persistent Theme**: Theme preference saved in localStorage
- **Modern UI**: Built with Tailwind CSS for rapid development and React Icons

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **React Icons** - Icon library
- **ESLint** - Code linting

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Themeapp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

### 6. Lint Code

```bash
npm run lint
```

## 📁 Project Structure

```
Themeapp/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── logo.png
│   └── site.webmanifest
├── src/
│   ├── component/         # Reusable UI components
│   │   ├── HomeGridView.jsx
│   │   ├── HomeListView.jsx
│   │   ├── Navbar.jsx
│   │   └── Sidebar.jsx
│   ├── context/          # React Context for state management
│   │   └── ThemeContext.jsx
│   ├── pages/            # Page components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Home.jsx
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles and theme definitions
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── eslint.config.js      # ESLint configuration
```

## 🎨 Theme System

The application features a sophisticated theme system with three distinct themes:

### 1. Minimalist Theme
- Clean, professional design
- White background with subtle borders
- Blue accent colors
- Sans-serif typography

### 2. Dark Theme
- Dark background with high contrast
- Blue navigation bar
- Orange accent colors
- Serif typography with bold weights

### 3. Colorful Theme
- Light gray background
- Coral navigation bar
- Vibrant accent colors
- Pacifico font family

## 🔧 Key Components

### ThemeContext (`src/context/ThemeContext.jsx`)
- Manages theme state across the application
- Provides theme switching functionality
- Persists theme preference in localStorage
- Applies theme classes to document root

### Navigation Components
- **Navbar** (`src/component/Navbar.jsx`): Horizontal navigation for minimalist theme
- **Sidebar** (`src/component/Sidebar.jsx`): Vertical navigation for dark theme

### Product Display Components
- **HomeListView** (`src/component/HomeListView.jsx`): List layout for minimalist/dark themes
- **HomeGridView** (`src/component/HomeGridView.jsx`): Grid layout for colorful theme

### Pages
- **Home** (`src/pages/Home.jsx`): Main product catalog page
- **About** (`src/pages/About.jsx`): About page
- **Contact** (`src/pages/Contact.jsx`): Contact page

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 API Integration

The application fetches product data from the [FakeStore API](https://fakestoreapi.com/) to display a product catalog. The API call is made in the `Home` component using the `useEffect` hook.

## 🎨 Styling with Tailwind CSS

The application is built using **Tailwind CSS** for utility-first styling, providing a modern and efficient approach to styling:

### Tailwind CSS Implementation
- **Utility-First Approach**: Rapid UI development using utility classes
- **Responsive Design**: Built-in responsive utilities for mobile-first design
- **Custom Theme Integration**: Tailwind classes combined with custom CSS for theme-specific styling
- **Component-Based Styling**: Consistent styling patterns across components

### Theme-Specific Styling
Theme styles are defined in `src/index.css` with CSS classes for each theme variant:
- **Minimalist Theme**: Clean, professional styling with subtle borders and blue accents
- **Dark Theme**: High contrast design with dark backgrounds and orange accents  
- **Colorful Theme**: Vibrant styling with coral navigation and Pacifico font

### Tailwind CSS Classes Used
The application leverages Tailwind's utility classes for:
- **Layout**: `flex`, `grid`, `container`, `max-w-*`, `mx-auto`
- **Spacing**: `p-*`, `m-*`, `gap-*`, `space-*`
- **Typography**: `text-*`, `font-*`, `leading-*`
- **Colors**: `bg-*`, `text-*`, `border-*`
- **Responsive**: `md:`, `lg:`, `xl:` prefixes
- **Interactive**: `hover:`, `focus:` states

## 🔄 State Management

Theme state is managed using React Context API through `ThemeContext`, providing:
- Theme selection and switching
- Persistent theme storage
- Global theme access across components

## 📱 Responsive Design

The application is fully responsive and adapts to different screen sizes:
- Mobile-first approach
- Flexible layouts for different themes
- Responsive navigation components

## 🚀 Deployment

The application can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3

Build the project using `npm run build` and deploy the `dist` folder.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
