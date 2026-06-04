const fs = require('fs');
const css = fs.readFileSync('./dist/assets/index-Zh7tI5u6.css', 'utf8');
const darkClasses = css.match(/\.dark\\[^{]*\{/g) || [];
console.log("Found dark classes:", darkClasses.length);
console.log(darkClasses.join('\n'));
