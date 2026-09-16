# Goodwill Alliance website

Next.js site prepared for deployment to Vercel with `goodwillalliance.org`.

## Local development

```bash
npm install
npm run dev
```

## Donation link

Set this Vercel environment variable before launch:

`NEXT_PUBLIC_DONATE_URL=https://YOUR-SECURE-DONATION-PAGE`

The Donate page will then send visitors to the secure donation processor.

## Vercel / GoDaddy

1. Import this project into Vercel.
2. Add `goodwillalliance.org` and `www.goodwillalliance.org` under Vercel Project Settings → Domains.
3. Add the DNS records Vercel provides to GoDaddy.
4. Keep the domain registered at GoDaddy; there is no need to transfer it.
5. Add the donation URL environment variable and redeploy.

## Important before Google Ad Grants application

Before submitting the website for Ad Grants review, verify that:
- the production domain loads over HTTPS;
- all navigation and donation links work;
- the secure donation page is connected;
- the organization name, 501(c)(3) status, mission, and activities are clearly displayed;
- the site is mobile-friendly and fast;
- program descriptions are accurate and reflect actual Goodwill Alliance activities.
