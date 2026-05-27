import fs from 'fs';

let content = fs.readFileSync('src/components/SitemapData.ts', 'utf8');

// replace the incorrect chunk
const badChunk = `      {
        "num": "142.",
        "to": "/driver/history",
        "title": "Trip History",
        "description": "Complete history of all completed trips"
      }
      {
        "num": "143."`;

const goodChunk = `      {
        "num": "142.",
        "to": "/driver/history",
        "title": "Trip History",
        "description": "Complete history of all completed trips"
      },
      {
        "num": "143."`;

content = content.replace(badChunk, goodChunk);

fs.writeFileSync('src/components/SitemapData.ts', content, 'utf8');
console.log('done fixing');
