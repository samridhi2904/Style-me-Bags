# StyleMe Bags — Bag Shop (Static Site)

This is a minimal, static website scaffold for a bag shop.

Files:
- `index.html` — homepage with product grid and search/filter
- `about.html` — brand story and care information
- `contact.html` — contact details (mailto)
- `styles.css` — site styles
- `scripts.js` — simple client-side product loader + filters
- `products.json` — sample product data (placeholder images)

How to run:
- Open `index.html` in your browser directly, or run a local server for best results.

Quick commands (PowerShell):

```powershell
# Serve from current directory on port 8000 (needs Python installed)
python -m http.server 8000; Start-Process "http://localhost:8000"
```

Next steps / suggestions:
- Replace placeholder images with real product photos (store in `images/`).
- Add per-product pages or a simple cart integration.
- Connect to a headless CMS (e.g., Netlify CMS, Sanity) or use a JSON file generator for content.
- Deploy to GitHub Pages, Netlify, or Vercel for instant hosting.

If you'd like, I can:
- Add a simple product details modal or page template.
- Wire up a static checkout flow using Shopify Buy SDK or Snipcart.
- Create real product images and alt text entries.
