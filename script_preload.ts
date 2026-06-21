import * as fs from 'fs';

const newBidetImage = '/src/assets/images/lura_bidet_attachment_1782007146038.jpg';

const files = ['index.html'];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let html = fs.readFileSync(file, 'utf8');
    html = html.replace(/hero-hf\.webp/g, newBidetImage);
    fs.writeFileSync(file, html);
    console.log(`Updated preload in ${file}`);
  }
});
