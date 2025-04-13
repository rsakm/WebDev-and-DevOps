import { useEffect, useState } from "react";

export function useFetch(url, retryTime){
    const [finalData, setFinalData]= useState([]);
    const [loading,setLoading]=useState(true);

    async function getDetails(){
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();

        setFinalData(json);
        setLoading(false);

    }

    useEffect(()=>{
        getDetails();
    },[url])

    // fetch data every 10 seconds automatically to get the updated data after change (if happened)
    useEffect(()=>{
        let timer=setInterval(getDetails,retryTime*1000);
        // cleanup function
        return function(){
            clearInterval(timer);
        }
    },[retryTime,url])

    return ([finalData, loading]);
}