import React from "react"

import '../../App.css';

function Content() {
    return (
        <div className="Content-container">
            <div className="image-container">
                <img title="image-nasa" alt="Apollo 16 Moon Panorama" src="https://api.nasa.gov/assets/img/general/apod.jpg" />
            </div>
            <div className="description-container">
            One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video. This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications. In addition, if the concept_tags parameter is set to True, then keywords derived from the image explanation are returned. These keywords could be used as auto-generated hashtags for twitter or instagram feeds; but generally help with discoverability of relevant imagery.
            The full documentation for this API can be found in the APOD API Github repository.
            </div>
        </div>
    );
}

export default Content;
