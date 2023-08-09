import SearchBar from '@/components/SearchBar'
import { getEvents } from '@/libs/fetchData';
import EventList from './EventList';

async function Events() {
    const { data } = await getEvents();
    const events = data;
    return (
        <>
            <SearchBar searchType="events" />
            <section className="gray-simple">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-10 col-md-12 col-sm-12 mb-1">
                            <div className="sec-heading center">
                                <div className="d-inline-flex px-4 py-1 rounded-5 text-info bg-light-info font--medium">
                                    <span>Events</span>
                                </div>
                                <h2>Join upcoming sports events near you</h2>
                                <p>Find, Register and Excel in Top-notch Sports Events.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row justify-content-center gy-xl-5 gy-lg-4 gy-5 gx-xl-5 gx-lg-4 gx-3">
                            <EventList events={events} />

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

export default Events