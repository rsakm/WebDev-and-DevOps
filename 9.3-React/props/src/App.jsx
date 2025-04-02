// Create a function component named App that will be rendered in the root element
function App() {
  // return JSX that will be rendered
  return (
      // Apply inline styles to the div element
      <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
          <div
              style={{
                  display: "flex",
                  justifyContent: "center",
              }}
          >
              <div>
                  <div>
                      {/* Call PostComponent here with props to render it in the App component */}
                      <PostComponent
                          name={"Rajshree"}
                          followerCount={1011}
                          time={"2m ago"}
                          image={"https://media.licdn.com/dms/image/v2/D5603AQHXAI_ptaR2XQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731744172973?e=1749081600&v=beta&t=rN62gtzrA6g-zxZlu1WyxyoH0Ovfv05hb8jTe9-xZ38"}
                          description={"I am a dedicated computer science student with a passion for data structures, algorithms, and full-stack development."}
                      />
                  </div>
                  <div>
                      <div>
                          {/* Call PostComponent here with props to render it in the App component */}
                          <PostComponent
                              name={"Piyush"}
                              followerCount={719}
                              time={"3m ago"}
                              image={"https://media.licdn.com/dms/image/v2/D4D03AQFmu92voFubOA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1667824412169?e=1749081600&v=beta&t=ieRk2SxRnhFZlfCiRtxVjsi7UYKKx-gvCRZ6v-VBuO8"}
                              description={"How to get hired in 2024? I lost my Job in 2023, this is the roadmap I followed to get hired in 2024."}
                          />
                      </div>
                  </div>
                  <div>
                      <div>
                          {/* Call PostComponent here with props to render it in the App component */}
                          <PostComponent
                              name={"Deepak"}
                              followerCount={450}
                              time={"18m ago"}
                              image={"https://imgs.search.brave.com/ZACv93qZO57A2RrexnAjJi9CTpejuyu2aIGeB9-2beA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTk0/OTM2My5qcGc"}
                              description={"Here is the roadmap to become a full-stack developer in 2024."}
                          />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

// Create a style object to apply styles to the div element in PostComponent
const style = {
  width: 250,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
  padding: 20,
  margin: 10,
};

// Create a function component named PostComponent with props to render it in the App component
function PostComponent({ name, followerCount, time, image, description }) {
  // return JSX that will be rendered
  return (
      // Apply style object to the div element
      <div style={style}>
          {/* display the name, followerCount, time, image, and description using props */}
          <div style={{ display: "flex" }}>
              <img src={image} style={{ width: 40, height: 40, borderRadius: 40 }} />
              <div style={{ fontSize: 14, marginLeft: 10 }}>
                  <b>{name}</b> 
                  <div>{followerCount} followers</div>
                  <div>{time}</div>
              </div>
          </div>

          <div style={{ fontSize: 14 }}>{description}</div>
      </div>
  );
}

// Export App Component to use it in other components
export default App;