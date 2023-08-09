import React from 'react'

function BannerSearch() {
    return (
        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xl-offset-1 col-lg-offset-1">
            <div className="position-relative bg-white rounded-4 p-xl-5 p-lg-4 p-3 mt-xl-5 mt-lg-4 mt-md-4">
                <div className="position-relative mb-3">
                    <h4 className="text-dark mb-0">The home of champions</h4>
                    <p className="text-muted">
                        Sportzon is a place where people can train and compete at the highest level
                    </p>
                </div>
                <form id="form-send-money" method="post">
                    <div className="d-grid mb-3">
                        <label>Location</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div className="d-grid mb-3">
                        <label>Date</label>
                        <input type="date" className='form-control' />
                    </div>
                    <div className="d-grid mb-3">
                        <label>Sports</label>
                        <select className='form-select'>
                            <option>Cricket</option>
                            <option>Football</option>
                            <option>Badminton</option>
                            <option>Tennis</option>
                        </select>
                    </div>
                    <div className="d-grid mb-3">
                        <button className="btn btn-primary font--medium">
                            Search Availibilty
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BannerSearch