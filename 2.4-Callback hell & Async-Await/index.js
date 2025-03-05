function promisifiedSetTimeOut(duration){
    return new Promise((resolve)=>{
        setTimeout(resolve, duration)
    })
};

// promisifiedSetTimeOut(3000).then(callback);

// function callback(){
//     console.log('promise resolved...!');
// }


/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */


// // CallBack Hell
setTimeout(() => {
    console.log('First time out...!');
    setTimeout(()=>{
        console.log('Second time Out...!!');
    },3000);
    setTimeout(()=>{
        console.log('third timeOut ...!!!');
    },5000)
}, 1000);

// This nested creates the callback hell
// To solve the problem of callback hell we can use promise

// Above we have already created the promisified version of the setTimeOut

console.log('Solving callback hell by using Promise. ');
promisifiedSetTimeOut(1000).then(()=>{console.log('First timeOut...!')
    promisifiedSetTimeOut(3000).then(()=>{
        console.log('Second TimeOut...!!');
        promisifiedSetTimeOut(5000).then(()=>{
            console.log('Third timeOut...!!!');
        },5000)
    },3000)
});


// //Promise Chaining
promisifiedSetTimeOut(1000).then(()=>{
    console.log('First One...!');
    return promisifiedSetTimeOut(3000)
}).then(()=>{
    console.log('Second One...!!');
    return promisifiedSetTimeOut(5000)
}).then(()=>{
    console.log('Third One...!!!');
})



/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

// // Async Await

async function solve(){
    await promisifiedSetTimeOut(1000)
    console.log('first');
    await promisifiedSetTimeOut(3000)
    console.log('Second');
    await promisifiedSetTimeOut(5000)
    console.log('Third');
}
solve();