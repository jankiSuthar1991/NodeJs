//synchronus(blocking)

const fs = require('fs');
// const textIn = fs.readFileSync('txtinput.txt','utf-8');
// console.log(textIn);

const txtdata = "this is writing method of node";
fs.writeFileSync('txtinput.txt',txtdata);
console.log('File Written..!');