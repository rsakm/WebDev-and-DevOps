import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import "./index.css";

function App() {
  const countries = ["India", "USA", "Germany", "Japan"];
  const languages = ["English", "Hindi", "German", "Japanese"];

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  return (
    <div className="App">
      <header className="header">
        <div className="logo">HI</div>
        <h1 className="title">Employee Information</h1>
      </header>

      <div className="dropdowns">
        <Dropdown options={countries} labelText="Select Country" onChange={setSelectedCountry} />
        <Dropdown options={languages} labelText="Select Language" onChange={setSelectedLanguage} />
      </div>

      <div className="selections">
        <h2>Final Selections:</h2>
        <p className="selected-text">
          <span className="highlight">Country Selected:</span> {selectedCountry}
        </p>
        <p className="selected-text">
          <span className="highlight">Language Selected:</span> {selectedLanguage}
        </p>
      </div>
    </div>
  );
}

export default App;
