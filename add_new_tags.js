const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'data.js');
let data = fs.readFileSync(filePath, 'utf-8');

const regex = /("tags"\s*:\s*\{)([^}]+)\}/g;
let count = 0;
data = data.replace(regex, (match, prefix, content) => {
  if (count < 14) {
    count++;
    if (!content.includes('"new"')) {
      return prefix + '\n      "new": true,' + content + '}';
    }
  }
  return match;
});

fs.writeFileSync(filePath, data, 'utf-8');
console.log('Added "new": true to the first 14 products.');
