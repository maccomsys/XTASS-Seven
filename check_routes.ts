import fs from 'fs';
import path from 'path';

let allLinks: string[] = [];

function walk(dir: string, callback: (path: string) => void) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist') walk(p, callback);
    } else if (p.endsWith('.tsx') || p.endsWith('.ts')) {
      callback(p);
    }
  }
}

walk('src', (file) => {
  let content = fs.readFileSync(file, 'utf8');
  // find <Link to="..."> or navigate("...")
  const matches = [...content.matchAll(/to="(.*?)"/g)];
  for (const match of matches) {
    allLinks.push(match[1]);
  }
});

const appContent = fs.readFileSync('src/App.tsx', 'utf8');
const routes = [...appContent.matchAll(/<Route path="(.*?)"/g)].map(m => m[1]);

console.log('Routes count:', routes.length);
console.log('Links found:', allLinks.length);

const unhandled = allLinks.filter(l => {
  if (l === '#' || l.startsWith('mailto:') || l.startsWith('tel:') || l.startsWith('http')) return false;
  
  // check if matches any route
  for (let r of routes) {
    if (r === l) return false; // Handled
    
       const rParts = r.split('/');
       const lParts = l.split('/');
       if (rParts.length === lParts.length) {
         let match = true;
         for (let i = 0; i < rParts.length; i++) {
            if (!rParts[i].startsWith(':') && rParts[i] !== lParts[i]) {
                match = false;
                break;
            }
         }
         if (match) return false; // Handled
       }
  }
  return true; // Not handled
});

const uniqueUnhandled = [...new Set(unhandled)];
console.log('Unhandled links:');
uniqueUnhandled.forEach(l => console.log('  ', l));
