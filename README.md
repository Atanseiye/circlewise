# CircleWise Initiative

A modern, responsive Next.js website for CircleWise Initiative, a women and girl-child health initiative focused on menstrual education, period tracking, reproductive health awareness, hygiene, dignity, nutrition, mental wellness, and community outreach.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Useful Scripts

```bash
npm run dev
npm run build
npm run start
npm run typecheck
```

## Project Structure

- `app/` - Next.js routes, metadata, API placeholder, sitemap, and robots file.
- `components/` - Reusable UI and interactive components.
- `data/content.ts` - Editable website content for navigation, programs, values, and resources.
- `lib/` - Shared helpers.
- `public/images/` - Website image assets.

## Privacy Note

The period tracker stores entries only in the visitor's browser using `localStorage`. CircleWise does not receive or store tracker data in this version.

## Contact Form

The contact form validates user input and simulates a successful submission. A placeholder API route is available at `app/api/contact/route.ts` for future backend integration.
