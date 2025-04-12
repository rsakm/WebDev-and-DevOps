import { useState } from 'react'

import { useFetch } from './hooks/useFetch'
function App() {
  const [currPost, setCurrPost]= useState(1);
  const [posts, loading] = useFetch(`https://jsonplaceholder.typicode.com/posts/${currPost}`);

  // return (
  //   <>
  //     <div>
  //       <h1 style={{textAlign:"center"}}>Posts</h1>
  //       {
  //       posts.length > 0 ?(
  //         posts.map(post=>(
  //           <div key={post.id}>
  //             {post.title}
  //           </div>
  //         ))) : (<div>Loading...</div>)
  //       }
  //     </div>
  //   </>
  // )

  if(loading){
    return <div>Loading...</div>
  }
  return (
    <>
    <div>
      <button onClick={()=>{setCurrPost(1)}}>1 </button>
      <button onClick={()=>{setCurrPost(2)}}>2 </button>
      <button onClick={()=>{setCurrPost(3)}}>3 </button>
      {JSON.stringify(posts)}
    </div>
    </>
  )
}

export default App
