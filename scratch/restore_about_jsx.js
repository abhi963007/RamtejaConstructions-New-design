import fs from 'fs';
import path from 'path';

const backupRoot = 'c:/Users/Abhi/Desktop/RamtejaConstructions-New-design/_backup_original_html';
const srcDir = 'c:/Users/Abhi/Desktop/RamtejaConstructions-New-design/src';
const publicDir = 'c:/Users/Abhi/Desktop/RamtejaConstructions-New-design/public';

// Read about.html lines
const aboutHtmlPath = path.join(backupRoot, 'about', 'about.html');
if (!fs.existsSync(aboutHtmlPath)) {
  console.error('about.html does not exist at:', aboutHtmlPath);
  process.exit(1);
}

const lines = fs.readFileSync(aboutHtmlPath, 'utf8').split('\n');

// Extract lines 349 to 1186 (1-indexed, so 348 to 1186 in 0-indexed array)
// Line 349 is "<section class=\"fda-about-new-hero\">"
// Line 1186 is "</section>" right before "</main>"
const mainContentHtml = lines.slice(348, 1186).join('\n');

function convertStyleAttribute(html) {
  return html.replace(/style="([^"]*)"/g, (match, styleStr) => {
    const declarations = styleStr.split(';').map(s => s.trim()).filter(Boolean);
    const reactStyles = {};
    declarations.forEach(decl => {
      const parts = decl.split(':');
      if (parts.length >= 2) {
        const prop = parts[0].trim();
        const value = parts.slice(1).join(':').trim();
        
        let camelProp = prop;
        if (prop.startsWith('-webkit-')) {
          camelProp = 'Webkit' + prop.slice(8).split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
        } else if (prop.startsWith('-moz-')) {
          camelProp = 'Moz' + prop.slice(5).split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
        } else if (prop.startsWith('-ms-')) {
          camelProp = 'Ms' + prop.slice(4).split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
        } else {
          camelProp = prop.split('-').map((w, idx) => idx === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1)).join('');
        }
        
        if (prop === 'opacity' && !isNaN(value)) {
          reactStyles[camelProp] = parseFloat(value);
        } else {
          reactStyles[camelProp] = value;
        }
      }
    });
    
    const styleObjStr = Object.entries(reactStyles).map(([k, v]) => {
      if (typeof v === 'number') {
        return `"${k}": ${v}`;
      } else {
        return `"${k}": "${v.replace(/"/g, '\\"')}"`;
      }
    }).join(', ');
    
    return `style={{${styleObjStr}}}`;
  });
}

function cleanHtmlToJsx(html) {
  let jsx = html;

  // 1. Replace class with className
  jsx = jsx.replace(/\bclass=/g, 'className=');

  // 2. Replace for with htmlFor
  jsx = jsx.replace(/\bfor=/g, 'htmlFor=');

  // 3. Convert style attributes
  jsx = convertStyleAttribute(jsx);

  // 4. Close self-closing tags
  // img, br, input, hr, link, meta
  jsx = jsx.replace(/<(img|br|input|hr|link|meta)([^>]*)(?<!\/)>/g, '<$1$2 />');

  // 5. Replace link tags
  const LINK_MAP = {
    '../home/home.html': '/',
    '../about/about.html': '/about',
    '../service/service.html': '/service',
    '../service details/service details.html': '/service-details',
    '../service%20details/service%20details.html': '/service-details',
    '../project/project.html': '/project',
    '../project details/project details.html': '/project-details',
    '../project%20details/project%20details.html': '/project-details',
    '../contact/contact.html': '/contact',
    '../form/form.html': '/form'
  };

  // Replace opening and closing <a> tags for internal links
  Object.entries(LINK_MAP).forEach(([key, val]) => {
    // Find each match and replace opening tag and corresponding closing tag
    let pos = 0;
    while (true) {
      // Find opening tag
      const hrefAttrStr = `href="${key}"`;
      const openIdx = jsx.indexOf(hrefAttrStr, pos);
      if (openIdx === -1) break;

      // Find the start of the <a tag before this href
      const tagStartIdx = jsx.lastIndexOf('<a', openIdx);
      if (tagStartIdx === -1 || tagStartIdx < pos) {
        pos = openIdx + hrefAttrStr.length;
        continue;
      }

      // Find the end of this opening tag
      const tagEndIdx = jsx.indexOf('>', openIdx);
      if (tagEndIdx === -1) {
        pos = openIdx + hrefAttrStr.length;
        continue;
      }

      // Find the next </a> tag after this opening tag
      const closeIdx = jsx.indexOf('</a>', tagEndIdx);
      if (closeIdx === -1) {
        pos = openIdx + hrefAttrStr.length;
        continue;
      }

      // Extract opening tag content
      let openTagContent = jsx.substring(tagStartIdx, tagEndIdx + 1);
      // Replace href="..." with to="..."
      let openTagRepl = openTagContent.replace('<a', '<Link').replace(hrefAttrStr, `to="${val}"`);

      // Construct the new string
      jsx = jsx.substring(0, tagStartIdx) + openTagRepl + jsx.substring(tagEndIdx + 1, closeIdx) + '</Link>' + jsx.substring(closeIdx + 4);

      // Advance pos past the new </Link> tag
      pos = tagStartIdx + openTagRepl.length + (closeIdx - (tagEndIdx + 1)) + '</Link>'.length;
    }
  });

  return jsx;
}

const cleanedJsx = cleanHtmlToJsx(mainContentHtml);

const finalJsx = `import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Navbar theme="dark" />
      <main>
${cleanedJsx}
      </main>
      <Footer />
    </>
  );
}
`;

fs.writeFileSync(path.join(srcDir, 'pages', 'About.jsx'), finalJsx, 'utf8');
console.log('Restored src/pages/About.jsx successfully!');
