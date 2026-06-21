import * as fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

const oldBidetImage = '8fa37f90-1cfa-4db7-874f-a9db1f2be80a.png';
const newBidetImage = '/src/assets/images/lura_bidet_attachment_1782007146038.jpg';

const escapedOld = oldBidetImage.replace(/\./g, '\\.');
const regex = new RegExp(escapedOld, 'g');

html = html.replace(regex, newBidetImage);

fs.writeFileSync('index.html', html);
console.log('Update bidet image complete.');
