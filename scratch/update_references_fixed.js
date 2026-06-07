import fs from 'fs';
import path from 'path';

const PAGE_DIRS = [
  { dir: 'home', category: 'home' },
  { dir: 'about', category: 'about' },
  { dir: 'service', category: 'service' },
  { dir: 'service details', category: 'service-details' },
  { dir: 'project', category: 'project' },
  { dir: 'project details', category: 'project-details' },
  { dir: 'contact', category: 'contact' },
  { dir: 'form', category: 'contact' }
];

const backupRoot = 'c:/Users/Abhi/Desktop/RamtejaConstructions-New-design/_backup_original_html';
const publicDir = 'c:/Users/Abhi/Desktop/RamtejaConstructions-New-design/public';
const srcDir = 'c:/Users/Abhi/Desktop/RamtejaConstructions-New-design/src';
const indexHtmlPath = 'c:/Users/Abhi/Desktop/RamtejaConstructions-New-design/index.html';

console.log('--- STEP 1: Scan original backup folders to map image ownership ---');
const imageToPagesMap = {}; // filename -> Set of categories

PAGE_DIRS.forEach(page => {
  const imagesPath = path.join(backupRoot, page.dir, 'images');
  if (fs.existsSync(imagesPath)) {
    const files = fs.readdirSync(imagesPath);
    files.forEach(file => {
      const decodedFile = decodeURIComponent(file);
      if (!imageToPagesMap[decodedFile]) {
        imageToPagesMap[decodedFile] = new Set();
      }
      imageToPagesMap[decodedFile].add(page.category);
    });
  }
});

console.log('--- STEP 2: Generate movedImagesMap ---');
// Let's scan all categories inside public/images/ to see what files are actually there
const imagesRoot = path.join(publicDir, 'images');
const movedImagesMap = {};

const categories = fs.readdirSync(imagesRoot).filter(item => {
  return fs.statSync(path.join(imagesRoot, item)).isDirectory();
});

categories.forEach(cat => {
  const dirPath = path.join(imagesRoot, cat);
  const files = fs.readdirSync(dirPath);
  files.forEach(file => {
    // Both encoded and decoded filenames should map to the correct category
    movedImagesMap[file] = `/images/${cat}/${file}`;
    movedImagesMap[decodeURIComponent(file)] = `/images/${cat}/${file}`;
    movedImagesMap[file.replace(/%20/g, ' ')] = `/images/${cat}/${file}`;
    movedImagesMap[decodeURIComponent(file).replace(/%20/g, ' ')] = `/images/${cat}/${file}`;
  });
});

console.log(`Mapped ${Object.keys(movedImagesMap).length} image reference keys.`);

console.log('--- STEP 3: Generate JS files map ---');
const jsRoot = path.join(publicDir, 'js');
const movedJsMap = {};
const jsCategories = fs.readdirSync(jsRoot).filter(item => {
  return fs.statSync(path.join(jsRoot, item)).isDirectory();
});

jsCategories.forEach(cat => {
  const dirPath = path.join(jsRoot, cat);
  const files = fs.readdirSync(dirPath);
  files.forEach(file => {
    movedJsMap[file] = `/js/${cat}/${file}`;
  });
});

console.log('--- STEP 4: Update file references in codebase with FIXED regex ---');

function updateFileReferences(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Regex to match references to images. It matches '/images/page-name/filename' or '/images/filename'
  // Supporting space, percent encoding, and parenthesis in filenames, boundary-ended.
  const imageRegex = /(\/)?images\/([a-zA-Z0-9_\-\.]+)?\/([a-zA-Z0-9_\-\.\%\s\(\)]+?)(?=\s+\d+w|\s+\d+x|[\"\',]|\s*$)/g;
  content = content.replace(imageRegex, (match, leadingSlash, category, filename) => {
    const key = filename;
    if (movedImagesMap[key]) {
      return movedImagesMap[key];
    }
    const decodedKey = decodeURIComponent(filename);
    if (movedImagesMap[decodedKey]) {
      return movedImagesMap[decodedKey];
    }
    
    // Check if filename contains percent encoding or raw space
    const cleanedKey = filename.replace(/%20/g, ' ');
    if (movedImagesMap[cleanedKey]) {
      return movedImagesMap[cleanedKey];
    }
    
    return `/images/common/${filename}`;
  });

  // Also match any remaining old paths like '/images/filename'
  const plainImageRegex = /(\/)?images\/([a-zA-Z0-9_\-\.\%\s\(\)]+?)(?=\s+\d+w|\s+\d+x|[\"\',]|\s*$)/g;
  content = content.replace(plainImageRegex, (match, leadingSlash, filename) => {
    if (filename === 'common' || filename === 'home' || filename === 'about' || filename === 'service' || filename === 'service-details' || filename === 'project' || filename === 'project-details' || filename === 'contact') {
      return match;
    }
    const key = filename;
    if (movedImagesMap[key]) {
      return movedImagesMap[key];
    }
    const decodedKey = decodeURIComponent(filename);
    if (movedImagesMap[decodedKey]) {
      return movedImagesMap[decodedKey];
    }
    const cleanedKey = filename.replace(/%20/g, ' ');
    if (movedImagesMap[cleanedKey]) {
      return movedImagesMap[cleanedKey];
    }
    
    return `/images/common/${filename}`;
  });

  // Regex to match references to js files.
  const jsRegex = /(\/)?js\/([a-zA-Z0-9_\-\.]+)?\/([a-zA-Z0-9_\-\.\%\s\(\)]+)/g;
  content = content.replace(jsRegex, (match, leadingSlash, category, filename) => {
    if (movedJsMap[filename]) {
      return movedJsMap[filename];
    }
    return `/js/common/${filename}`;
  });

  // Plain JS regex
  const plainJsRegex = /(\/)?js\/([a-zA-Z0-9_\-\.\%\s\(\)]+)/g;
  content = content.replace(plainJsRegex, (match, leadingSlash, filename) => {
    if (filename === 'common' || filename === 'home' || filename === 'contact' || filename === 'project-details') {
      return match;
    }
    if (movedJsMap[filename]) {
      return movedJsMap[filename];
    }
    return `/js/common/${filename}`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated references in: ${path.basename(filePath)}`);
  }
}

// Update Pages
const pagesPath = path.join(srcDir, 'pages');
if (fs.existsSync(pagesPath)) {
  const files = fs.readdirSync(pagesPath);
  files.forEach(file => {
    if (file.endsWith('.jsx')) {
      updateFileReferences(path.join(pagesPath, file));
    }
  });
}

// Update Components
const componentsPath = path.join(srcDir, 'components');
if (fs.existsSync(componentsPath)) {
  const files = fs.readdirSync(componentsPath);
  files.forEach(file => {
    if (file.endsWith('.jsx')) {
      updateFileReferences(path.join(componentsPath, file));
    }
  });
}

// Update CSS
updateFileReferences(path.join(srcDir, 'index.css'));

// Update index.html
updateFileReferences(indexHtmlPath);

console.log('--- REFERENCE UPDATE COMPLETED SUCCESSFULLY ---');
