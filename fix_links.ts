import fs from 'fs';
import path from 'path';

function replaceInFile(filePath: string, search: string, replacement: string) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes(search)) {
    content = content.replace(new RegExp(search, 'g'), replacement);
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

replaceInFile('src/components/HelpSupport.tsx', 'to="/faq"', 'to="/rental-faqs"');
replaceInFile('src/components/EmergencyHotline.tsx', 'to="/contact"', 'to="/help-support"');
replaceInFile('src/components/RentalFaqs.tsx', 'to="/contact"', 'to="/help-support"');
replaceInFile('src/components/ManageReservation.tsx', 'to="/contact"', 'to="/help-support"');

console.log('Fixed simple links');
