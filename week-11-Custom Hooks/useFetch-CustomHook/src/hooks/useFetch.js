import { useEffect, useState } from "react";

export function useFetch(){

    const [posts, setPosts] = useState([]);
     async function getPosts(){
    
       const response = await fetch("https://jsonplaceholder.typicode.com/posts/");

       const json = await response.json();

       setPosts(json);
    }

    useEffect(()=>{getPosts()},[]);

    return [posts, setPosts];

}