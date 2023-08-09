import React from 'react'
import SimpleCard from '@/components/Cards/SimpleCard'
import SearchBar from '@/components/SearchBar'
import { getVenue } from '@/libs/fetchData';
import VenueList from './VenueList';

async function Venues() {
    const { data } = await getVenue();
    const venues = data;
    console.log(venues)
    return (
        <>
            <SearchBar />
            <section className="gray-simple">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-10 col-md-12 col-sm-12 mb-5">
                            <div className="sec-heading center">
                                <div className="d-inline-flex px-4 py-1 rounded-5 text-info bg-light-info font--medium">
                                    <span>Venues</span>
                                </div>
                                <h2>Book your nearest Venue</h2>
                                <p>Temporibus autem quibusdam et place in the web workers toolbox aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row justify-content-center gy-xl-5 gy-lg-4 gy-5 gx-xl-5 gx-lg-4 gx-3">
                            <VenueList venues={venues} />
                            {/* Pagination*/}
                            {/* <nav className="mt-4" aria-label="Portfolio pagination">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item">
                                        <a href="#" className="page-link">
                                            1
                                        </a>
                                    </li>
                                    <li className="page-item active" aria-current="page">
                                        <span className="page-link">2</span>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            3
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            4
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            5
                                        </a>
                                    </li>
                                </ul>
                            </nav> */}
                        </div>
                    </div>
                </div>
            </section>
            <div className="clearfix"></div>
        </>
    )
}

export default Venues