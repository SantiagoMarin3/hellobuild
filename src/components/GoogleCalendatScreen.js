import React from 'react'
import { useFecthEvents } from '../hooks/useFecthEvents';
import { CalendarCard } from './CalendarCard';

export const GoogleCalendatScreen = () => {

    const { data:events, loading } = useFecthEvents();    

    return (
        <div>
            <h3 >Upcoming Events</h3>   

            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="cardContainer">
                {
                    events.map( event => (                       
                        
                        <CalendarCard  
                            key={ event.id }
                            { ...event }
                        />                                           
                    ))
                }
            </div>
        </div>
    )   
    
}
