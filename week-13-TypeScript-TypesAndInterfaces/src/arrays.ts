
function getMax(arr: number[]) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


const max = getMax([1, 2, 3, 4, 5]);
console.log(max);




interface Add{
    city:string;
    state:string;
    country:string;
}


interface Userr{
    name:string;
    age:number;
    add:Add[];     //// If a user has multiple addresses
}

let userr : Userr = {
    name:"Rajshree",
    age:21,
    add:[{
        city:"Samastipur",
        state:"Bihar",
        country:"India"
    }]
}

///// Given a list of users, filter out all users who are legal

interface LegalUser{
    firstName:string;
    lastName:string;
    age:number;
}

function filterLegal(users:LegalUser[]){    

     return users.filter(users => users.age >= 18);
}

const legalUsers = filterLegal([{
    firstName:"Rajshree",
    lastName:"Maurya",
    age:21
}, {
    firstName:"PriyaRanjana",
    lastName:"Jha",
    age:23
},{firstName:"Shivam",lastName:"Shree",age:17},{firstName:"Priyansh",lastName:"Maurya,",age:6}])

console.log(legalUsers);



const array = [1, 2, 3, 4, 5];

