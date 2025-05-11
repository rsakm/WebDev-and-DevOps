const fs = require('fs');


// //Sync
fs.writeFileSync('test.txt', 'Hey There');


// //Async
// fs.writeFile('test.txt', 'Hey There', (err) => {
//     console.log(err);
// });


//Read File Sync
fs.readFile('test.txt', 'utf8', (err, data) => {
    console.log(data);
});


//Read File Async
fs.readFile('test.txt', 'utf8', (err, data) => {
    console.log(data);
});


// / Apend File
fs.appendFile('test.txt', 'I am appending', (err) => {
    console.log(err);
});

// Append File Async
fs.appendFile('test.txt', 'I am appending', (err) => {
    console.log(err);
});


// Rename File
fs.rename('test.txt', 'test2.txt', (err) => {
    console.log(err);
});


// copy File
// fs.copyFile('test2.txt', 'test3.txt', (err) => {
//     console.log(err);
// });

// Delete File
fs.unlink('test.txt', (err) => {
    console.log(err);
});
