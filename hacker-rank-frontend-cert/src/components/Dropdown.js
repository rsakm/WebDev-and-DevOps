import React from "react";
import "./index.css";

function Dropdown({ options, labelText, selectedValue, onChange }) {
  return (
    <div className="elementSet">
      <select 
        data-testid="dropdown"
        value={selectedValue || labelText}
        onChange={(e) => onChange(e.target.value)}
      >
        {/* Do not remove this default option as this is needed in testing */}
        <option value={labelText} key={labelText} disabled>
          {labelText}
        </option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;



