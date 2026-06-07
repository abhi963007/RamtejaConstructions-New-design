import fs from 'fs';
import path from 'path';

const publicDir = 'c:/Users/Abhi/Desktop/RamtejaConstructions-New-design/public';
const imagesRoot = path.join(publicDir, 'images');

const movedImagesMap = {};
const categories = fs.readdirSync(imagesRoot).filter(item => {
  return fs.statSync(path.join(imagesRoot, item)).isDirectory();
});

categories.forEach(cat => {
  const dirPath = path.join(imagesRoot, cat);
  const files = fs.readdirSync(dirPath);
  files.forEach(file => {
    movedImagesMap[file] = `/images/${cat}/${file}`;
    movedImagesMap[decodeURIComponent(file)] = `/images/${cat}/${file}`;
    movedImagesMap[file.replace(/%20/g, ' ')] = `/images/${cat}/${file}`;
    movedImagesMap[decodeURIComponent(file).replace(/%20/g, ' ')] = `/images/${cat}/${file}`;
  });
});

const testStrings = [
  'srcset="/images/common/698ad93b44ac327917a0ee06_We serve%20left%20image%281%29-p-500.webp 500w, /images/common/698ad93b44ac327917a0ee06_We serve left image(1)-p-800.webp 800w"',
  'src="/images/common/698ab9dcbf9ac43576c540f7_Testimonial author image.png"',
  'url("/images/common/698ad8778a7632a83e34f56b_bottom-bridge 1.webp")'
];

// Lazily match characters, but stop before space-descriptor or quotes or commas
const imageRegex = /(\/)?images\/([a-zA-Z0-9_\-\.]+)?\/([a-zA-Z0-9_\-\.\%\s\(\)]+?)(?=\s+\d+w|\s+\d+x|[\"\',]|\s*$)/g;

testStrings.forEach(testStr => {
  console.log('--- TEST ---');
  testStr.replace(imageRegex, (match, leadingSlash, category, filename) => {
    console.log('MATCH:', match);
    console.log('category:', category);
    console.log('filename:', filename);
    const decoded = decodeURIComponent(filename);
    console.log('decoded:', decoded);
    console.log('mapped:', movedImagesMap[decoded] || movedImagesMap[filename]);
    return match;
  });
});
