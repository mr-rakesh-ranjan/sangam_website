# Sangam Pan Palace & Hardware Website

A modern, responsive website for Sangam Pan Palace & Hardware, located in Kartahan, Vaishali, Bihar. This website showcases two offline stores offering daily essentials and hardware products.

## Features

- **Responsive Design**: Mobile-first approach, works seamlessly on all devices
- **Modern UI**: Built with React and Tailwind CSS for a clean, professional look
- **SEO Optimized**: Local SEO-friendly content for better visibility
- **Interactive Components**: 
  - Smooth scrolling navigation
  - Product category tabs
  - Testimonials carousel
  - Floating WhatsApp/Call buttons
  - Scroll-to-top functionality
- **Sections**:
  - Hero section with dual CTAs
  - About Us with business highlights
  - Products (Daily Essentials & Hardware)
  - Gallery showcase
  - Customer testimonials
  - Contact with embedded map
  - Footer with social links

## Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The website will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Contact Information

Edit the following files to add your actual contact details:

1. **Phone Numbers**: Search for `+916209545540` and replace with actual number
2. **Email**: Update in `src/components/Contact.jsx`
3. **WhatsApp**: Update WhatsApp link in `src/components/FloatingButtons.jsx` and `src/components/Contact.jsx`
4. **Map Location**: Update the Google Maps embed URL in `src/components/Contact.jsx`

### Color Scheme

The website uses a green-blue-brown color palette. To customize:

- Edit `tailwind.config.js` to change the color scheme
- Primary color (green): Used for daily essentials
- Secondary color (blue): Used for hardware
- Rustic color (brown): Used for local touch

### Adding Real Images

Replace the placeholder icon-based gallery with real images:

1. Add images to `public/images/` folder
2. Update `src/components/Gallery.jsx` to use actual image URLs

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── Gallery.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── FloatingButtons.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## SEO Optimization

The website includes:
- Semantic HTML structure
- Meta descriptions with local keywords
- Location-specific content (Kartahan, Vaishali, Bihar)
- Proper heading hierarchy
- Alt text for images (when added)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Sangam Pan Palace & Hardware.

## Support

For any questions or support, please contact the store directly at Kartahan, Vaishali, Bihar.
