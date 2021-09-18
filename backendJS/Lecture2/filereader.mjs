import {readFile, writeFile} from 'fs/promises';
import { url } from 'inspector';
// console.log(__dirname); not defined in es module

// console.log(import.meta.url);
// let template=readFile(new URL('./template.html',import.meta.url));
let template= await readFile(new URL('./template.html',import.meta.url),'utf-8');
console.log(template);
// process.stdin.write(template);
const templateData={
    name:'Shubham Anand'
}
for(const [k,v] of Object.entries(templateData)){
    template=template.replace( `{${k}}`,v);
}
console.log(template);
await writeFile(new URL('./index.html',import.meta.url), template);
