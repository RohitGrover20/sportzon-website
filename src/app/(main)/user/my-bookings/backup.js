
"use client"
import config from '@/config';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

function MyBookings() {
    const [booking, setBooking] = useState([])
    useEffect(() => {
        axios.get(`${config.API_URL}/landing/bookings`, { withCredentials: true }).then((result) => {
            console.log(result.data.data)
            setBooking(result.data && result.data.data);
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    const columns = [
        {
            name: 'Invoice',
            cell: row => {
                return (
                    <button className='btn btn-success btn-sm'> <i className='fa fa-file me-1'></i></button>
                )
            },
        },
        {
            name: 'Booking ID',
            selector: row => row.bookingId,
            cell: row => row.bookingId,
        },
        {
            name: 'Booking Type',
            selector: row => row.bookingType,
            cell: row => row.bookingType,
        },
        {
            name: 'Booking',
            selector: row => row.bookingType == "arena" ? row.arena && row.arena.title : row.event && row.event.title,
            cell: row => row.bookingType == "arena" ? <a href={`/arena/${row.arena && row.arena.slug}`}>{row.arena && row.arena.title}</a> : <a href={`/events/${row.event && row.event.slug}`}>{row.event && row.event.title}</a>,
        },

        {
            name: 'Date',
            selector: row => row.bookingType == "arena" ? row.arenaBookingDate : row.event && row.event.eventDate,
            cell: row => row.bookingType == "arena" ? new Date(row.arenaBookingDate).toLocaleString() : row.event && new Date(row.event.eventDate).toLocaleString(),
        },
        {
            name: 'Booked Date',
            cell: row => new Date(row.createdAt).toLocaleString(),
        },
        {
            name: 'Status',
            cell: row => {
                return (
                    <>
                        {
                            row.status == "completed" ? <div className='alert mb-0 alert-success'>Completed</div> :
                                row.status == "upcoming" ? <div className="alert mb-0 alert-primary">Upcoming</div> :
                                    row.status == "cancelled" ? <div className='alert mb-0 alert-danger'>Cancelled</div> :
                                        row.status == "unsuccessful" ? <div className="alert mb-0 alert-danger">Unsuccessful</div>
                                            : null
                        }
                    </>
                )
            },
        },
    ];
    return (
        <div className="dash-wrapsw card border-0 rounded-4 py-4 mb-4 shadow-lg">
            <div className="card-body px-4">
                <h3>My Bookings</h3>
                <DataTableExtensions
                    columns={columns}
                    data={booking}
                >
                    <DataTable
                        columns={columns}
                        data={booking}
                        direction="auto"
                        fixedHeader
                        fixedHeaderScrollHeight="1000px"
                        pagination
                        responsive
                        striped
                        subHeaderAlign="right"
                        subHeaderWrap
                    />
                </DataTableExtensions>
            </div >
        </div >
    )
}
export default MyBookings