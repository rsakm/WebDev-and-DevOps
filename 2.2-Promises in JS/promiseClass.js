class Promises{
    constructor(fn){
        this.fn = fn;
        fn(()=>{
            this.resolve();
        })
    }
    then(callback){
        this.resolve = callback;
    }
}

function readTheFile(resolve){
    console.log('readTheFile called');
    setTimeout(function(){
        console.log('Callback based timeOut completed');
        resolve();
    },3000)
}

function setTimeoutPromisified(){
    return new Promises(readTheFile);
}
let p = setTimeoutPromisified()
function callback(){
    console.log('Callback called');
}
p.then(callback);




// //A promise expects a function that performs an actual asynchronous task. Once the async task is complete, call the argument of that function, passing in the data obtained from the async task. That data will then be passed to the function you define in '.then'.