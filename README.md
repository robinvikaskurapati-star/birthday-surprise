# 💖 A Little Heart, a Thousand Memories 💗
### Premium Interactive Birthday Surprise Website for My Girlfriend

A complete, production-ready romantic interactive birthday surprise website built with **React**, **Vite**, **Tailwind CSS**, and the **Web Audio API**.

The website feels like opening a tiny magical world made especially for someone you love: starting with a delicate glowing heart that opens upon dragging a little arrow, unfolding into a personalized digital scrapbook, interactive cake, love letter, photo memories, relationship timeline, love notes, playful couple quiz, and grand final surprise.

---

## ✨ Features & Experiences Included

1. **Section A: The Little Heart Opening (Main Visual Identity)**:
   - Centered animated glowing heart with satin ribbon and bow.
   - Draggable arrow handle with real pointer and touch gesture support.
   - Heart splits and opens progressively with user drag distance, radiating golden light and emitting tiny sparkle trails.
   - Ribbon unties and flutters open.
   - Accessible fallback button: "Tap here if you prefer to open instantly 💕".

2. **Section B: Personalized Birthday Welcome**:
   - Animated greeting: *"Happy Birthday, My Love! 🎂💗"*
   - Subtitle: *"Today is all about you, my favorite person."*
   - Editable name/nickname highlighting your girlfriend.
   - Cute floating SVG balloons and gift box illustration with floating hearts and sparkles.
   - Smooth navigation button: *"Let's Explore Our Memories 💕"*.

3. **Section C: Our Memories Inside The Heart (Scrapbook & Polaroids)**:
   - **8 editable photo slots** supporting portrait, square, and landscape memories.
   - Multiple romantic frame styles:
     - **Heart-shaped photo frames** with SVG clip masking.
     - **Polaroid cards** with washi tape, tilt angles, and handwritten captions.
     - **Rounded scrapbook frames** with rose accents.
     - **Central featured collage highlight**.
   - Interactive Lightbox with previous/next navigation and keyboard arrows/Esc support.
   - **Easter Egg**: Automatically unlocks a secret romantic note banner once all memories have been discovered!
   - 8 beautiful local SVG placeholder cards stored in `public/images/memories/` that never 404.

4. **Section D: Our Love Story Timeline**:
   - Vertical timeline with 6 romantic milestones:
     1. The day we met 🌸
     2. Our first conversation 💬
     3. My favourite memory 📸
     4. A moment that made me smile ☀️
     5. Our most special memory 💫
     6. All the beautiful moments still waiting for us 🌅
   - Supports editable dates, titles, descriptions, and optional milestone photos.

5. **Section E: A Few Reasons Why You're My Favorite Person 💗**:
   - 8 interactive love-message cards styled as miniature foldable love notes / envelopes.
   - Tap to unseal and unfold each reason with a gentle paper rustle sound effect.
   - Progress pill tracking how many notes have been opened, plus an "Unfold All 💕" button.

6. **Section F: Interactive Birthday Cake**:
   - Illustrated multi-tiered cake with strawberry frosting, piping, and 3 flickering candles.
   - Tap-to-blow-out interaction that works reliably on every device.
   - Optional microphone blow detection toggle ("Blow via Mic 🎙️") that listens for a gentle puff of air on supported browsers.
   - Candle smoke animation, celebratory confetti explosion, and reveals: *"Your wish deserves to come true ✨"*.
   - Interactive secret birthday wish form to type and seal her wish into local storage.

7. **Section G: The Personal Love Letter**:
   - Interactive wax-sealed envelope.
   - Tap to break seal, open flap, slide out letter, and unfold.
   - Line-by-line reveal animation with sincere, warm birthday letter.
   - Signature: *"Forever your person, Dileep 💗"*.

8. **Section H: Days Together Counter**:
   - Real-time ticking counter (Days, Hours, Minutes, Seconds) calculated safely without timezone off-by-one errors.
   - If anniversary date is left empty, gracefully displays: *"Every single moment spent with you is special, timeless and forever precious." ⏳✨*

9. **Section I: Cute Love Quiz**:
   - 4 fun, affectionate couple questions with instant reaction quotes.
   - Confetti shower and cute *"100% Soulmate Verified! 🏆💖"* certificate card on completion.
   - Restart button to play again.

10. **Section J: Background Music Player**:
    - Unobtrusive floating music player pill in the bottom corner.
    - Play/pause toggle with spinning music vinyl and frequency bars.
    - Built-in soothing romantic music-box melody synthesized via Web Audio API—works out-of-the-box with zero MP3 files needed!
    - Seamlessly supports custom MP3 files placed in `public/audio/`.

11. **Section K: The Final Surprise**:
    - "One Last Surprise 💌" button.
    - Smooth background transition into a magical pink atmosphere.
    - Fireworks confetti cannon and grand birthday wish.
    - *"Start Our Little Story Again"* replay button that resets the heart opening interaction and returns to the beginning.
    - *"Screenshot Keepsake 📸"* mode for saving a clean memory screenshot.

12. **Extra Creative Features**:
    - **Desktop Heart Cursor Trail**: Lightweight canvas particle trail that follows the cursor on mouse devices.
    - **Surprise Journey Mini Navigation Bar**: Floating top bar showing overall journey progress % and quick jump buttons.
    - **Web Audio Sound Effects Engine**: Delicate chime arpeggios, paper unfold sounds, candle blow breeze, and pop sounds with an audio mute toggle.

---

## 🛠️ How to Personalize (The Only File to Edit!)

All personal information, messages, questions, and dates are stored in:
👉 **[`src/data/personalization.js`](./src/data/personalization.js)**

### 1. Update Names & Nicknames
```javascript
recipient: {
  name: 'Her Real Name',       // e.g. 'Ananya' or 'Babe'
  nickname: 'Sweetheart',
},
sender: {
  name: 'Dileep',
  signature: 'Forever your person, Dileep 💗',
}
```

### 2. Set Anniversary & Birthday Dates
```javascript
dates: {
  birthday: 'Today',                 // e.g. 'November 6'
  anniversaryDate: '2024-03-15',      // Format: 'YYYY-MM-DD' (or leave '' for timeless quote)
}
```

### 3. Replace Photos with Your Real Pictures 📸
1. Drop your photo files (JPG or PNG) into:
   `public/images/memories/`
   *(e.g., `memory1.jpg`, `memory2.jpg`, etc.)*
2. Open `src/data/personalization.js` and set the `image` path for each memory:
   ```javascript
   image: '/images/memories/memory1.jpg',
   ```
*(If an image path is left empty or not found, the website displays an illustrated card so it will never look broken!)*

### 4. Add Background Music 🎵
1. Place an MP3 file into `public/audio/` (e.g., `public/audio/romantic-song.mp3`).
2. In `src/data/personalization.js`, set:
   ```javascript
   music: {
     audioSrc: '/audio/romantic-song.mp3',
     title: 'Our Song 🎶',
   }
   ```
*(If left empty, the built-in romantic music-box melody plays automatically!)*

---

## 💻 Local Development & Testing

### 1. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 2. Build for Production
```bash
npm run build
```
This compiles the website into the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 🚀 Deployment to GitHub Pages

The repository is configured for automatic deployment via **GitHub Actions** (`.github/workflows/deploy.yml`).

### To Deploy:
1. Commit your latest changes:
   ```bash
   git add .
   git commit -m "feat: complete romantic birthday surprise website"
   ```
2. Push to GitHub:
   ```bash
   git push -u origin main
   ```
3. GitHub Actions will automatically build and deploy the website.
4. Your live website will be accessible at:
   **`https://chowhan1008.github.io/birthday-surprise/`**

If GitHub CLI (`gh`) is authenticated, you can also run `./deploy.ps1` to trigger deployment in one click!
