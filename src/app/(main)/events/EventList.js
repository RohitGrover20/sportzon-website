import EventsCard from '@/components/Cards/EventsCard';
import NoDataFound from '@/components/NoDataFound';
import React from 'react';

function EventList(props) {
    const pathname = typeof window!='undefined' && window?.location?.pathname;
    const events = props && props?.events;
    const upcomingEvents = events?.length > 0 && events.filter(item => new Date(item?.eventDate) >= new Date());

    return (
        <>
            {pathname =="/event-gallery" ? (
                events?.length > 0 ? (
                    events.map((item, index) => (
                        <div className='col-sm-3 p-1' key={index}>
                            <EventsCard item={item} />
                        </div>
                    ))
                ) : (
                    <NoDataFound />
                )
            ) : (
                upcomingEvents?.length > 0 ? (
                    upcomingEvents.map((item, index) => (
                        <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 p-1' key={index}>
                            <EventsCard item={item} />
                        </div>
                    ))
                ) : (
                    <NoDataFound />
                )
            )}
        </>
    );
}

export default EventList;
