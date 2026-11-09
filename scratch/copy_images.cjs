const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/ROBIN KURAPATI/.gemini/antigravity/brain/2db0bf28-b2ea-4f95-a0ed-d9f9b2cd4b34/.user_uploaded';
const destDir = 'public/images/memories';

const mapping = [
  { src: 'media_1794242064208_1f395c89.jpg', dest: 'photo4.jpeg' },
  { src: 'media_1794242091022_2ca3415d.jpg', dest: 'photo5.jpeg' },
  { src: 'media_1794242111177_65874ab2.jpg', dest: 'photo6.jpeg' },
  { src: 'media_1794242128025_dbadebf5.jpg', dest: 'photo7.jpeg' },
  { src: 'media_1794242151331_ff4e5639.jpg', dest: 'photo8.jpeg' },
];

mapping.forEach(m => {
  const src = path.join(srcDir, m.src);
  const dest = path.join(destDir, m.dest);
  fs.copyFileSync(src, dest);
  const stat = fs.statSync(dest);
  console.log('Copied ' + m.src + ' -> ' + dest + ' (' + stat.size + ' bytes)');
});
