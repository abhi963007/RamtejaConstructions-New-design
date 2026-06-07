import fs from 'fs';
import path from 'path';

// Define original directories and their corresponding public categories
const PAGE_DIRS = [
  { dir: 'home', category: 'home' },
  { dir: 'about', category: 'about' },
  { dir: 'service', category: 'service' },
  { dir: 'service details', category: 'service-details' },
  { dir: 'project', category: 'project' },
  { dir: 'project details', category: 'project-details' },
  { dir: 'contact', category: 'contact' },
  { dir: 'form', category: 'form' }
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

console.log(`Mapped ${Object.keys(imageToPagesMap).length} unique image filenames.`);

console.log('--- STEP 2: Create subdirectories in public/images and public/js ---');
const imageCategories = ['common', ...PAGE_DIRS.map(p => p.category)];
const jsCategories = ['common', 'home', 'form', 'project-details'];

imageCategories.forEach(cat => {
  const dirPath = path.join(publicDir, 'images', cat);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

jsCategories.forEach(cat => {
  const dirPath = path.join(publicDir, 'js', cat);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

console.log('--- STEP 3: Reorganize image files in public/images ---');
const rootImagesPath = path.join(publicDir, 'images');
const imagesInRoot = fs.readdirSync(rootImagesPath).filter(file => {
  const stat = fs.statSync(path.join(rootImagesPath, file));
  return stat.isFile();
});

const movedImagesMap = {}; // original_filename -> new path starting with /images/

imagesInRoot.forEach(file => {
  const decodedFile = decodeURIComponent(file);
  let targetCategory = 'common';

  if (imageToPagesMap[decodedFile]) {
    const pages = Array.from(imageToPagesMap[decodedFile]);
    if (pages.length === 1) {
      targetCategory = pages[0];
    } else {
      // Shared by multiple pages
      targetCategory = 'common';
    }
  }

  const srcPath = path.join(rootImagesPath, file);
  const destPath = path.join(rootImagesPath, targetCategory, file);

  fs.copyFileSync(srcPath, destPath);
  fs.unlinkSync(srcPath);

  // Store mapping for path replacement (keep the URL encoding of the original file)
  movedImagesMap[file] = `/images/${targetCategory}/${file}`;
});

console.log(`Reorganized ${imagesInRoot.length} image files.`);

console.log('--- STEP 4: Reorganize Javascript files in public/js ---');
const rootJsPath = path.join(publicDir, 'js');
const jsInRoot = fs.readdirSync(rootJsPath).filter(file => {
  const stat = fs.statSync(path.join(rootJsPath, file));
  return stat.isFile();
});

const movedJsMap = {}; // filename -> new path starting with /js/

jsInRoot.forEach(file => {
  let targetCategory = 'common';

  if (file === 'webflow.8581ccba.2136686d60aa104e.js') {
    targetCategory = 'home';
  } else if (file === 'webflow.bf6fdb9c.54eec54e7f22a903.js') {
    targetCategory = 'form';
  } else if (file === 'webflow.ad081a6e.f529453a1d662d78.js') {
    targetCategory = 'project-details';
  }

  const srcPath = path.join(rootJsPath, file);
  const destPath = path.join(rootJsPath, targetCategory, file);

  fs.copyFileSync(srcPath, destPath);
  fs.unlinkSync(srcPath);

  movedJsMap[file] = `/js/${targetCategory}/${file}`;
});

console.log(`Reorganized ${jsInRoot.length} JS files.`);

console.log('--- STEP 5: Update file references in JSX, CSS, HTML ---');

// Helper function to update references in a single file
function updateFileReferences(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Regex to match references to images. It matches '/images/filename' or 'images/filename'
  // where filename is anything up to a quote, space, or special delimiter.
  const imageRegex = /(\/)?images\/([a-zA-Z0-9_\-\.\%]+)/g;
  content = content.replace(imageRegex, (match, leadingSlash, filename) => {
    // Decode filename to lookup, but we'll map using the encoded filename (key in movedImagesMap)
    const encodedKey = filename;
    if (movedImagesMap[encodedKey]) {
      return movedImagesMap[encodedKey];
    }
    
    // If not direct match, check if decoded matches
    const decodedKey = decodeURIComponent(filename);
    const foundEncodedKey = Object.keys(movedImagesMap).find(k => decodeURIComponent(k) === decodedKey);
    if (foundEncodedKey && movedImagesMap[foundEncodedKey]) {
      return movedImagesMap[foundEncodedKey];
    }

    // Default fallback if not found in map
    return `/images/common/${filename}`;
  });

  // Regex to match references to js files.
  const jsRegex = /(\/)?js\/([a-zA-Z0-9_\-\.\%]+)/g;
  content = content.replace(jsRegex, (match, leadingSlash, filename) => {
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

// 1. Update pages
const pagesPath = path.join(srcDir, 'pages');
if (fs.existsSync(pagesPath)) {
  const files = fs.readdirSync(pagesPath);
  files.forEach(file => {
    if (file.endsWith('.jsx')) {
      updateFileReferences(path.join(pagesPath, file));
    }
  });
}

// 2. Update components
const componentsPath = path.join(srcDir, 'components');
if (fs.existsSync(componentsPath)) {
  const files = fs.readdirSync(componentsPath);
  files.forEach(file => {
    if (file.endsWith('.jsx')) {
      updateFileReferences(path.join(componentsPath, file));
    }
  });
}

// 3. Update CSS
updateFileReferences(path.join(srcDir, 'index.css'));

// 4. Update index.html
updateFileReferences(indexHtmlPath);

console.log('--- REORGANIZATION COMPLETED SUCCESSFULY ---');
