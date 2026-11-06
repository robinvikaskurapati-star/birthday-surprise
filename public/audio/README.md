# 🎵 How to Add Your Background Music

Welcome Robin! Follow these quick steps to add your girlfriend's favorite romantic song or background tune:

### 1. Place Your Audio File Here
Put an MP3 file (e.g. `romantic-melody.mp3` or `birthday-song.mp3`) into this folder:
`public/audio/`

### 2. Update `src/data/personalization.js`
Open `src/data/personalization.js` and set the `audioSrc`:
```javascript
music: {
  audioSrc: '/audio/romantic-melody.mp3', // <-- Add your file path here!
  title: 'Our Favorite Song 🎶',
  artist: 'Special Melody',
}
```

### ✨ Note:
If no audio file is provided, or if the file cannot be loaded, the website will **automatically generate a soothing romantic music-box melody** in real time using the browser's Web Audio API! It works out-of-the-box with zero setup required.
