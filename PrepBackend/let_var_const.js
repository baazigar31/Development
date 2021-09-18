//Hoisting

print_hello();



function print_hello(){
    console.log("Hi, Shubham");
}

var x=10; // Here the scope is global 
if(x==10){
    var x=20; /*here also the scope will be global as var will either have functional scope or global scope.*/
    console.log(x);
}
console.log(x);

var s=10;
var s=20;

console.log(a);
// console.log(b);
var a=20;
let b=10;

setTimeout(function fun(){
    console.log("Shubham");
},5000);
