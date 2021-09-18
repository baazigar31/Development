const fs = require("fs");
const transformStream = require("stream");
const zlib = require("zlib");


let zipper = zlib.createGzip();
let archiever = zlib.createGunzip();
let inputStream = fs.createReadStream(__dirname +"/input.txt");
// let outputStream = process.stdout;
let targetStream = fs.createWriteStream(__dirname + "/myfile.txt.gz");
// let unc=fs.createWriteStream(__dirname+"/uncompressed.txt");

// let midStream = new transformStream.Transform({
//     transform(chunk, enc, nextCB) {
//         this.push(chunk.toString().toUpperCase());
//         setTimeout(nextCB, 10000);
//     }
// });

inputStream.pipe(zipper).pipe(targetStream);
// let fromcmpressed=fs.createReadStream(__dirname+"/myfile.txt.gz");
// fromcmpressed.pipe(archiever).pipe(process.stdout);



// console.log("Shubham Anand another time");
// inputStream.pipe(midStream).pipe(outputStream);
// console.log("Shubham Anand first time");
// console.log("Shubham Anand another time");
