# Pet Expert – Dhaka (frontend)

React 19 + Vite + Tailwind CSS 4. Run it with:

    npm install
    npm run dev

## Where to change things
- `src/config/site.js` – phones, address, branches, social links, the 6 services, pet-health topics.
- Each file in `src/components/<Name>/` controls one section or page. Its `CONFIG` block at the top holds the text, image paths and numbers.
- `src/index.css` – light and dark colour tokens (`--color-canvas`, `--color-ink`, `--color-primary`, `--color-gold` …) and fonts.
- `src/App.jsx` – the routes, and the order of the home page sections.

## Images to add in `public/`
(Missing images are hidden automatically, so the site still works without them.)

- `silverdoor.webp` – login page background
- `images/hero-vet-with-dog.webp`, `images/clinic-reception.webp`, `images/about-clinic.webp`, `images/cta-dog.webp`
- `images/services/` – `wellness-exams`, `vaccinations`, `dental-care`, `surgery`, `diagnostics`, `emergency-care` (.webp)
- `images/avatars/` – `pet-1` … `pet-4`, `client-1` … `client-4` (.webp)
- `images/team/` – `vet-1` … `vet-4` (.webp)
- `images/blog/` – `post-1` … `post-3` (.webp)

## Placeholders to replace (marked TODO in the code)
Email, opening hours, social links, review numbers, stats, testimonials, team names, blog posts, second-branch phone.
