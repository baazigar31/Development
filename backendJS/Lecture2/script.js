#!/usr/bin/env node

var argv=require('minimist')(process.argv.splice(2),{
    boolean:["anand"]
});


console.log("Hello World");

console.log(argv);
// console.log(process.argv.splice(2));
// var args=process.argv.splice(2);
// console.log(args[0]+" "+args[1]);