# Mahin — Personal Portfolio

A premium, responsive personal portfolio for Mahin, built with Next.js App Router, JavaScript, Tailwind CSS and Lucide React.

## Local development

Requirements: Node.js 18.17+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). For a production build:

```bash
npm run build
npm start
```

## Editing content

- Replace the portrait at `public/images/mahin-portrait.jpg`.
- Update social profile URLs and portfolio entries in `components/Portfolio.js`.
- The supplied photography gallery is stored in `public/images/photography/` and appears under the Photography filter.
- Add real project images by placing them in `public/images` and changing each project `image` value to a local path such as `/images/project-one.jpg`.
- The contact section includes direct email and phone links: `naturewithmahin12@gmail.com` and `01961102047`. Email uses `mailto:` and phone uses `tel:`; neither requires a backend.

Portfolio gallery entries are intentionally labeled as placeholders until real work is supplied.

## GitHub

```bash
git init
git add .
git commit -m "Build Mahin portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

Replace the remote URL with your repository. Never commit `.env` files or secrets.

## Vercel

1. Import the GitHub repository at [vercel.com/new](https://vercel.com/new).
2. Keep the framework preset as **Next.js**.
3. Use `npm run build` as the build command if Vercel does not detect it automatically.
4. Deploy. No environment variables are required for the current static portfolio.
