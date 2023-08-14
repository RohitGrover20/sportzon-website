"use client"
import React, { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import axios from 'axios';
import config from '@/config';
import ProductInfo from './ProductInfo';
import Checkout from './Checkout';
import Loading from '@/components/Loading';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';

function Booking() {
    const [loading, setLoading] = useState(true)
    const searchParams = useSearchParams();
    const search = searchParams.get('venue');
    const [venue, setVenue] = useState({})
    const [payment, setPayment] = useState(false)
    const [courts, setCourts] = useState([]);
    const [booked, setBooked] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setLoading(true)
        axios.get(`${config.API_URL}/landing/venues/${search}`).then((result) => {
            setVenue(result && result.data && result.data.data)
            axios.get(`${config.API_URL}/landing/courts/${result.data && result.data.data && result.data.data._id}`).then((court) => {
                setCourts(court && court.data && court.data.data);
                axios.post(`${config.API_URL}/landing/venues/get-slots`, { arena: result && result.data && result.data.data && result.data.data._id }).then((book) => {
                    setLoading(false)
                    setBooked(book && book.data && book.data.data)
                }).catch((err) => {
                    setLoading(false)
                    console.log(err)
                })
            }).catch((error) => {
                console.log(error)
                setLoading(false)
            })
        }).catch((err) => {
            console.log(err)
            setLoading(false)
        })
    }, [])


    return (
        <div>
            <ToastContainer />
            {loading ? <Loading /> :
                <section>
                    <div className="container">
                        {
                            payment == true ?
                                <div className="sec-heading text-center">
                                    <div className="label text-success bg-light-success d-inline-flex rounded-4 mb-2 font--medium">
                                        <span>Venue Booking</span>
                                    </div>
                                    <h2 className="mb-1">Payment Success</h2>
                                    <p className="test-muted fs-6">
                                        For more information. <Link href={"/user/my-bookings"}><em style={{ fontWeight: "bold" }}>Go to My Booking <i className='fa fa-arrow-right'></i></em></Link>
                                    </p>
                                </div>


                                :
                                <div className="row justify-content-center mx-auto">
                                    <div className="col-md-1"></div>
                                    <ProductInfo venue={venue} courts={courts} cart={cart} setCart={setCart}
                                        loading={loading} setLoading={setLoading}
                                        booked={booked}
                                    />
                                    <Checkout cart={cart} setCart={setCart}
                                        loading={loading} setLoading={setLoading}
                                        venue={venue}
                                        setPayment={setPayment}
                                    />
                                    <div className="col-md-1"></div>
                                </div>
                        }
                    </div>
                </section>
            }
        </div>
    )
}

export default Booking