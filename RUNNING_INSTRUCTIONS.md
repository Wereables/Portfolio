# Running Your Portfolio Website

## Quick Start (On Your Local Machine)

Since the sandbox environment has memory limitations, here's how to run your portfolio on your own computer:

### Prerequisites

1. **Node.js** - Download and install from [https://nodejs.org](https://nodejs.org)
   - Recommended: Node.js 18.17 or later (LTS version)
   - This includes npm (Node Package Manager)

2. **Git** - Download and install from [https://git-scm.com](https://git-scm.com)
   - Used to clone your repository

### Step 1: Clone Your Repository

Open a terminal (Command Prompt on Windows, Terminal on Mac/Linux) and run:

```bash
# Navigate to where you want your project
git clone https://github.com/Wereables/Portfolio.git
cd Portfolio
```

### Step 2: Install Dependencies

```bash
# This will install all required packages
npm install
```

**If you get memory errors**, try:
```bash
# Increase Node.js memory limit
NODE_OPTIONS="--max-old-space-size=4096" npm install
```

Or install packages one at a time:
```bash
npm install next react react-dom
npm install react-markdown gray-matter
npm install --save-dev @types/node @types/react @types/react-dom
npm install --save-dev typescript tailwindcss postcss autoprefixer
npm install --save-dev eslint eslint-config-next
```

### Step 3: Run the Development Server

```bash
npm run dev
```

You should see output like:
```
  ✓ Ready in 2.5s
  ✓ Compiled / in 500ms (298 modules)
  
  █ Local:   http://localhost:3000
  █ Network: http://192.168.x.x:3000
```

### Step 4: Open Your Browser

Open [http://localhost:3000](http://localhost:3000) in your web browser.

You should see your portfolio website running!

---

## Alternative: Using Yarn

If npm has issues, you can use Yarn instead:

1. Install Yarn globally:
   ```bash
   npm install -g yarn
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Run the development server:
   ```bash
   yarn dev
   ```

---

## Troubleshooting

### Common Issues and Solutions

#### 1. "npm: command not found"
**Solution**: Node.js is not installed or not in your PATH.
- Reinstall Node.js from [https://nodejs.org](https://nodejs.org)
- Make sure to check "Add to PATH" during installation
- Restart your terminal/computer

#### 2. Memory Errors During Installation
**Solution**: Use the memory flag:
```bash
NODE_OPTIONS="--max-old-space-size=8192" npm install
```

Or install packages individually:
```bash
npm install next
npm install react react-dom
npm install react-markdown gray-matter
# etc.
```

#### 3. "Port 3000 is already in use"
**Solution**: Either:
- Stop the other application using port 3000
- Run on a different port:
  ```bash
  npm run dev -- --port 3001
  ```

#### 4. "Module not found: Can't resolve '...'"
**Solution**: Dependencies weren't installed properly.
```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json
# Reinstall
npm install
```

#### 5. TypeScript Errors
**Solution**: These are usually just warnings. The site should still run.
To fix them:
```bash
npm run lint
```
And address any issues shown.

#### 6. Tailwind Styles Not Working
**Solution**: Make sure you've installed all dev dependencies:
```bash
npm install --save-dev tailwindcss postcss autoprefixer
```

---

## Running in Production Mode

For a production build (optimized for deployment):

```bash
# Build the site
npm run build

# Start the production server
npm start
```

The site will be available at [http://localhost:3000](http://localhost:3000)

---

## Deploying to Vercel (Recommended)

The easiest way to deploy your portfolio:

1. Push your code to GitHub (you've already done this!)
2. Go to [https://vercel.com](https://vercel.com)
3. Sign in with your GitHub account
4. Click "New Project"
5. Import your `Wereables/Portfolio` repository
6. Vercel will automatically detect it's a Next.js project
7. Click "Deploy"

Your site will be live at a URL like `https://portfolio-yourname.vercel.app`

---

## Deploying to Netlify

1. Push your code to GitHub
2. Go to [https://netlify.com](https://netlify.com)
3. Sign in with your GitHub account
4. Click "New site from Git"
5. Select your repository
6. Set build command to: `npm run build`
7. Set publish directory to: `.next`
8. Click "Deploy site"

---

## What You Should See

When you run `npm run dev` and open [http://localhost:3000](http://localhost:3000), you should see:

1. **Home Page**: Hero section with your name, skills grid, featured projects
2. **Navigation**: Links to About, Projects, Contact pages
3. **About Page**: Your bio, experience, skills, resume download button
4. **Projects Page**: Grid of projects with filter tags
5. **Contact Page**: Contact form, your info, FAQ section

---

## Next Steps After Running

1. **Customize Content**: Edit the placeholder text in the pages
2. **Add Your Images**: Place your photos in `public/assets/images/`
3. **Add Your Resume**: Place your PDF in `public/assets/pdfs/`
4. **Add Projects**: Create markdown files in `src/content/projects/`
5. **Deploy**: Push to Vercel or Netlify

---

## Need More Help?

If you're still having trouble running the site:

1. **Check Node.js version**:
   ```bash
   node --version
   npm --version
   ```
   Should be Node.js 18+ and npm 8+

2. **Check free memory**:
   ```bash
   free -h  # Linux/Mac
   ```
   You need at least 2GB free

3. **Try on a different machine**: Some older computers may struggle with the build process

4. **Use a cloud IDE**: Try GitHub Codespaces or Gitpod for free cloud development environments

---

## Quick Test Without Installation

If you just want to see if everything is set up correctly without running locally:

1. Go to [https://vercel.com](https://vercel.com)
2. Import your repository
3. Deploy it
4. Your site will be live in minutes!

This is the fastest way to see your portfolio in action.

---

**Happy coding!** Your portfolio is ready to showcase your amazing work. 🚀
