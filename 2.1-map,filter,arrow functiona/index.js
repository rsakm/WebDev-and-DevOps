//  // Arrow functions

function sum(a,b){
    return a+b
}

const sum = (a,b)=>{
    return a+b
}

app.get('/',(req,res)=>{})


// // map

const input = [1,2,3,4,5]

// map(input,(i)=>{
//     i*2
// })

const ans = input.map((ele)=>ele*2);
console.log(ans);  //// [2,4,6,8,10]

///   //   /    filter()

const arr = [2,3,4,5,9,7,6,11]
const odd = arr.filter((ele)=> ele%2 != 0);



