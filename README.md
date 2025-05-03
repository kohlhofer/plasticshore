# PlasticShore

PlasticShore is a modern, responsive website dedicated to raising awareness about ocean plastic pollution and connecting people with organizations leading the fight for cleaner oceans.

## Purpose

This website serves as a comprehensive hub for ocean plastic pollution activism, curating top organizations working on:

- **Cleanup & Restoration**: Organizations removing plastic from oceans and coastlines
- **Policy & Advocacy**: Groups fighting for policy change and corporate responsibility
- **Science & Research**: Organizations studying plastic pollution and its impacts
- **Education & Outreach**: Groups raising awareness and educating communities
- **Innovation & Alternatives**: Initiatives developing innovative solutions to plastic pollution

## Features

- Modern, ocean-inspired color scheme and minimalist design
- Responsive layout: action grid adapts from 4 columns (desktop) to 2 columns (tablet) to 1 column (mobile)
- Wavy SVG line art background in the "Take Action" section for visual interest
- Clickable organization cards with modern hover effects and large shadows
- Category tabs with unique colors and smooth transitions
- Floating handwritten logo in the hero section
- Stats slider in the hero section (hidden on mobile for usability)
- All content on a single page for easy navigation
- Fully mobile-friendly and accessible

## Technologies Used

- HTML5
- CSS3 (custom properties, grid, flexbox, SVG backgrounds)
- JavaScript (for tab navigation and stats slider)
- Font Awesome icons
- Google Fonts

## Deployment

This site is designed to be hosted on GitHub Pages. To deploy:

1. Fork this repository
2. Go to Settings > Pages
3. Select the main branch as the source
4. Click Save

The site will be published at `https://[your-username].github.io/plastic/`

## Local Development

To run this site locally:

1. Clone the repository: `git clone https://github.com/yourusername/plastic.git`
2. Navigate to the project directory: `cd plastic`
3. Open `index.html` in your browser

## Customization

You can customize this site by:

- Updating organization information in the HTML file (`index.html`)
- Changing images in the `img` directory (e.g., hero background, organization logos)
- Modifying the color scheme and layout in `css/styles.css` (see the `:root` section for CSS variables)
- Adjusting the SVG background pattern in the `.take-action` section
- Adding or removing organizations, categories, or features as needed

## License

This project is open source and available for anyone to use and modify for education and advocacy about ocean plastic pollution.

## Credits

- All organization information based on publicly available sources
- Design and development by [Alex](https://kohlhofer.com)

## GitHub Pages Deployment

To deploy this site with GitHub Pages:

1. Make sure your repository is public (or use GitHub Pro for private Pages).
2. Push your code to GitHub.
3. In your repository settings, go to the "Pages" section.
4. Set the source branch to `main` and the folder to `/ (root)`.
5. The `.nojekyll` file is included to ensure all files (including those in folders like `img/` and `js/`) are served correctly.
6. Your site will be available at `https://<your-username>.github.io/<repo-name>/` after a few minutes.

For custom domains, configure your DNS and add a `CNAME` file as needed. 