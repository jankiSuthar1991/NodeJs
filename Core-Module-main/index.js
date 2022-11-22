

//synchronus(blocking)

const fs = require('fs');
// const textIn = fs.readFileSync('txtinput.txt','utf-8');
// console.log(textIn);

const txtdata = "this is writing method of node";
fs.writeFileSync('txtinput.txt',txtdata);
console.log('File Written..!');

//Async(Non-blocking)
// const fs = require('fs');
// const textIn = fs.readFile('txtinput.txt','utf-8',(err,data)=>{
//     console.log(data);
//     // console.log(err);
// });
// console.log("Reading file...");