# KIRSAANI Marketing Website

Production-ready Next.js + Tailwind marketing website for **KIRSAANI** (Cold Pressed Mustard Oil / Kachi Ghani), based in Kharar, Punjab.

## Tech Stack
- Next.js 14 App Router + TypeScript
- Tailwind CSS
- Built-in Next metadata SEO

## Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000

## Environment Variables
Create a `.env.local` file:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER="919999999999"
NEXT_PUBLIC_CALL_NUMBER="919999999999"
```

If not set, the app uses placeholder defaults from `app/lib/site.ts`.

## Deployment on Vercel
1. Push this repository to GitHub.
2. Import project in Vercel.
3. Add env vars in Vercel Project Settings.
4. Deploy.

## How to Change WhatsApp / Call Number
Update the env values above. CTA links are generated dynamically in:
- `app/lib/site.ts`

## How to Replace PDF / Video Content
- Lab report PDF currently points to `/public/lab-report-placeholder.txt`.
  Replace this file with your real lab report while keeping the same name (or update the link in `DownloadPDFButton`).
- Purity process video is currently a placeholder block in `app/purity/page.tsx`.
  Replace it with `<iframe>` embed or hosted video player.

## Included Pages
- `/` Home
- `/about`
- `/purity` (QR trust landing)
- `/product`
- `/recipes`
- `/contact`
- `/privacy-policy`
- `/terms`
