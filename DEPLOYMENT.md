# Deploying Your Portfolio to GitHub Pages

Follow these steps to deploy your portfolio website to GitHub Pages:

1. First, create a new repository on GitHub.

2. Initialize git and push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repository-url
git push -u origin main
```

3. Build your portfolio website:
```bash
npm run build
```
This will create a `dist` folder with your built website.

4. Create a new branch called `gh-pages`:
```bash
git checkout -b gh-pages
```

5. Move the contents of the `dist` folder to the root:
```bash
mv dist/* .
rm -rf dist
```

6. Commit and push the gh-pages branch:
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

7. Configure GitHub Pages:
- Go to your repository settings on GitHub
- Navigate to the "Pages" section
- Under "Source", select "Deploy from a branch"
- Select the "gh-pages" branch
- Click "Save"

Your portfolio will be available at: `https://your-username.github.io/repository-name`

## Updating Your Portfolio

Whenever you want to update your portfolio:
1. Make your changes in the main branch
2. Build the project: `npm run build`
3. Switch to gh-pages branch: `git checkout gh-pages`
4. Copy the new build files and push
5. Switch back to main: `git checkout main`

## Important Notes
- Make sure your repository is public for GitHub Pages to work with a free account
- It may take a few minutes for changes to appear after pushing to gh-pages
- Keep your main branch as your development branch
