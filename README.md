# Bala Ajizentu Garba Portfolio

A static portfolio website built with React, Vite, TypeScript, and Tailwind CSS.

## Live site
- https://ajizentubala5-bot.github.io/portfolio-site/

## Project status
- The portfolio site is deployed and loading successfully on GitHub Pages.
- Static assets such as the profile image and CV are hosted correctly.
- The contact form is connected to Formspree and submits successfully.
- Formspree workflow is configured to send emails to ajizentubala5@gmail.com.

## Important note
The site itself and the Formspree endpoint are working correctly. The remaining issue is Gmail delivery/filtering on the recipient side, not a frontend or deployment issue.

## Contact form setup
The portfolio uses Formspree as the public form backend:
- Form endpoint: https://formspree.io/f/mdeakpgv
- Workflow target: ajizentubala5@gmail.com

## Known issue to check later
- Some submissions are reaching Formspree but not arriving in the personal Gmail inbox.
- This is likely due to Gmail spam filtering, forwarding rules, or sender restrictions.
- Check Gmail Spam, Promotions, All Mail, and Filters.

## Local development
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
```

## Deployment
This project is configured for GitHub Pages deployment through GitHub Actions.

## Key implementation notes
- Vite base path is configured for the project subdirectory hosting on GitHub Pages.
- Public assets live in the public folder.
- Contact form success state is handled in the UI after a successful submission.

## Handoff for next session
If continuing work:
1. Check Gmail delivery and filtering for Formspree emails.
2. If Gmail delivery continues to fail, consider switching to another public free form service.
3. Re-test the submitted form from the live page and confirm inbox delivery.
4. Keep the portfolio static and low-maintenance for GitHub Pages.
