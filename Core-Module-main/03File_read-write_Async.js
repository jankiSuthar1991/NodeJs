//Async(Non-blocking)
const fs = require('fs');
// const textIn = fs.readFile('txtinput.txt','utf-8',(err,data)=>{
//     console.log(data);
// });
// console.log("Reading file...");

 fs.readFile('txtinput.txt','utf-8',(err,data1)=>{
    fs.readFile('txtinput.txt','utf-8',(err,data2)=>{
        console.log(data2);
        fs.readFile('another.txt','utf-8',(err,data3)=>{
            console.log(data3);
        fs.writeFile('write.txt',`${data2}\n${data3}`,'utf-8',err=>{
            console.log("Yor file has been Written!");
        });
        });
    });
});
console.log("Reading file...");