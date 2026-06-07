const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\Abhi\\.gemini\\antigravity-ide\\brain\\044e2d41-56de-414d-b875-e42e1fc61410\\.system_generated\\logs\\transcript.jsonl';
if (!fs.existsSync(logPath)) {
  console.log('Log file does not exist at:', logPath);
  process.exit(1);
}

const fileContent = fs.readFileSync(logPath, 'utf8');
const lines = fileContent.split('\n');

// Find lines containing convert_html_to_jsx.js
for (const line of lines) {
  if (line.includes('convert_html_to_jsx.js') && line.includes('CodeContent')) {
    // Let's parse it manually because of truncation or string issues
    const codeContentIndex = line.indexOf('"CodeContent":"');
    if (codeContentIndex !== -1) {
      const start = codeContentIndex + '"CodeContent":"'.length;
      // Find the end by looking for ","Description"
      const end = line.indexOf('","Description"', start);
      if (end !== -1) {
        let rawContent = line.substring(start, end);
        // Clean up escaped newlines, quotes, backslashes
        // The content in JSON is escaped, so double backslashes for \n, etc.
        let content = rawContent
          .replace(/\\n/g, '\n')
          .replace(/\\"/g, '"')
          .replace(/\\\\/g, '\\')
          .replace(/\\r/g, '\r')
          .replace(/\\t/g, '\t');
        
        fs.writeFileSync('scratch/convert_html_to_jsx.js', content, 'utf8');
        console.log('Extracted convert_html_to_jsx.js successfully!');
        process.exit(0);
      }
    }
  }
}

console.log('Could not find convert_html_to_jsx.js CodeContent in log.');
