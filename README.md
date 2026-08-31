# tenant-website

## `front-door/`

**The actual site.** A single self-contained `index.html` for tenants
browsing homes and rooms to rent — every landlord accepts Housing Benefit
and Universal Credit. Search by area, filter by type, and open any listing
to see the real weekly cost (rent, service charge, council tax) with an
affordability check against what the visitor receives. No build step —
open `front-door/index.html` directly or serve the folder with any static
file server.

## `velorah/`

**A style reference, not a page to build out.** A React + Vite +
TypeScript + Tailwind + shadcn/ui hero section — fullscreen video
background, glassmorphic nav, cinematic typography — used to show the
level of polish and motion wanted elsewhere. Run it locally to see it:

```
cd velorah
npm install
npm run dev
```
