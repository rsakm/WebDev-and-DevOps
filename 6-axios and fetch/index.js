// // axios vs fetch 





// function fetchRequest(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(async response => {
//         const json = await response.json();
//         console.log(json);
//     })
// }

// fetchRequest();

// //  The async inside .then() is unnecessary.

// //  It makes the function return a Promise 
// inside .then(), but .then() doesn't wait for it.

// //   Potential Unhandled Errors:

// //   If an error occurs in await response.json(), there is no .catch() block to handle it.

// //  Fetches data from the API.
// //   Enters .then(), where the function is marked async.
// //   await response.json() runs inside .then(), but the outer .then() doesn't wait for it explicitly.
// //   Works, but is unnecessary & incorrect usage of await.


// // So the correct and better way of using fetch wit async function is: 
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// fetchData();





// // better way of using fetch: 

function sendRequest(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
    })
}

// sendRequest()

function postFetchRequest(){
    fetch('https://jsonplaceholder.typicode.com/posts',{method:"POST"}) // simiarly put,delete and other methods in fetch

    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
    })
}




// // Axios:
const axios = require("axios")
async function axiosRequest() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    // const json = await response.json()
    console.log(response.data);
}

axiosRequest()

function getData1() {
    axios.get("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => console.log(response.data))
        .catch((error) => console.error(error));
}

// Function to fetch data using axios library - Async/Await version
async function getData2() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}


async function axiosPostRequest() {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts')
    // const json = await response.json()
    console.log(response.data);
}


// //Similarly:
// // axios.put()
// // axios.delete()
// // axios.patch() etc




// POST request using axios
// Function to post data using axios library - Promise version
function postData1() {
    axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: "Hi",
        body: "bar",
        userId: 1
    }, {
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": "Bearer my token"
        }
    })
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error));
}

// Function to post data using axios library - Async/Await version
async function postData2() {
    try {
        /*
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: "Hello",
            body: "bar",
            userId: 1
        }, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "Bearer my token"
            }
        });
        */
        const response = await axios({
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "POST",
            data: {
                title: "Hello",
                body: "bar",
                userId: 1
            },
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "Bearer my token"
            }   
        });

        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

// Call the functions
postData1();
postData2();