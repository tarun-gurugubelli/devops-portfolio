# DevOps Knowledge Board

## Deployment

This app is configured as a static Next.js export and deploys to GitHub Pages from `.github/workflows/deploy.yml`.

1. In GitHub, go to **Settings > Pages** and set **Build and deployment > Source** to **GitHub Actions**.
2. In your DNS provider for `tarun.win`, add a CNAME record:

   ```text
   devops CNAME tarun-gurugubelli.github.io
   ```

3. Push to `main` or run the **Deploy to GitHub Pages** workflow manually.

The `public/CNAME` file configures GitHub Pages to serve the site at `devops.tarun.win`.
