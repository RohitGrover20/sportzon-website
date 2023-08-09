"use client"
import React from 'react'

function BookingSection(props) {
    const venue = props && props.venue;
    return (

        <div className="position-relative mb-0 mb-lg-5 p-0 m-0">
            <div className='d-flex my-1 justify-content-around p-0'>
                <button className='btn btn-primary m-1'
                    onClick={() => {
                        window.open(`/booking?venue=${venue && venue.slug}`, "_blank");
                    }}
                ><i className='fa fa-book me-1' /> Book Now</button>
                {/* </a> */}
                <button className='btn btn-outline-orange m-1'>Bulk/ Corporate</button>
            </div>
        </div>
    )
}

export default BookingSection