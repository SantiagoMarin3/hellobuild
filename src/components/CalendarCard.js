import React from 'react'

export const CalendarCard = ({title, location, date, status, link}) => {    
    return (
        <div className="card animate__fadeInUp cardEvent">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{date}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{location}</h6>
                <p className="card-text">{status}</p>
                <a href={link} className="card-link">Open event</a>            
            </div>
        </div>
    )
}
