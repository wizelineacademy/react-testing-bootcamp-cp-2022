import React, { useState } from "react"

import '../../App.css';

function Content({ data }) {
    
    return (
        <>
        { Object.keys(data).length > 0 ? 
            <>
                <div className="content-title">{data.title}</div>
                <div className="content-container">
                    <div className="image-container">
                        <img className="image-nasa" title={data.title} alt={data.title} src={data.url} />
                    </div>
                    <div data-testid="description" className="description">{data.explanation}</div>
                </div>
            </> 
            : null
        }
        </>
    );
}

export default Content;
