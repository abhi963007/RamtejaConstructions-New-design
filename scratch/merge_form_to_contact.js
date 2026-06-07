import fs from 'fs';
import path from 'path';

// Page directories mapping
// Both 'contact' and 'form' map to the 'contact' category
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

console.log('--- STEP 1: Restore images and JS files to public/ root for recategorization ---');

const imagesRoot = path.join(publicDir, 'images');
const jsRoot = path.join(publicDir, 'js');

// Helper to pull files out of subdirectories to root
function flattenDirectory(rootDir) {
  if (!fs.existsSync(rootDir)) return;
  const items = fs.readdirSync(rootDir);
  items.forEach(item => {
    const itemPath = path.join(rootDir, item);
    const stat = fs.statSync(itemPath);
    if (stat.isDirectory()) {
      const files = fs.readdirSync(itemPath);
      files.forEach(file => {
        const src = path.join(itemPath, file);
        const dest = path.join(rootDir, file);
        if (fs.existsSync(dest)) {
          fs.unlinkSync(dest); // Clean target if exists
        }
        fs.renameSync(src, dest);
      });
      // Delete directory
      fs.rmdirSync(itemPath);
    }
  });
}

flattenDirectory(imagesRoot);
flattenDirectory(jsRoot);

console.log('--- STEP 2: Scan original backup folders to map image ownership ---');
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

console.log('--- STEP 3: Create new categorized subdirectories (excluding form) ---');
const imageCategories = ['common', 'home', 'about', 'service', 'service-details', 'project', 'project-details', 'contact'];
const jsCategories = ['common', 'home', 'contact', 'project-details'];

imageCategories.forEach(cat => {
  const dirPath = path.join(imagesRoot, cat);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

jsCategories.forEach(cat => {
  const dirPath = path.join(jsRoot, cat);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

console.log('--- STEP 4: Categorize and move image files ---');
const imagesInRoot = fs.readdirSync(imagesRoot).filter(file => {
  return fs.statSync(path.join(imagesRoot, file)).isFile();
});

const movedImagesMap = {};

imagesInRoot.forEach(file => {
  const decodedFile = decodeURIComponent(file);
  let targetCategory = 'common';

  if (imageToPagesMap[decodedFile]) {
    const pages = Array.from(imageToPagesMap[decodedFile]);
    if (pages.length === 1) {
      targetCategory = pages[0];
    } else {
      // Shared by multiple pages (e.g. home and about)
      targetCategory = 'common';
    }
  }

  const srcPath = path.join(imagesRoot, file);
  const destPath = path.join(imagesRoot, targetCategory, file);

  if (fs.existsSync(destPath)) {
    fs.unlinkSync(destPath);
  }
  fs.renameSync(srcPath, destPath);

  movedImagesMap[file] = `/images/${targetCategory}/${file}`;
});

console.log(`Categorized and moved ${imagesInRoot.length} image files.`);

console.log('--- STEP 5: Categorize and move JS files ---');
const jsInRoot = fs.readdirSync(jsRoot).filter(file => {
  return fs.statSync(path.join(jsRoot, file)).isFile();
});

const movedJsMap = {};

jsInRoot.forEach(file => {
  let targetCategory = 'common';

  if (file === 'webflow.8581ccba.2136686d60aa104e.js') {
    targetCategory = 'home';
  } else if (file === 'webflow.bf6fdb9c.54eec54e7f22a903.js') {
    targetCategory = 'contact'; // Maps to contact instead of form
  } else if (file === 'webflow.ad081a6e.f529453a1d662d78.js') {
    targetCategory = 'project-details';
  }

  const srcPath = path.join(jsRoot, file);
  const destPath = path.join(jsRoot, targetCategory, file);

  if (fs.existsSync(destPath)) {
    fs.unlinkSync(destPath);
  }
  fs.renameSync(srcPath, destPath);


  movedJsMap[file] = `/js/${targetCategory}/${file}`;
});

console.log(`Categorized and moved ${jsInRoot.length} JS files.`);

console.log('--- STEP 6: Update file references in codebase ---');

function updateFileReferences(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Regex to match references to images. It matches '/images/page-name/filename' or '/images/filename'
  // We match '/images/([a-zA-Z0-9_\-\.]+)?/filename'
  const imageRegex = /(\/)?images\/([a-zA-Z0-9_\-\.]+)?\/([a-zA-Z0-9_\-\.\%]+)/g;
  content = content.replace(imageRegex, (match, leadingSlash, category, filename) => {
    const encodedKey = filename;
    if (movedImagesMap[encodedKey]) {
      return movedImagesMap[encodedKey];
    }
    const decodedKey = decodeURIComponent(filename);
    const foundEncodedKey = Object.keys(movedImagesMap).find(k => decodeURIComponent(k) === decodedKey);
    if (foundEncodedKey && movedImagesMap[foundEncodedKey]) {
      return movedImagesMap[foundEncodedKey];
    }
    return `/images/common/${filename}`;
  });

  // Also match any remaining old paths like '/images/filename'
  const plainImageRegex = /(\/)?images\/([a-zA-Z0-9_\-\.\%]+)/g;
  content = content.replace(plainImageRegex, (match, leadingSlash, filename) => {
    // If it was already replaced by the previous regex, we skip
    if (filename === 'common' || filename === 'home' || filename === 'about' || filename === 'service' || filename === 'service-details' || filename === 'project' || filename === 'project-details' || filename === 'contact') {
      return match;
    }
    const encodedKey = filename;
    if (movedImagesMap[encodedKey]) {
      return movedImagesMap[encodedKey];
    }
    return `/images/common/${filename}`;
  });

  // Regex to match references to js files.
  const jsRegex = /(\/)?js\/([a-zA-Z0-9_\-\.]+)?\/([a-zA-Z0-9_\-\.\%]+)/g;
  content = content.replace(jsRegex, (match, leadingSlash, category, filename) => {
    if (movedJsMap[filename]) {
      return movedJsMap[filename];
    }
    return `/js/common/${filename}`;
  });

  // Plain JS regex
  const plainJsRegex = /(\/)?js\/([a-zA-Z0-9_\-\.\%]+)/g;
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

console.log('--- STEP 7: Check files moved to public/images/contact ---');
const contactImages = fs.readdirSync(path.join(imagesRoot, 'contact'));
console.log(`Images in contact directory: ${contactImages.length}`);
contactImages.forEach(img => console.log(` - ${img}`));

console.log('--- REORGANIZATION COMPLETED SUCCESSFULY ---');
