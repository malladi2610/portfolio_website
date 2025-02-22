#!/bin/bash

# Build the project
npm run build

# Create a new branch for gh-pages if it doesn't exist
git checkout -b gh-pages

# Move the contents of the dist folder to the root
cp -r dist/* .
rm -rf dist

# Add all files
git add .

# Commit the changes
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
git push origin gh-pages

# Switch back to main branch
git checkout main

echo "Deployment complete! Your site will be available at https://[your-username].github.io/[repository-name]"
echo "Note: Replace [your-username] and [repository-name] with your actual GitHub username and repository name"
echo "It may take a few minutes for the changes to appear on GitHub Pages"
