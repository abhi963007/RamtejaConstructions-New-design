"import fs from 'fs';\
import path from 'path';\
\
const PAGES = [\
  { name: 'Home', file: 'home/home.html', theme: 'dark', dest: 'src/pages/Home.jsx' },\
  { name: 'About', file: 'about/about.html', theme: 'dark', dest: 'src/pages/About.jsx' },\
  { name: 'Service', file: 'service/service.html', theme: 'dark', dest: 'src/pages/Service.jsx' },\
  { name: 'ServiceDetails', file: 'service details/service details.html', theme: 'dark', dest: 'src/pages/ServiceDetails.jsx' },\
  { name: 'Project', file: 'project/project.html', theme: 'dark', dest: 'src/pages/Project.jsx' },\
  { name: 'ProjectDetails', file: 'project details/project details.html', theme: 'dark', dest: 'src/pages/ProjectDetails.jsx' },\
  { name: 'Contact', file: 'contact/contact.html', theme: 'light', dest: 'src/pages/Contact.jsx' },\
  { name: 'Form', file: 'form/form.html', theme: 'light', dest: 'src/pages/Form.jsx' },\
];\
\
function cleanHtmlToJsx(html) {\
  let jsx = html;\
\
  // 1. Replace class with className\
  jsx = jsx.replace(/\\bclass=/g, 'className=');\
\
  // 2. Replace relative image src and srcset paths with absolute public folder paths\
  jsx = jsx.replace(/(src|srcset)=\"(?:\\.\\.\\/)*images\\//g, '$1=\"/images/');\
  // Specifically fix urlencoded paths if any\
  jsx = jsx.replace(/(src|srcset)=\"(?:\\.\\.\\/)*images%20/g, '$1=\"/images/');\
  jsx = jsx.replace(/\\/images%20/g, '/images/');\
  jsx = jsx.replace(/\\/images\\/([a-zA-Z0-9_-]+)%20([a-zA-Z0-9_-]+)/g, '/images/$1 $2');\
\
  // Let's also fix custom background images inside inline style tags if any\
  jsx = jsx.replace(/style=\"background-image:url\\((['\"]?)(?:\\.\\.\\/)*images\\//g, 'style={{backgroundImage: \"url($1/images/');\
  jsx = jsx.replace(/style=\"opacity:0\"/g, 'style={{opacity:0}}');\
  jsx = jsx.replace(/style=\"background-color:rgba\\(243,180,30,0\\)\"/g, 'style={{backgroundColor: \"rgba(243,180,30,0)\"}}');\
  jsx = jsx.replace(/style=\"color:rgb\\(255,255,255\\)\"/g, 'style={{color: \"rgb(255,255,255)\"}}');\
  jsx = jsx.replace(/style=\"-webkit-transfo
<truncated 5320 bytes>