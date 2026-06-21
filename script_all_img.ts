import * as fs from 'fs';

const newBidetImage = '/src/assets/images/lura_bidet_attachment_1782007146038.jpg';

const files = ['about.html', 'pricing.html', 'service.html', 'technology.html'];

const repl = [
  /Morning smoothie\.webp/g,
  /Untitled_design_16\.webp/g,
  /Untitled_design_14\.webp/g,
  /Untitled_design_17\.webp/g,
  /Untitled_design_15\.webp/g,
  /Untitled_design_18\.webp/g,
  /hero-hf\.webp/g,
  /magnific__change-the-white-top-colour-to-bottle-green-and-re__26436\.jpg/g,
  /without logo\.webp/g,
  /Fix Mistake\.webp/g,
  /Form_section\.webp/g,
  /U-Index-hero\.webp/g,
  /magnific_do-the-same-image-in-11_EqM8DXZuuO\.webp/g
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let html = fs.readFileSync(file, 'utf8');
    repl.forEach(regex => {
      html = html.replace(regex, newBidetImage);
    });
    fs.writeFileSync(file, html);
    console.log(`Updated images in ${file}`);
  }
});
