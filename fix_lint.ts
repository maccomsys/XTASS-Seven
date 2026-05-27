import fs from 'fs';
import path from 'path';

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
  let changed = false;

  if (content.includes('React.') && !content.includes('import React') && !content.includes('import * as React')) {
    content = 'import React from "react";\n' + content;
    changed = true;
  }

  // add missing icon imports
  if (file.includes('BookingConfirmation.tsx') && content.includes('<FileText') && !content.includes('FileText,')) {
     content = content.replace(/import {([^}]+)} from 'lucide-react';/, "import {$1, FileText} from 'lucide-react';");
     changed = true;
  }

  if (file.includes('RentalVehicleDetail.tsx') && content.includes('<Clock') && !content.includes('Clock,')) {
     content = content.replace(/import {([^}]+)} from 'lucide-react';/, "import {$1, Clock} from 'lucide-react';");
     changed = true;
  }

  if (file.includes('BookingStep3.tsx') && content.includes('<HelpCircle') && !content.includes('HelpCircle,')) {
     content = content.replace(/import {([^}]+)} from 'lucide-react';/, "import {$1, HelpCircle} from 'lucide-react';");
     changed = true;
  }

  if (file.includes('TripManagementScreen.tsx') && content.includes('<Car') && !content.includes('Car,')) {
     content = content.replace(/import {([^}]+)} from 'lucide-react';/, "import {$1, Car} from 'lucide-react';");
     changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
  }
});
console.log('done running fixes');
