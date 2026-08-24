# Sai Swetha & Sai Santhosh — Wedding Invitation

A one-page wedding invitation site built with Next.js (React), in a blue &
gold theme inspired by South Indian temple architecture (gopuram motif) —
built for the muhurtham on **Saturday, 4th September 2026, 3:50 AM**, at
**Lee Paradise Convention, Vizianagaram**.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Add your photos

Drop images into `public/gallery/` using these exact names (any of
jpg/jpeg/png/webp — just match the extension in `components/Gallery.jsx`):

```
public/gallery/photo-1.jpg
public/gallery/photo-2.jpg
public/gallery/photo-3.jpg
public/gallery/photo-4.jpg
public/gallery/photo-5.jpg
public/gallery/photo-6.jpg
```

Until a photo is added, that tile shows an elegant gold placeholder — so
you can deploy now and add photos later without breaking anything.

You can also add/remove tiles by editing the `PHOTOS` array at the top of
`components/Gallery.jsx`.

## Customize

- **Names, date, muhurtham time:** `components/Hero.jsx` and
  `components/Countdown.jsx` (the countdown target is set near the top of
  `Countdown.jsx` as an ISO date string).
- **Venue / address:** `components/VenueMap.jsx` — the map and "Get
  Directions" button both build off `VENUE_NAME` and `VENUE_ADDRESS` at the
  top of the file, so editing those two lines updates both.
- **Hashtag:** appears in `components/Hero.jsx` and
  `components/HashtagBanner.jsx`.
- **Colors:** all defined as CSS variables at the top of `app/globals.css`
  (`--royal`, `--gold`, `--ivory`, etc.) — change them once and the whole
  site updates.

## Deploy for free (get a shareable link, like the example you sent)

The easiest path is [Vercel](https://vercel.com), made by the creators of
Next.js:

1. Push this folder to a new GitHub repository.
2. Go to vercel.com → "Add New Project" → import that repository.
3. Leave all settings as default and click Deploy.
4. You'll get a live link like `sai-swetha-sai-santhosh.vercel.app` you can
   share with guests, and every future `git push` auto-updates it.

Alternatively, drag-and-drop deploy works too: run `npm run build`, then
upload the project folder in the Vercel dashboard without using git.
