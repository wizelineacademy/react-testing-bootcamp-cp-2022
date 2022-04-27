import React, { useEffect, useState } from "react"

/* Components */
import Input from '../components/main/Input';
import Content from '../components/main/Content';

import '../App.css';

const regex = RegExp(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)

const URL_ENDPOINT = process.env.REACT_APP_NASA_API;
const KEY_NASA = process.env.REACT_APP_TOKEN;

export const formatDate = date => date.toISOString().split('T')[0]

function Main() {

    const today = formatDate(new Date());
    const [ date, setDate ] = useState(today);
    const [ message, setMessage ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ data, setData ] = useState({});

    useEffect( () => {
        
        handleGetData(date)

    }, [])

    const handleChange = ev => {
        
        ev.preventDefault()

        const inputtedValue = ev.currentTarget.value

        setDate(inputtedValue);
        
        if(inputtedValue.match(regex)){

            handleGetData(inputtedValue)
            setMessage(null)
            return
            
        }
        
        setMessage('Invalid Date')
        
    }

    const handleGetData = async date => {

        setIsLoading(true)
    
        const api = await fetch(`${URL_ENDPOINT}?api_key=${KEY_NASA}&date=${date}`)
        
        const response = await api.json()

        if(response.error){
            setMessage("There was an error, please try again")
            setIsLoading(false)
            setData({})
            return
        }

        if(response.code === 400){
            setMessage(response.msg)
            setIsLoading(false)
            setData({})
            return
        }
    
        setIsLoading(false)
        setData(response)

    }

    return (
        <div className="main-container">
            {message && (<div data-testid="message" className="alert">{message}</div>)}
            <Input handleChange={handleChange} date={date} isLoading={isLoading} />
            {isLoading ? <h1>loading...</h1> : <Content data={data} />}
        </div>
    );
}

export default Main;
