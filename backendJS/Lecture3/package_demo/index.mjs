import open from "open";
// var open=require("open");
// const fetch=require("node-fetch");
import fetch from "node-fetch";
const response= await fetch("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=240&date=19-09-2021");


// using promise response is a promise and response.json() is also a promise
// response
// .then(res=>res.json())
// .then(json=>console.log(json));

//using await 
const data=await response.json();
console.log(data);
data.sessions.forEach(element => {
    console.log(element.name,element.vaccine);
});



// console.log(response); 

//  open("https://www.linkedin.com",{app: {name: 'google chrome', arguments: ['--incognito']}});