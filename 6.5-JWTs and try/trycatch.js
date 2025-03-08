// function to return length of the string
function getLength(string) {
    return string.length;
}

// call getLength() function with argument "Bharat"
const ans1 = getLength("Rajshree");

// print ans1 to console
console.log(ans1);

/*
// call getLength() function without argument
const ans2 = getLength();
// // or
getLength(34)

// print ans2 to console
console.log(ans2); // This will throw an error
*/

// try block to handle error
try {
    // call getLength() function without argument
    // const ans3 = getLength(345);  //undefined


    // print ans3 to console
    // console.log(ans3);

    console.log(getLength()); //output is error msg:  Cannot read properties of undefined (reading 'length')
} catch (error) {
    // print error message to console
    console.log(error.message);
}


// // if any exception takes place control will reach catch block otherwise the try statement gets executed.

