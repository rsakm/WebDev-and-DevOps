// function sum(n){
//     let ans = 0;
//     for(let i =0;i<=n;i++){
//         ans+=i;
//     }
//     return ans;
// }

// const ans = sum(10);
// console.log(ans);


// const fs = require("fs");

// const contents = fs.readFileSync("a.txt","utf-8");
// console.log(contents);

// const contents2 = fs.readFileSync("b.txt","utf-8");
// console.log(contents2);


// //Asynchronously:

const fs = require("fs")
function print(err, data){
    if(err){
        console.log("File not found !");
    }else
        console.log(data);
}

fs.readFile("a.txt", "utf-8", print)
fs.readFile("c.txt", "utf-8", print)

setTimeout(()=>{
    console.log('timeout');
},0)
console.log('Done !');


// 
/*
function readFile(filePath, encoding, callbackFunction){

// read file
callbackFunction("error !!", contentsOfFile)
}
*/