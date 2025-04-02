// Import the useState hook from react
import { useState } from 'react';

// Create a function component named App that will be rendered in the root element
function App() {
    // return JSX that will be rendered
    return (
        // Apply inline styles to the div element
        <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
            {/* Call ToggleMessage component here to render it in the App component */}
            <ToggleMessage />

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
                                // time={"3m ago"}
                                subtitle={"Promoted"}
                                image={"https://media.licdn.com/dms/image/v2/D4D03AQFmu92voFubOA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1667824412169?e=1749081600&v=beta&t=ieRk2SxRnhFZlfCiRtxVjsi7UYKKx-gvCRZ6v-VBuO8"}
                                description={"How to get hired in 2024? I lost my Job in 2023, this is the roadmap I followed to get hired in 2024."}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Create a function component named ToggleMessage to render it in the App component
const ToggleMessage = () => {
    // Create a state variable isVisible and a function setIsVisible to toggle the visibility of the message
    const [isVisible, setIsVisible] = useState(false);

    // return JSX that will be rendered
    return (
        <div>
            {/* Create a button to toggle the visibility of the message */}
            <button onClick={() => setIsVisible(!isVisible)}>
                Toggle Message
            </button>

            {/* Conditionally render the message if isVisible is true */}
            {isVisible && <p>This message is conditionally rendered!</p>}
        </div>
    );
};

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
function PostComponent({ name, subtitle, time, image, description, followerCount }) {
    // return JSX that will be rendered
    return (
        // Apply style object to the div element
        <div style={style}>
            <div style={{ display: "flex" }}>
                {/* Display the image, name, subtitle, and time */}
                <img src={image} style={{ width: 40, height: 40, borderRadius: 40 }} />
                <div style={{ fontSize: 14, marginLeft: 10 }}>
                    <b>{name}</b> 
                    <div>{followerCount} followers</div>
                    <div>{subtitle}</div>

                    {/* conditionally render time if it is available */}
                    {/* 
                    {time && (
                        <div style={{ display: "flex" }}>
                            <div>{time}</div>
                            <img
                                src="https://imgs.search.brave.com/HR4XL7q_XpiQSqNwAl17jYkdNBrGw-fKdXxJlCr-uls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM3/MDc3ODM3Ni9waG90/by9jbG9jay02LW9j/bG9jay5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9VTZKUXI5/UFdPYmVuY2lOMHVj/QkgycXJFeWd5WlY4/VUdDem1UQ1pVRnVE/cz0"
                                style={{ width: 15, height: 15 }}
                            />
                        </div>
                    )} 
                    */}
                    {time !== undefined ? (
                        <div style={{ display: "flex" }}>
                            <div>{time}</div>
                            <img
                                src="https://imgs.search.brave.com/HR4XL7q_XpiQSqNwAl17jYkdNBrGw-fKdXxJlCr-uls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM3/MDc3ODM3Ni9waG90/by9jbG9jay02LW9j/bG9jay5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9VTZKUXI5/UFdPYmVuY2lOMHVj/QkgycXJFeWd5WlY4/VUdDem1UQ1pVRnVE/cz0"
                                style={{ width: 15, height: 15 }}
                            />
                        </div>
                    ) : null}
                </div>
            </div>

            <div style={{ fontSize: 14, marginTop: 5 }}>{description}</div>
        </div>
    );
}

// Export App Component to use it in other components
export default App;