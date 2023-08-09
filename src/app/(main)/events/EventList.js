import EventsCard from '@/components/Cards/EventsCard';
import React from 'react'

function EventList(props) {
    const events = props && props.events;
    return (
        <>
            {events && events.map((item, index) => {
                return (
                    <div className='col-sm-3 p-0' key={index}>
                        <EventsCard item={item} />
                    </div>
                )
            })}
        </>
    )
}

export default EventList