import React, { useCallback, useEffect, useState } from "react";
import moment from 'moment';
import '../../stylesheets/dashboard.css'
import {Col } from 'antd';

export const Dashboard = () => {
    const [pictureDayInfo, setPictureDayInfo] = useState([])
    const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"))


    const fetchMyAPI = useCallback(async () => {
        const apiKey = 'wOjD8BmGH4ZViJyv2OpeZlKfSaA24XkEcvmyipkF';
        let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${date}&end_date=${date}`)
        response = await response.json()
        setPictureDayInfo(response)
    }, [date]) // if userId changes, useEffect will run again
    
      useEffect(() => {
        fetchMyAPI()
      }, [fetchMyAPI])

      console.log("pictureDayInfo",pictureDayInfo)
      console.log("date",date)

    return (
      <>
        {pictureDayInfo[0] ? (
            <>
                <br/>
                <Col span={24} offset={0}>
                    <div className="container-center-dashboard">
                        <input
                            type="date"
                            value={date}
                            onChange={event => setDate(event.currentTarget.value)}
                        />
                    </div>
                </Col>
                <br/>
                <Col span={18} offset={1}>
                    <img className="img-dashboard" src={pictureDayInfo[0].url} alt={pictureDayInfo[0].date}/>
                </Col>
               
            </>
        ) : (
            <h1>hola</h1>
        )}
      </>
    )
  }