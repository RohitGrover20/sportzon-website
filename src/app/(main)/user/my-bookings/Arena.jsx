"use client"
import config from '@/config';
import React from 'react'

function Arena(props) {
    const bookings = props && props.booking;
    console.log(bookings)
    return (
        <div>
            {bookings && bookings.map((booking, index) => {
                return (
                    <div className="row g-xl-4 g-lg-3 g-3 my-1" key={index}>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="verticle-blog-wrap bg-white p-2 rounded-2 border h-100 shadow-sm">
                                <div className="row align-items-center">
                                    <div className="col-md-3">
                                        <article>
                                            {booking && booking.arena && booking.arena.gallery && booking.arena.gallery[0] ?
                                                <img
                                                    src={`${config.API_URL}/venue/${booking.arena.gallery[0]}`}
                                                    className="img-fluid rounded-2"
                                                    alt=""
                                                /> :
                                                <p>No Image Available</p>
                                            }

                                        </article>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="article-caption py-2">
                                            <div className="d-inline-flex label text-success bg-light-success">
                                                <span>{booking.bookingId}</span>
                                            </div>
                                            <div className="article-heads mb-3">
                                                <h6 className="font--bold mb-1">
                                                    {booking.arena && booking.arena.title}
                                                    <span className="text-muted ms-3">Booked at - {booking.createdAt && new Date(booking.createdAt).toLocaleString()}</span>
                                                </h6>

                                            </div>
                                            <div className="article-desc table-responsive">
                                                <table className='table table-striped table-bordered'>
                                                    <thead>
                                                        <tr>
                                                            <th className='p-1'>Activity</th>
                                                            <th className='p-1'>Court</th>
                                                            <th className='p-1'>Date</th>
                                                            <th className='p-1'>Slots</th>
                                                            <th className='p-1'>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {booking && booking.court && booking.court.map((item, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    <td className='p-1'>{item.activity}</td>
                                                                    <td className='p-1'>{item.court}</td>
                                                                    <td className='p-1'>{new Date(item.date).toDateString()}</td>
                                                                    <td className='p-1'>
                                                                        {item.slots && item.slots.map((slot, index) => {
                                                                            return (
                                                                                <div className='badge badge-success' key={index}>{slot.label}</div>
                                                                            )
                                                                        })}
                                                                    </td>
                                                                    <td className='p-1'>Upcoming</td>
                                                                </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Col */}
                    </div>
                )
            })}


        </div>
    )
}

export default Arena