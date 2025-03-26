import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";

function App() {


  // const [data, setData] = useState([]); // Initialize as an array

  // async function getPosts() {
  //   try {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
  //     const json = await response.json();
  //     console.log(json);

  //     // Update state with the fetched data
  //     setData(json);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }

  // useEffect(() => {
  //   getPosts();
  // }, []);


  // // using custom hook
  const [posts] = useFetch();


  return (
    <>
      {/* <div>
        <h2>Posts</h2>
        {data.length > 0 ? (
          data.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div> */}


<div>
      <h2>Posts</h2>
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
  );
}

export default App;
