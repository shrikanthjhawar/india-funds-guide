# WealthGrow - Mutual Fund Distribution Website

A modern, professional website for mutual fund distribution business in India. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Professional Design**: Clean, modern interface that builds trust with potential clients
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Indian Market Focus**: Tailored for the Indian mutual fund distribution business
- **SEBI/AMFI Compliant**: Includes necessary disclaimers and regulatory information
- **Services Showcase**: Highlights key services like SIP, lump sum investments, and goal-based planning
- **Contact Forms**: Easy ways for clients to get in touch
- **SEO Optimized**: Proper meta tags and structure for search engines

## Sections

1. **Navigation**: Fixed header with smooth scrolling navigation
2. **Hero Section**: Compelling value proposition with key statistics
3. **Services**: Detailed showcase of investment services offered
4. **About**: Company information and credibility builders
5. **Contact**: Multiple ways to reach the business
6. **Footer**: Comprehensive links and legal information

## Technology Stack

- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Shadcn/ui**: High-quality UI components
- **Lucide React**: Beautiful icons
- **Vite**: Fast development and build tool

## Publishing to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `mutual-fund-website` or `wealthgrow-website`
3. Make it public (required for free GitHub Pages)

### Step 2: Connect Your Lovable Project to GitHub

1. In Lovable, click the **GitHub** button in the top right
2. Click **Connect to GitHub** and authorize the app
3. Click **Create Repository** and select your GitHub account
4. Your code will automatically sync to GitHub

### Step 3: Configure GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**

### Step 4: Create GitHub Actions Workflow

Create a file `.github/workflows/deploy.yml` in your repository:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### Step 5: Update Vite Configuration

Add this to your `vite.config.ts`:

```typescript
export default defineConfig(({ mode }) => ({
  base: '/your-repository-name/', // Replace with your actual repository name
  // ... rest of your config
}));
```

### Step 6: Deploy

1. Commit and push your changes
2. GitHub Actions will automatically build and deploy your site
3. Your website will be available at: `https://yourusername.github.io/your-repository-name/`

## Customization

### Colors and Branding
- Update colors in `src/index.css` (CSS variables)
- Modify the logo and company name in components
- Replace the hero image with your own

### Content
- Update company information in `About.tsx`
- Modify services in `Services.tsx`
- Update contact details in `Contact.tsx` and `Footer.tsx`

### Images
- Replace the hero image in `src/assets/`
- Add your company logo
- Update favicon in `public/`

## Legal Compliance

⚠️ **Important**: This is a template website. You must:

1. Update all contact information with your actual details
2. Verify SEBI registration numbers and compliance requirements
3. Review all disclaimers with a legal advisor
4. Ensure all claims and statistics are accurate
5. Add proper risk disclosure statements

## Support

For any issues or customizations, refer to the [Lovable documentation](https://docs.lovable.dev) or contact support.

## License

This project is created for business use. Please ensure compliance with all applicable regulations and laws.