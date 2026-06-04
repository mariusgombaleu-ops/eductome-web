const fs = require('fs');
const css = fs.readFileSync('./dist/assets/index-Zh7tI5u6.css', 'utf8');
const darkClasses = css.match(/\.dark[^{]*\{/g);
if (darkClasses) {
    console.log("Found dark classes:", darkClasses.length);
    console.log(darkClasses.slice(0, 10).join('\n'));
} else {
    console.log("NO DARK CLASSES FOUND!");
}
