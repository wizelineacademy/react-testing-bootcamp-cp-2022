import React from "react"

import '../../App.css';

function Input({ handleChange, date }) {

    return (
        <div className="input-container">
            <input className="input-date" value={date} aria-label="input-date" placeholder="YYYY/MM/DD" onChange={handleChange} />
        </div>
    );
}

export default Input;
