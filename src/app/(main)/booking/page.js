"use client"
import React, { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import axios from 'axios';
import config from '@/config';
import ProductInfo from './ProductInfo';
import Checkout from './Checkout';
import Loading from '@/components/Loading';

function Booking() {
    const [loading, setLoading] = useState(true)
    const searchParams = useSearchParams();
    const search = searchParams.get('venue');
    const [venue, setVenue] = useState({})
    const [courts, setCourts] = useState([]);
    const [slots, setSlots] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setLoading(true)
        axios.get(`${config.API_URL}/landing/venues/${search}`).then((result) => {
            setLoading(false)
            setVenue(result && result.data && result.data.data)
            axios.get(`${config.API_URL}/landing/courts/${result.data && result.data.data && result.data.data._id}`).then((court) => {
                setCourts(court && court.data && court.data.data);
                setLoading(false)
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
            {loading ? <Loading /> :
                <section>
                    <div className="container">
                        <div className="row justify-content-center mx-auto">
                            <div className="col-md-1"></div>
                            <ProductInfo venue={venue} courts={courts} cart={cart} setCart={setCart}
                                loading={loading} setLoading={setLoading}
                            />
                            <Checkout cart={cart} setCart={setCart}
                                loading={loading} setLoading={setLoading}
                                venue={venue}
                            />
                            <div className="col-md-1"></div>
                        </div>
                    </div>
                </section>
            }
        </div>
    )
}

export default Booking