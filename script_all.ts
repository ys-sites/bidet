import * as fs from 'fs';
import * as path from 'path';

const bidetImage = '8fa37f90-1cfa-4db7-874f-a9db1f2be80a.png';

const blanketReplacements = [
  [/SimpliiGood/gi, "LURA"],
  [/fresh-frozen/gi, "premium design"],
  [/spirulina/gi, "bidet"],
  [/Spirulina/g, "Bidet"],
  [/superfood/gi, "hygiene essential"],
  [/greens and micronutrients/gi, "everyday cleanliness"],
  [/Real\. Super\. Food\./gi, "Absolute. Pure. Clean."],
  [/solar-powered nutrient factory/gi, "water-powered hygiene upgrade"],
];

const htmlFiles = ['about.html', 'pricing.html', 'service.html', 'technology.html'];

htmlFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let html = fs.readFileSync(file, 'utf8');
    blanketReplacements.forEach(([regex, repl]) => {
      html = html.replace(regex, repl as string);
    });
    fs.writeFileSync(file, html);
    console.log(`Updated ${file}`);
  }
});
