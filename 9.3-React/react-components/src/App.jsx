
import './App.css'

function App() {
  

  return (
   <>
   <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
    <div style={{display:"flex", justifyContent:"center"}} >
   <div>
    <div>
    <PostComponent/>
    </div>
    <div>
    <PostComponent/>
    </div>
    <div>
    <PostComponent/>
    </div>
    <div>
    <PostComponent/>
    </div>
   </div>
   
    </div>
   </div>
   </>
  )
}


// Create a style object to apply styles to the div element in PostComponent
const style = {
  width: 250,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
  padding: 20,
  margin: 10
};

function PostComponent(){

return (
  // Apply style object to the div element
  <div style={style}>
      <div style={{ display: "flex" }}>
          <img
              src={"https://media.licdn.com/dms/image/v2/D5603AQHXAI_ptaR2XQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731744172973?e=1749081600&v=beta&t=rN62gtzrA6g-zxZlu1WyxyoH0Ovfv05hb8jTe9-xZ38"}
              style={{ width: 40, height: 40, borderRadius: 40 }}
          />
          <div style={{ fontSize: 14, marginLeft: 10 }}>
              <b>Rajshree</b>
              <div>1012 followers</div>
              <div>8m</div>
          </div>
      </div>
      
      <div style={{ fontSize: 14 }}>
      I am a dedicated computer science student with a passion for data structures, algorithms, and full-stack development.
      </div>
  </div>
);
}

export default App;
