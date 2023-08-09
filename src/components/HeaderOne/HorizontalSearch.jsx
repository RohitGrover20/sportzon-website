import React from 'react'

function HorizontalSearch() {
    return (
        <section className='position-relative p-0 m-0' style={{ top: "-90px", zIndex: "1" }}>
            <div className="container shadow-lg bg-primary p-5 rounded">
                <div className='col-12'>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-3">
                            <label className='text-white'>Location</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className="col-lg-3">
                            <label className='text-white'>Date</label>
                            <input type="date" className='form-control' />
                        </div>
                        <div className="col-lg-3">
                            <label className='text-white'>Sports</label>
                            <select className='form-select'>
                                <option>Cricket</option>
                                <option>Badminton</option>
                                <option>Tennis</option>
                            </select>
                        </div>
                        <div className="col-lg-3">
                            <button className='btn btn-orange w-100 mt-4'>Search Availability</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HorizontalSearch