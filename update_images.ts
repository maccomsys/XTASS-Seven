import fs from 'fs';
import path from 'path';

const PREMIUM_IMAGES = [
  "https://i.ibb.co/Rk3mnMY0/01-Premium-Class-Lexus.jpg",
  "https://i.ibb.co/ym19xyWR/02-Business-Class-Mercedez.jpg",
];

const ECONOMY_IMAGES = [
  "https://i.ibb.co/m5Vvkf68/04-Basic-Class-Toyota.jpg",
  "https://i.ibb.co/d07LFjF0/03-Economy-Ford-Explorer.jpg",
];

const REGULAR_IMAGES = [
  "https://i.ibb.co/PsknGR3p/Airport-Pickup-9.jpg",
  "https://i.ibb.co/5X2DH7NV/Airport-Pickup-8.jpg",
  "https://i.ibb.co/8g9MphYk/Airport-Pickup-7.jpg",
  "https://i.ibb.co/JRMzmm2x/Airport-Pickup-6.jpg",
  "https://i.ibb.co/HTVggwbD/Airport-Pickup-5.jpg",
  "https://i.ibb.co/sv5GZPW4/Airport-Pickup-4.jpg",
  "https://i.ibb.co/wh9yvPZb/Airport-Pickup-3.jpg",
  "https://i.ibb.co/zWN7ZHns/Airport-Pickup-1.jpg",
  "https://i.ibb.co/0j6bZk7B/Airport-Pickup-2.jpg",
  "https://i.ibb.co/NnFG4ZN6/Resized-5.jpg",
  "https://i.ibb.co/Q7qygPGB/Resized-4.jpg",
  "https://i.ibb.co/ymzQTwCS/Resized-2.jpg"
];

function getImage(context: string) {
   const lowerCtx = context.toLowerCase();
   let list = REGULAR_IMAGES;
   if (lowerCtx.includes('premium') || lowerCtx.includes('luxury') || lowerCtx.includes('business')) {
       list = PREMIUM_IMAGES;
   } else if (lowerCtx.includes('economy') || lowerCtx.includes('basic') || lowerCtx.includes('standard')) {
       list = ECONOMY_IMAGES;
   }
   return list[Math.floor(Math.random() * list.length)];
}

const REGEX = /https?:\/\/[^"'\s\)]+/g;

function walk(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      if (fullPath.includes('MainContent.tsx')) continue;

      let content = fs.readFileSync(fullPath, 'utf8');
      
      const lines = content.split('\n');
      let changed = false;
      
      for (let i = 0; i < lines.length; i++) {
         const line = lines[i];
         const matches = line.match(REGEX);
         if (matches) {
            for (const match of matches) {
               if (
                  match.includes('unsplash.com') ||
                  match.includes('i.ibb.co') ||
                  match.includes('pravatar.cc') ||
                  match.includes('ui-avatars.com') || 
                  match.includes('googleusercontent.com')
               ) {
                   lines[i] = lines[i].replace(match, getImage(line + ' ' + fullPath));
                   changed = true;
               }
            }
         }
      }
      
      if (changed) {
          fs.writeFileSync(fullPath, lines.join('\n'), 'utf8');
          console.log('Updated ' + fullPath);
      }
    }
  }
}

walk('./src');
