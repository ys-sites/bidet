import * as fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

const bidetImage = '8fa37f90-1cfa-4db7-874f-a9db1f2be80a.png';

const replacements = [
  [/src="Morning smoothie\.webp"/g, `src="${bidetImage}"`],
  [/src="Untitled_design_16\.webp"/g, `src="${bidetImage}"`],
  [/src="Untitled_design_14\.webp"/g, `src="${bidetImage}"`],
  [/src="Untitled_design_17\.webp"/g, `src="${bidetImage}"`],
  [/src="Untitled_design_15\.webp"/g, `src="${bidetImage}"`],
  [/src="Untitled_design_18\.webp"/g, `src="${bidetImage}"`]
];

replacements.forEach(([regex, replacement]) => {
  html = html.replace(regex, replacement);
});

fs.writeFileSync('index.html', html);
console.log('Update more images complete.');
