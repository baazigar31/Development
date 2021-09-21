async function fun(data){
    console.log(data);
}
const f=fun("Shubham");
f.then(()=>{
    for(let i=0;i<10;i++){
        console.log(i);
    }
})
console.log("I am in main execution ");
console.log(typeof f);
console.log(f);
console.log("I am in main execution ");