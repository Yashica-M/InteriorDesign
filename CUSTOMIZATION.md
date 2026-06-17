# 🎨 Customization Guide

This guide will help you customize the portfolio to make it your own.

## 📝 Personal Information

### 1. Update SEO & Meta Information

**File:** `src/components/SEO.tsx`

```typescript
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Your Full Name',                    // ← Change this
  jobTitle: 'Your Job Title',                // ← Change this
  url: 'https://yourwebsite.com',            // ← Change this
  sameAs: [
    'https://github.com/yourusername',       // ← Change this
    'https://twitter.com/yourusername',      // ← Change this
    'https://linkedin.com/in/yourusername'   // ← Change this
  ],
  // ... update other fields
};
```

### 2. Update Hero Section

**File:** `src/sections/Hero.tsx`

```typescript
// Line 36-37: Update your title
const title = "YOUR";        // ← Change this
const title2 = "NAME";       // ← Change this

// Line 60: Update your subtitle
<motion.span>
  Your Job Title Here        // ← Change this
</motion.span>

// Line 83-85: Update your description
<p>
  Your personal description here...  // ← Change this
</p>
```

### 3. Update About Section

**File:** `src/sections/About.tsx`

```typescript
// Line 74-76: Update your bio
<p ref={textRef}>
  Your personal story and philosophy...  // ← Change this
</p>

// Line 8-11: Update your skills
const skills = [
  "Your Skill 1",           // ← Change these
  "Your Skill 2",
  "Your Skill 3",
  // ... add more
];

// Line 99-101: Update your experience
<ExperienceCard 
  role="Your Role" 
  company="Your Company" 
  period="2020 - present" 
  delay={0.1} 
/>
```

### 4. Update Statistics

**File:** `src/components/Statistics.tsx`

```typescript
const stats = [
  { value: 150, suffix: '+', label: 'Projects Completed' },  // ← Change values
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 8, suffix: '+', label: 'Years Experience' },
  { value: 15, suffix: '+', label: 'Awards Won' }
];
```

### 5. Update Projects/Gallery

**File:** `src/sections/Gallery.tsx`

```typescript
const projects = [
  {
    id: 1,
    title: "Your Project Name",              // ← Change this
    category: "Project Category",            // ← Change this
    image: "https://your-image-url.com",     // ← Change this
    size: "large"  // or "medium"
  },
  // ... add more projects
];
```

### 6. Update Contact Information

**File:** `src/sections/Contact.tsx`

```typescript
// Line 53: Update email
<a href="mailto:your@email.com">          // ← Change this
  your@email.com
</a>

// Line 58-60: Update social links
<a href="https://github.com/yourusername">     // ← Change these
<a href="https://twitter.com/yourusername">
<a href="https://linkedin.com/in/yourusername">
```

### 7. Update Footer

**File:** `src/components/Footer.tsx`

```typescript
// Line 10: Update email
{ icon: Mail, href: 'mailto:your@email.com', label: 'Email' }  // ← Change this

// Line 58-60: Update social links (same as contact)
```

## 🎨 Design Customization

### Colors

**File:** `src/styles/globals.css`

```css
:root {
  --background: #f5f5f5;    /* Light mode background */
  --surface: #ffffff;       /* Light mode surface */
  --primary: #0a0a0a;       /* Light mode text */
  --secondary: #666666;     /* Light mode secondary text */
  --accent: #2563eb;        /* Accent color (blue) */
}

.dark {
  --background: #0a0a0a;    /* Dark mode background */
  --surface: #121212;       /* Dark mode surface */
  --primary: #ffffff;       /* Dark mode text */
  --secondary: #a1a1aa;     /* Dark mode secondary text */
  --accent: #3b82f6;        /* Dark mode accent */
}
```

### Typography

**File:** `src/styles/globals.css` (Line 1)

```css
/* Change fonts by updating the Google Fonts import */
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');
```

**File:** `tailwind.config.js`

```javascript
fontFamily: {
  sans: ['YourFont', 'sans-serif'],      // ← Body font
  display: ['YourDisplay', 'sans-serif'], // ← Heading font
},
```

### Animations Speed

**File:** `src/App.tsx`

```typescript
const lenis = new Lenis({
  duration: 1.2,  // ← Scroll duration (lower = faster)
  // ...
});
```

## 📧 EmailJS Setup

1. **Sign up** at [EmailJS](https://www.emailjs.com/)
2. **Create a service** (Gmail, Outlook, etc.)
3. **Create a template** with these variables:
   - `{{user_name}}`
   - `{{user_email}}`
   - `{{message}}`
4. **Get your credentials**:
   - Service ID
   - Template ID
   - Public Key

5. **Update** `src/sections/Contact.tsx`:

```typescript
// Line 19: Uncomment and update
await emailjs.sendForm(
  'YOUR_SERVICE_ID',      // ← Your Service ID
  'YOUR_TEMPLATE_ID',     // ← Your Template ID
  formRef.current,
  'YOUR_PUBLIC_KEY'       // ← Your Public Key
);

// Line 22: Remove the demo timeout
// await new Promise(resolve => setTimeout(resolve, 1500));
```

## 🖼️ Images & Assets

### Favicon

Replace these files in `/public`:
- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png`
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`

Use [Favicon Generator](https://realfavicongenerator.net/) to create all sizes.

### Project Images

Use high-quality images (recommended: 2000x1200px or larger):
- Upload to a CDN (Cloudinary, Imgix, etc.)
- Or use Unsplash URLs
- Update URLs in `src/sections/Gallery.tsx`

### OG Image

Create a 1200x630px image for social sharing:
- Save as `/public/og-image.jpg`
- Update in `src/components/SEO.tsx`

## 🌐 Domain & Deployment

### Update URLs

**Files to update:**
1. `src/components/SEO.tsx` - Line 16
2. `public/robots.txt` - Line 4
3. `public/sitemap.xml` - All `<loc>` tags

Replace `https://yourportfolio.com` with your actual domain.

### Vercel Deployment

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically
4. Add custom domain in Vercel settings

## 🎯 Advanced Customization

### Add More Sections

Create new section in `src/sections/YourSection.tsx`:

```typescript
export const YourSection = () => {
  return (
    <section id="your-section" className="py-32 px-6">
      {/* Your content */}
    </section>
  );
};
```

Add to `src/App.tsx`:

```typescript
import { YourSection } from './sections/YourSection';

// In return:
<YourSection />
```

### Modify Particles

**File:** `src/components/Particles.tsx`

```typescript
const particleCount = 50;  // ← Number of particles (line 34)

// Line 73: Change particle color
ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
//                    ^^^^^^^^^^^^ RGB values
```

### Custom Cursor

**File:** `src/components/CustomCursor.tsx`

```typescript
// Line 40: Cursor size
className="fixed top-0 left-0 w-4 h-4"  // ← Change w-4 h-4

// Line 44: Hover scale
scale: isHovered ? 3 : 1,  // ← Change scale value
```

## 📱 Responsive Breakpoints

Tailwind breakpoints used:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px

Adjust in components as needed.

## 🔧 Performance Tuning

### Reduce Animations

If performance is slow:
1. Reduce particle count (line 34 in `Particles.tsx`)
2. Increase animation durations
3. Disable custom cursor on mobile

### Image Optimization

1. Use WebP format
2. Implement lazy loading (already done)
3. Use responsive images with `srcset`

## 💡 Tips

- Test on multiple devices
- Check accessibility with Lighthouse
- Validate HTML and CSS
- Test contact form thoroughly
- Update meta descriptions for SEO
- Add Google Analytics if needed

---

Need help? Check the main README.md or open an issue!
