# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Showcase your work, skills, and project case studies with this professional template.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Fast Performance**: Optimized for speed with Next.js
- **Markdown Support**: Write case studies in Markdown
- **SEO Friendly**: Built-in SEO optimization
- **Dark Mode Ready**: System preference detection
- **Accessible**: Follows accessibility best practices

## Project Structure

```
Portfolio/
├── public/                          # Static assets
│   ├── assets/
│   │   ├── images/                 # Project images, profile photo
│   │   │   ├── projects/           # Project screenshots
│   │   │   └── profile.jpg         # Your profile photo
│   │   └── pdfs/                   # PDF files (resume)
│   │       └── resume.pdf          # Your resume
│   └── favicon.ico                 # Site favicon
│
├── references/                      # Reference materials (NOT part of the site)
│   ├── design/                     # Design files, wireframes
│   ├── documents/                  # Contracts, briefs, notes
│   ├── inspiration/                # Inspiration images, mood boards
│   └── assets/                     # Raw assets, source files
│
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── about/                  # About page
│   │   ├── contact/                # Contact page
│   │   ├── projects/               # Projects page & dynamic routes
│   │   │   └── [slug]/             # Individual project pages
│   │   ├── globals.css             # Global styles
│   │   └── layout.tsx              # Root layout
│   │
│   ├── components/                 # Reusable components
│   ├── content/                    # Markdown content
│   │   └── projects/               # Project case studies (Markdown files)
│   ├── lib/                        # Utility functions
│   │   └── projects.ts             # Project data handling
│   └── styles/                     # Additional styles
│
├── .eslintrc.json
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Wereables/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Adding Your Content

### 1. Personal Information

Edit the following files to customize your personal information:

- **`src/app/layout.tsx`**: Update metadata (title, description, your name)
- **`src/app/page.tsx`**: Update hero section with your name and tagline
- **`src/app/about/page.tsx`**: Add your bio, experience, and skills
- **`src/app/contact/page.tsx`**: Add your contact information and social links

### 2. Adding Projects

#### Option A: Create a New Project Markdown File

1. Create a new file in `src/content/projects/` with the name `[project-slug].md`
2. Use the following frontmatter template:

```markdown
---
title: "Your Project Title"
description: "Brief description of your project"
image: "/assets/images/projects/your-project.jpg"
tags: ["Web Development", "Design"]
year: "2024"
client: "Client Name" (optional)
role: "Your Role" (optional)
technologies: ["Next.js", "TypeScript", "Tailwind"] (optional)
liveUrl: "https://your-project.com" (optional)
githubUrl: "https://github.com/yourusername/your-project" (optional)
---

## Your Project Content

Write your case study in Markdown format. Use headings, lists, code blocks, etc.

### Overview

Describe your project here...

### The Challenge

What problems did you solve?

### The Solution

How did you approach the project?

### Results

What were the outcomes?
```

#### Example: `src/content/projects/my-awesome-app.md`

See `src/content/projects/sample-project.md` for a complete example.

#### Option B: Add Projects Programmatically

You can also add projects directly in the `src/lib/projects.ts` file by modifying the `getProjects()` function.

### 3. Adding Images

#### Profile Photo

1. Add your profile photo to: `public/assets/images/profile.jpg`
2. Update the Image component in `src/app/about/page.tsx`:

```tsx
<Image
  src="/assets/images/profile.jpg"
  alt="Your Name"
  fill
  className="object-cover"
  priority
/>
```

#### Project Images

1. Add project images to: `public/assets/images/projects/`
2. Reference them in your project markdown files:

```markdown
image: "/assets/images/projects/my-project-screenshot.jpg"
```

### 4. Adding Your Resume

1. Add your resume PDF to: `public/assets/pdfs/resume.pdf`
2. The download link in `src/app/about/page.tsx` already points to this location

### 5. Customizing Skills

Edit the skills array in `src/app/page.tsx` to match your actual skills:

```tsx
const skills = [
  { name: "JavaScript", icon: "🟨" },
  { name: "TypeScript", icon: "🟦" },
  // Add your skills here
];
```

## Adding Resources for Reference

The `references/` directory is **NOT** part of the website. It's a place for you to store reference materials that help you manage and create content for your portfolio.

### Recommended Structure for References

```
references/
├── design/
│   ├── wireframes/               # Wireframe files (Figma, Adobe XD, etc.)
│   ├── mockups/                  # Design mockups
│   └── color-palettes/           # Color schemes, brand guidelines
│
├── documents/
│   ├── project-briefs/           # Client briefs, project requirements
│   ├── contracts/                # Contracts, agreements
│   └── notes/                    # Meeting notes, research
│
├── inspiration/
│   ├── websites/                 # Screenshots of inspiring websites
│   ├── portfolios/               # Other portfolios you like
│   └── mood-boards/              # Mood boards for your portfolio design
│
└── assets/
    ├── raw/                      # Raw image files (PSD, AI, etc.)
    ├── icons/                    # Icon sets, SVG files
    └── fonts/                    # Custom fonts
```

### How to Use the References Folder

1. **Design Files**: Store your Figma, Adobe XD, or Sketch files here
2. **Client Materials**: Save project briefs, contracts, and requirements
3. **Inspiration**: Collect screenshots and examples of work you admire
4. **Raw Assets**: Keep original source files for images and graphics
5. **Research**: Store articles, tutorials, and resources you reference

This folder won't be deployed with your site, so it's safe to store any reference materials here.

## Customization

### Changing Colors

Edit the color palette in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#f0f9ff',
    // ... change these to your brand colors
  },
  secondary: {
    50: '#f8fafc',
    // ... change these to your brand colors
  },
}
```

### Changing Fonts

1. Update the font imports in `src/app/globals.css`
2. Update the font family in `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ['Your-Font', 'system-ui', 'sans-serif'],
  serif: ['Your-Serif', 'serif'],
  mono: ['Your-Mono', 'monospace'],
}
```

### Adding a Blog (Optional)

To add a blog section:

1. Create a `src/app/blog/` directory
2. Add a `page.tsx` for the blog listing
3. Create `src/app/blog/[slug]/page.tsx` for individual posts
4. Add markdown files to `src/content/blog/`
5. Create a `src/lib/posts.ts` similar to `projects.ts`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Vercel will automatically detect it's a Next.js project
5. Click "Deploy" and your site will be live!

### Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com) and sign in
3. Click "New site from Git"
4. Select your repository
5. Set build command to `npm run build`
6. Set publish directory to `.next`
7. Click "Deploy site"

### Other Platforms

You can deploy to any platform that supports Node.js applications:
- AWS Amplify
- Heroku
- DigitalOcean
- Render
- Railway

## SEO Optimization

The site is already optimized for SEO. To further improve it:

1. Update metadata in `src/app/layout.tsx`
2. Add proper alt text to all images
3. Use semantic HTML tags
4. Add structured data (JSON-LD) for rich snippets
5. Submit your sitemap to Google Search Console

## Performance Tips

1. **Optimize Images**: Use Next.js Image component for all images
2. **Lazy Loading**: Use the `loading="lazy"` attribute on images below the fold
3. **Code Splitting**: Next.js automatically code-splits your application
4. **Bundle Analysis**: Use `@next/bundle-analyzer` to identify large dependencies
5. **Caching**: Implement proper caching headers for static assets

## Troubleshooting

### Common Issues

1. **Images not loading**: Make sure the path is correct and the image exists in the `public` folder
2. **Markdown not rendering**: Ensure the frontmatter is valid YAML
3. **Build errors**: Run `npm run lint` to check for TypeScript errors
4. **Styling issues**: Check Tailwind classes for typos

### Debugging

- Run `npm run dev` for development mode with hot reloading
- Check the browser console for errors
- Use React Developer Tools to inspect components
- Use Redux DevTools if you add state management

## Contributing

If you'd like to contribute to this template:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing your portfolio, feel free to reach out.

---

**Happy coding!** 🚀

Your portfolio is now ready to showcase your amazing work to the world.
