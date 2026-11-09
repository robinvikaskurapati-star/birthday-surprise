# 📸 How to Add Your Real Photos

Here is the simple guide to replacing the placeholder memory illustrations with your actual couple photographs:

### 1. Place Your Photos Here
Drop your image files (JPG, PNG, or WEBP) into this folder:
`public/images/memories/`

Recommended photo names:
- `memory1.jpg` (or `.png`)
- `memory2.jpg`
- `memory3.jpg`
- `memory4.jpg`
- `memory5.jpg`
- `memory6.jpg`
- `memory7.jpg`
- `memory8.jpg`

### 2. Update `src/data/personalization.js`
Open `src/data/personalization.js` and update the `image` path for each memory slot:
```javascript
{
  id: 1,
  title: 'Our Cutest Coffee Date ☕',
  caption: 'When coffee was warm, but your company was warmer.',
  date: 'October 2024',
  image: '/images/memories/memory1.jpg', // <-- Put your file path here!
  frameStyle: 'heart', // 'heart' | 'polaroid' | 'rounded' | 'scrapbook'
  aspect: 'aspect-square',
}
```

Both portrait (`aspect-[4/5]`), square (`aspect-square`), and landscape (`aspect-[4/3]`) photos are fully supported.
If an image is left empty or not found, the website will automatically display a cute romantic illustration so it will never look broken!
