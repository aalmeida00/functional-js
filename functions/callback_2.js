const fs = require('fs');
const path = require('path');


const filePath = path.join(__dirname, 'data.txt');


const showContent = (_, data) => {
  console.log(data.toString())
}

fs.readFile(filePath, showContent)
fs.readFile(filePath, (_, data) => console.log(data.toString()))

const content = fs.readFileSync(path)
console.log(content.toString())