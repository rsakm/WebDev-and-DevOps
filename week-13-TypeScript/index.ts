let x = 1;       //// type inferencing
console.log(x);

let y: number = 2;   /// y is number
console.log(y);


// x = "rajshree";   //// Error: type string is not assignable to type number

function greet(name: string){
    console.log("Hello "+name);
}


function sum(a: number, b:number){
    return a+b;    //// implicitly return type is number known as inferred return type
}

greet("Rajshree");
const add = sum(5,6);
console.log(add);


let z: any = 1;    /// any data type can be assigned, but it is not recommended
z=true;
z="Rajshree";

function isAdult(age: number){
    if(age>18){
        return true;
    }else{
        return false;
    }
}

const isAdult1 = isAdult(20);
console.log(isAdult1);


// // we can define the return type of a function explicitly as well
function plus(a: number, b: number): number{
    return a+b;   
}
const ans = plus(5,6);
console.log(ans);

function isLegal(age: number): boolean{
    if(age>18){
        return true;
    }else{
        return false;
    }
}
const isLegal1 = isLegal(20);
console.log(isLegal1);

// const add = plus("4",5);  ///Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// let add : string = plus(5, 6);   /// error: Type 'number' is not assignable to type 'string'.



function delayedCall(fn : () => void){   /// Whenever u give a function as an argument, the signature of the argument function should be passed

    setTimeout(fn, 1000);
}  //// void is return type so the function passed when calling delayedCall will not return anything and have no arguments

delayedCall(() => {
    console.log("Hello");
});


const fn = ()=>console.log("Hi Rajshree here!");