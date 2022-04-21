import React, { useState } from "react"

/* Components */
import Input from '../components/main/Input';
import Content from '../components/main/Content';

import '../App.css';

const regex = RegExp(/^\d{4}\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/)

function Main() {

    const [ date, setDate ] = useState('');
    const [ message, setMessage ] = useState(null);

    const handleChange = ev => {
        
        ev.preventDefault()

        const inputtedValue = ev.currentTarget.value

        setDate(inputtedValue);
        
        if(inputtedValue.match(regex)){
            
            setMessage(null)
            return
            
        }
        
        setMessage('Date not valid')
        
    }

    return (
        <div className="Main-container">

            {message ? (<div className="alert">{message}</div>) : null}
            <Input handleChange={handleChange} date={date}/>
            <Content />
        </div>
    );
}

export default Main;
