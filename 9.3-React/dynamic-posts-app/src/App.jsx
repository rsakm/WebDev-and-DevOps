import { useState } from 'react'
import { PostComponent } from './PostComponent'

import './App.css'

function App() {
  const [posts, setPosts] = useState([])

//   const posts = [{
//     name:"Rajshree",
//     subtitle:"1011 followers",
//     time:"2m ago",
//     image:"https://media.licdn.com/dms/image/v2/D5603AQHXAI_ptaR2XQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731744172973?e=1749081600&v=beta&t=rN62gtzrA6g-zxZlu1WyxyoH0Ovfv05hb8jTe9-xZ38",
//     description:"I am a dedicated computer science student with a passion for data structures, algorithms, and full-stack development." 
//   },
// ];

// [<postComponent/>]

const postComponents = posts.map((post,index)=>{
  return <PostComponent 
  key={index}
  name={post.name}
  subtitle={post.subtitle}
  time={post.time}
  image={post.image}
  description={post.description}
  />
})
  function addPost(){
    setPosts([...posts,{
      name:"Rajshree",
      subtitle:"1011 followers",
      time:"2m ago",
      image:"https://media.licdn.com/dms/image/v2/D5603AQHXAI_ptaR2XQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731744172973?e=1749081600&v=beta&t=rN62gtzrA6g-zxZlu1WyxyoH0Ovfv05hb8jTe9-xZ38",
      description:"I am a dedicated computer science student with a passion for data structures, algorithms, and full-stack development." 
    }])

  }

  return (
      <div style={{background:"#dfe6e9", height:"100vh",  }} >
        <button onClick={addPost} >Add post</button>
        <div style={{display:"flex", justifyContent:"center"}} >
          <div>
            {postComponents}
          </div>
        </div>
      </div>
    
  )
}

export default App
