# 🎂 Birthday Surprise Website for My Girlfriend 💖

An interactive, romantic digital love letter & birthday celebration experience built with **React**, **Vite**, and **Tailwind CSS**.

---

## ✨ Features Included

1. **Welcome / Hero Screen**:
   - Personalized greeting ("Happy Birthday, My Love! 🎂💗")
   - Floating hearts, sparkles, ribbons, and aesthetic scrapbook badges.
   - Smooth transition button into the celebration.

2. **Interactive Birthday Cake & Wish**:
   - Illustrated multi-tiered cake with strawberry frosting and pearl sprinkles.
   - Animated flickering candle flames.
   - Tap/click candles or tap "Blow Out Candles 💨" to extinguish flames with smoke puff.
   - Full confetti shower trigger & starry glow.
   - Secret "Make a Wish ✨" box stored safely in local storage.

3. **Days Together Counter**:
   - Real-time counter of days, hours, minutes, and seconds since your anniversary.
   - If no date is set yet, displays a sweet timeless love quote.

4. **Our Love Story (Timeline)**:
   - Vertically arranged milestone cards (The Day We Met, Our First Conversation, My Favorite Memory, etc.).
   - Charming badges, icons, and dates.

5. **Our Memories / Polaroid Photo Gallery**:
   - Polaroid-style cards with washi tape, gentle tilt angles, and handwritten captions.
   - Interactive Lightbox photo viewer with previous/next controls.
   - Graceful fallback illustrations if custom photos are not yet added.

6. **A Few Reasons Why You're My Favorite Person**:
   - 8+ interactive cards that reveal heartfelt reasons when clicked.
   - Counter tracking how many reasons have been opened.

7. **The Personal Love Letter**:
   - Sealed envelope with wax seal design.
   - Tap envelope to break seal, unfold letter, and read your sincere love message.
   - Personalized closing signature.

8. **Couple's Mini Love Quiz**:
   - Fun, playful questions and affectionate animated reactions.
   - Score celebration & "100% Soulmate Verified" certificate badge!

9. **The Final Surprise**:
   - "One Last Surprise 💌" button.
   - Grand fireworks confetti explosion and emotional birthday tribute message.
   - "Experience The Magic Again" button to return to the top.

10. **Background Music Player**:
    - Floating unobtrusive music player pill in the bottom corner.
    - Soft romantic music-box melody synthesized automatically via Web Audio API.
    - Supports custom MP3 files seamlessly.

---

## 🛠️ Personalization (The Only File You Need to Edit!)

All names, dates, messages, photos, and music paths are configured in one central file:
👉 **[`src/data/personalization.js`](./src/data/personalization.js)**

### 1. Change Names & Nicknames
Open `src/data/personalization.js` and change:
```javascript
recipient: {
  name: 'Her Name',       // e.g. 'Ananya' or 'Babe'
  nickname: 'Sweetheart',
},
sender: {
  name: 'Robin',
  signature: 'Forever your person, Robin 💗',
}
```

### 2. Set Anniversary & Birthday Dates
```javascript
dates: {
  birthday: 'Today',                 // e.g. 'October 16'
  anniversaryDate: '2024-03-15',      // Format: 'YYYY-MM-DD'
}
```

### 3. Add Your Personal Photos 📸
1. Save your photos into the `public/photos/` folder:
   - `public/photos/photo1.jpg`
   - `public/photos/photo2.jpg`
   - etc.
2. In `src/data/personalization.js`, set the `image` path for each slot in `gallery`:
   ```javascript
   image: '/photos/photo1.jpg',
   ```

### 4. Add Background Music 🎵
1. Place an MP3 audio file into the `public/` folder (e.g., `public/my-song.mp3`).
2. In `src/data/personalization.js`, set:
   ```javascript
   music: {
     audioSrc: '/my-song.mp3',
     title: 'Our Favorite Song',
   }
   ```
*(If left blank, the website plays the built-in gentle romantic music box melody!)*

---

## 🚀 Running Locally

To run the site on your computer:
```bash
npm install
npm run dev
```
Open your browser at `http://localhost:5173`.

To build for production:
```bash
npm run build
```

---

## 🌐 Deploying to GitHub Pages

This project includes an automated GitHub Actions deployment workflow at `.github/workflows/deploy.yml`.

Whenever you push changes to the `main` branch:
1. GitHub Actions will automatically build the site.
2. Deploy it to `https://robinvikaskurapati-star.github.io/birthday-surprise/`.
