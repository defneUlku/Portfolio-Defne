const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
let files = [];
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(jsx?|mjs)$/.test(e.name)) files.push(p);
  }
}
walk('src');
let errors = 0;
for (const f of files) {
  try {
    const code = fs.readFileSync(f, 'utf8');
    parser.parse(code, { sourceType: 'module', plugins: ['jsx'] });
  } catch (err) {
    console.error('FAIL ' + f + ': ' + err.message);
    errors++;
  }
}
console.log((errors === 0 ? 'ALL OK' : errors + ' ERRORS') + ' (' + files.length + ' files)');
process.exit(errors > 0 ? 1 : 0);
