import React from 'react'

function Newsletter() {
    return (
        <section className="bg-cover call-action-container bg-orange position-relative">
            <div className="position-absolute top-0 end-0 z-0">
                <img src="assets/img/alert-bg.png" alt="SVG" width={300} />
            </div>
            <div className="position-absolute bottom-0 start-0 me-10 z-0">
                <img src="assets/img/circle.png" alt="SVG" width={150} />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-10 col-md-12 col-sm-12">
                        <div className="call-action-wrap">
                            <div className="call-action-caption">
                                <h2 className="text-light">Want to stay updated for upcoming events and offers?</h2>
                                <p className="text-light fs-5 fw-light">
                                    Deleniti corrupti quos dolores et quas molestias
                                </p>
                            </div>
                            <div className="call-action-form">
                                <form>
                                    <div className="newsltr-form rounded-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Your email"
                                        />
                                        <button type="button" className="btn btn-dark">
                                            Subscribe
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Newsletter