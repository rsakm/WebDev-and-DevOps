import { useState, useEffect } from "react";

// // Understanding useEffect, dependency array,  unmounting & cleanup

// // Use this App.jsx inside src to run the code and test it....!!!!

function App(){

    const [timer, setTimer] = useState(0);


    return <>
    <Counter/>
    console.log("After Count");
    <Timer timer = {timer}/>
    </>

}


function Counter(){

    useEffect(()=>{
        console.log("Mount");
    
    
        return function(){
            console.log("unmount");
        }  //// Add a conditional rendering to see unmount ----
    
    },[])

   
    return <>
       Counter!
    </>
}


function Timer(props){

    useEffect(()=>{
        console.log("Mounting timer");  /// runs only one


        return ()=>{
            console.log("unmounting timer");
        }
    },[]);

    useEffect(()=>{

        console.log("Timer has changed...!");


        return ()=>{
            console.log("cleanup inside second timer useEffect");
        }
    },[props.timer])  //// runs when timer changes that is why we need dependency array

    return <>
    Timer {props.timer}
    </>
}

export default App;