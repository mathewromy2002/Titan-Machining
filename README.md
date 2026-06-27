# Titan Machining LLC — Website

Static, SEO-optimized website for Titan Machining LLC (UAE precision lathe & CNC machining company).

## Structure

- `index.html` — Homepage
- `services.html` — Services detail page
- `about.html` — About page
- `contact.html` — Contact page with quote request form
- `css/style.css` — All styling
- `js/main.js` — Mobile nav toggle, footer year
- `images/` — Put your logo here as `logo.png`
- `robots.txt`, `sitemap.xml` — SEO crawler files
- `CNAME` — Custom domain config for GitHub Pages (titanmachininguae.com)

## Before going live

1. Add your real logo file to `images/logo.png` (used for the header, footer, favicon, and social share previews).
2. Replace the placeholder address ("Industrial Area, Dubai, UAE") in `index.html`, `contact.html`, and the JSON-LD blocks with your real address.
3. In `contact.html`, the form posts to FormSubmit (`https://formsubmit.co/sales@titanmachininguae.com`) — no backend needed. The **first submission** will trigger a confirmation email from FormSubmit to `sales@titanmachininguae.com` that must be approved once to activate the form.
4. Update `sitemap.xml` dates/URLs if you add more pages later.

## Deploy to GitHub Pages

```bash
cd Titan-Machining
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/mathewromy2002/Titan-Machining.git
git push -u origin main
```

Then in the GitHub repo:
1. Go to **Settings → Pages**.
2. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
3. Save. Your site will be live at `https://mathewromy2002.github.io/Titan-Machining/` within a minute.

## Connect your custom domain (titanmachininguae.com)

1. The `CNAME` file in this repo already points to `titanmachininguae.com`.
2. In your domain registrar's DNS settings, add:
   - An `A` record for the root domain pointing to GitHub Pages IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - A `CNAME` record for `www` pointing to `mathewromy2002.github.io`.
3. In GitHub repo **Settings → Pages**, enter `titanmachininguae.com` as the custom domain and enable **Enforce HTTPS** once it's available (DNS propagation can take a few hours).
