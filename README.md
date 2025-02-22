# Personal Portfolio Website

A modern, responsive portfolio website built with React and designed for GitHub Pages deployment.

## Features

- Responsive design that works on all devices
- Animated sections with Framer Motion
- Modern UI components with shadcn/ui
- Contact form with validation
- Skills showcase
- Project portfolio
- Social media links

## Local Development

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```

## Deploying to GitHub Pages

1. Create a new repository on GitHub
2. Initialize git and push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repository-url
git push -u origin main
```

3. In your GitHub repository settings:
   - Go to "Pages" section
   - Set "Source" to "Deploy from a branch"
   - Select "gh-pages" branch (will be created by the deployment action)
   - Click "Save"

4. Update homepage in package.json:
   Add this line to your package.json:
   ```json
   "homepage": "https://yourusername.github.io/repository-name"
   ```

5. Add deployment scripts to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

6. Install gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

7. Deploy your site:
   ```bash
   npm run deploy
   ```

Your portfolio will be available at: https://yourusername.github.io/repository-name

## Customization

1. Update your personal information in the components:
   - Edit `Hero.tsx` for your name and title
   - Modify `About.tsx` with your bio
   - Update `Skills.tsx` with your technical skills
   - Add your projects in `Projects.tsx`
   - Customize social links in `SocialLinks.tsx`

2. Theme customization:
   - Edit `theme.json` to change the color scheme
   - Modify Tailwind classes for styling adjustments

## License

MIT License - feel free to use this template for your personal portfolio!
