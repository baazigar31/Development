var i=100;
function create(arr){
     i=7;
    function temp(){
        const el=arr[i];
        i++;
        return el;
    }
    i=1;
    return temp;
}
// i=1;
console.log(i);
const result=create([1,2,3,4,5,6,7,8,9]);
console.log(result);
console.log(result());
console.log(result());

console.log(1-"Shubham")
console.log(isNaN("Hi"));
console.log(isNaN(1/0));
console.log(1/0);
console.log(NaN==NaN);
console.log(Number.isNaN(NaN));
