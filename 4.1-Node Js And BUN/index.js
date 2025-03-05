
/*
Assignments #1 - Create a cli

Create a `command line interface` that lets the user specify a file path and the nodejs process counts the number of words inside it.

Input - node index.js filePath
Output - You have 10 words in this file

Command - `node index.js count_words filePath`
*/






const fs = require('fs')  //internal module needed

const { Command } = require('commander');
const program = new Command();

function main(filename){
    fs.readFile(filename, 'utf-8', (err,data)=>{
        let countWord = 0;
        if(err){
            console.log(err);
        }
        for(let i =0;i<data.length;i++){
            if(data[i] == ' '){
                countWord++;
            }
        }
        console.log(countWord+1);
    })
}

// main("a.txt")
main(process.argv[2]);



/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

program
  .name('counter')      //name of the program 
  .description('CLI to do file based tasks')        //description og program like woh karta kya hai
  .version('0.8.0');            //version the program

program.command('count')            //yeh program bnaye hai jo..count command bnaye hai jo number of words ko count krta hai     
  .description('Count the number of lines in a file')       //yeh count ka description 
  .argument('<file>', 'file to count')          //yeh woh argument jo function ko chaiye woh count command ko execute krne ke liye chahiye
  .action((file) => {           //ab yeh uska action ki like woh count command execute hua toh karna kya hai
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split('\n').length;
        console.log(`There are ${lines} lines in ${file}`);
      }
    });
  });

program.parse();


// Note:
// To execute yeh command we have type "node THIS_FILE_NAME COMMAND_NAME NAME_OF_THE_OTHER_FILE_JISPE_COMMAND_OPERATE_KREGA" ...EX - 'node index.js count a.txt