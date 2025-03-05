//1......
//  Create a counter in JavaScript
// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript It should go up as time goes by in intervals of 1 second

let ctr = 0
function Stopwatch() {
    console.log(ctr); 

    ctr = ctr + 1;
}

setInterval(Stopwatch, 1000);

// setInterval - this will call the function after every 1 sec
// setTimeout - this will call the function only 1 time after a second
// Here ctr is initialized with 0 and we took it inside the function and incrementing its value and every 1 sec the setInterval function is calling it.


// 2------
// Counter without setInterval
// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)

let ctr1 = 0
function Stopwatch1() {
    console.log(ctr); 
    ctr1 = ctr1 + 1;

    setTimeout(Stopwatch1,1000);
}

setTimeout(Stopwatch1, 1000);


//Note:
//Kind of recursion ke jaise we are implementing setTimeout as asetInterval function.




// 3--------
// Reading the contents of a file
// Write code to read contents of a file and print it to the console. You can use the fs library to as a black box, the goal is to understand async tasks. Try to do an expensive operation below the file read and see how it affects the output. Make the expensive operation more and more expensive and see how it affects the output.

const fs = require ('fs'); //fs module ko import kra 

const filepath = 'Week-2/Day-2-ASYNC-JS/Easy/a.txt';  // yeh hamare file ka name aur uske address mtlb us file k path jispe read krwana hai

fs.readFile(filepath, 'utf-8', (err, data) => {     //yeh syntax hai file read karne ka where filepath, aur ee aur data we are passing jispe if kuch error hua toh err return krega warna it will return the data 
    if(err){
        console.log('Error in file :', err);        
        return        
    }
    console.log('File content:', data);
});

function expensiveOperation(){      //this is the expensive operation jispe sum calculate krega 
    let sum = 0; 
    for (let index = 0; index < 1e8; index++) {        //1e8 is scientific notation for 100,000,000 jiske wajh se loop bhot long tym ke liye chale 
        sum = sum + index;
    }
    console.log("Expensive operation completed and its result : ", sum);   
}
expensiveOperation();

// Note :
// This question is for understanding the concept of Async js 
// where we are reading data from external file and we are performing expensive operation jisse ki like file read hote-hote bhi loop ka task hota rhega and after completing the fs reading task will be done  


// 4--------
// Write to a file
// Using the fs library again, try to write to the contents of a file. You can use the fs library to as a black box, the goal is to understand async tasks.
const fs = require ('fs'); //fs module ko import kra 

const data = 'Input data from Q4 file.'

const filepath1 = 'Week-2/Day-2-ASYNC-JS/Easy/b.txt';  // yeh hamare file ka name aur uske address mtlb us file k path jispe read krwana hai

fs.writeFile(filepath1, data , (err) => {     //yeh syntax hai file write karne ka where filepath, aur ee aur data we are passing jispe if kuch error hua toh err return krega warna it will return the data 
    if(err){
        console.log('Error in file :', err);        
        return        
    }
    console.log("Data written in b.txt, Now you can the file!");
});


function expensiveOperation1(){      //this is the expensive operation jispe sum calculate krega 
    let sum = 0; 
    for (let index = 0; index < 1e8; index++) {        //1e8 is scientific notation for 100,000,000 jiske wajh se loop bhot long tym ke liye chale 
        sum = sum + index;
    }
    console.log("Expensive operation 1 completed and its result : ", sum);   
}


expensiveOperation1();