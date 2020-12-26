import { useState, useEffect }  from 'react'
import { getCalendarEvents } from '../helpers/getCalendarEvents';

export const useFecthEvents = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getCalendarEvents()
            .then( events => {
                
                setState({
                    data: events,
                    loading: false
                });
            })

    }, [])

    return state;
}
