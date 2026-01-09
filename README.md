# Eddie Chen's Personal Website

My personal website built with Next.js, Chakra UI, and MDX.

## Features

- **Reading** - Book reviews with an interactive 3D bookshelf
- **Writing** - Blog posts in MDX format
- **Projects** - Showcase of my engineering projects
- **Resume** - PDF resume viewer

## Getting Started

```bash
# Install dependencies
npm install

# Generate content indexes
npm run generate

# Start development server
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Adding Content

### Books
Add book reviews as MDX files in `content/books/`. Cover images go in `public/reading/`.

### Writing
Add blog posts as MDX files in `content/writing/`.

### Projects
Edit `content/engineering/external.json` to update the project list.

## Build

```bash
npm run build
npm run start
```

## Generate Sitemap

```bash
npm run sitemap
```

Update the `SITE_URL` in `scripts/generate-sitemap.mjs` with your actual domain before deploying.
