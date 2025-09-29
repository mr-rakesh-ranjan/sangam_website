# Setup Guide - Sangam Pan Palace & Hardware Website

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The website will open at `http://localhost:3000`

## Important: Update Contact Information

Before deploying, update the following placeholders with actual information:

### 1. Phone Number
Replace `+916209545540` in these files:
- `src/components/Contact.jsx` (3 locations)
- `src/components/FloatingButtons.jsx` (2 locations)
- `src/components/Footer.jsx` (1 location)

### 2. WhatsApp Number
Replace `916203545540` in:
- `src/components/Contact.jsx`
- `src/components/FloatingButtons.jsx`

Format: `91` followed by 10-digit mobile number (no spaces or special characters)

### 3. Email Address
Update in `src/components/Contact.jsx`:
- Current: `sangampanpalace@gmail.com`
- Replace with your actual email

### 4. Google Maps Location
In `src/components/Contact.jsx`, update the iframe `src` URL:
1. Go to [Google Maps](https://maps.google.com)
2. Search for your exact shop location
3. Click "Share" → "Embed a map"
4. Copy the iframe URL
5. Replace the existing URL in the code

### 5. Social Media Links
Update in `src/components/Footer.jsx`:
- Facebook link
- Instagram link
- Twitter link

## Adding Real Photos

### Gallery Images
1. Create folder: `public/images/gallery/`
2. Add your shop photos (recommended: 6 images, 800x800px)
3. Update `src/components/Gallery.jsx`:

```jsx
// Replace the icon-based gallery with:
const galleryItems = [
  { src: '/images/gallery/shop-front.jpg', title: 'Our Store Front' },
  { src: '/images/gallery/essentials.jpg', title: 'Daily Essentials' },
  // ... add more images
]
```

### About Section Image
1. Add shop photo to `public/images/about.jpg`
2. Update `src/components/About.jsx` to use the image

## Customization

### Colors
Edit `tailwind.config.js`:
- **Primary (Green)**: Daily essentials theme
- **Secondary (Blue)**: Hardware theme
- **Rustic (Brown)**: Local village touch

### Business Hours
Update in `src/components/Contact.jsx` and `src/components/Hero.jsx`:
- Current: "7 AM - 9 PM Daily"

### Store Name/Tagline
Update in:
- `index.html` (title and meta description)
- `src/components/Navbar.jsx`
- `src/components/Hero.jsx`

## Deployment Options

### Option 1: Netlify (Recommended - Free)
1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop the `dist` folder after running `npm run build`
3. Your site will be live in seconds!

### Option 2: Vercel (Free)
1. Create account at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel will auto-deploy

### Option 3: GitHub Pages (Free)
1. Push code to GitHub
2. Enable GitHub Pages in repository settings
3. Set build directory to `dist`

## Build for Production

```bash
npm run build
```

This creates optimized files in the `dist` folder ready for deployment.

## Testing Checklist

Before going live:
- [ ] All phone numbers updated
- [ ] WhatsApp link working
- [ ] Email address correct
- [ ] Google Maps showing correct location
- [ ] Social media links working
- [ ] Test on mobile device
- [ ] Test all navigation links
- [ ] Test floating buttons
- [ ] Check all sections display correctly

## SEO Tips

1. **Google My Business**: Create a listing for your shop
2. **Keywords**: The site already includes "Kartahan, Vaishali, Bihar" throughout
3. **Meta Tags**: Already optimized in `index.html`
4. **Mobile-Friendly**: Fully responsive design ✓

## Support

If you need help:
1. Check the main `README.md` file
2. Review React documentation: [react.dev](https://react.dev)
3. Tailwind CSS docs: [tailwindcss.com](https://tailwindcss.com)

## Common Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

**Made with ❤️ for Sangam Pan Palace & Hardware, Kartahan, Vaishali, Bihar**
