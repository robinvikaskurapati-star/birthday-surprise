const fs = require('fs');
const path = require('path');

// Read JPEG dimensions directly from headers
function getJpegDimensions(buffer) {
  let offset = 2;
  while (offset < buffer.length) {
    if (buffer[offset] !== 0xFF) break;
    const marker = buffer[offset + 1];
    if (marker === 0xC0 || marker === 0xC2) {
      const height = buffer.readUInt16BE(offset + 5);
      const width = buffer.readUInt16BE(offset + 7);
      return { width, height };
    }
    const len = buffer.readUInt16BE(offset + 2);
    offset += 2 + len;
  }
  return null;
}

const dir = 'C:/Users/ROBIN KURAPATI/.gemini/antigravity/brain/2db0bf28-b2ea-4f95-a0ed-d9f9b2cd4b34/.user_uploaded';
const files = fs.readdirSync(dir).sort();

files.forEach(f => {
  const full = path.join(dir, f);
  const buf = fs.readFileSync(full);
  const dims = getJpegDimensions(buf);
  console.log(f, dims, (dims ? (dims.width / dims.height).toFixed(2) : 'unknown'));
});
