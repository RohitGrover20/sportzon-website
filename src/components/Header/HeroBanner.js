// import Script from 'next/script'
import React from 'react'
import BannerSearch from '../BannerSearch'

function HeroBanner() {
    return (
        <>
            {/* ============================ Hero Banner  Start================================== */}
            <div
                className="image-cover hero-header position-relative"
                style={{ background: "#ffffff url(assets/img/banner.jpg)no-repeat" }}
                data-overlay={6}
            >
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="elcoss-excort mb-5">
                                <h1 className="mb-4">
                                    Where fun &amp; competition <br /> meet
                                </h1>
                                <p className="fs-5 fw-light fs-mob">
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                    blanditiis praesentium voluptatum deleniti atque corrupti.
                                </p>
                            </div>
                            <div className="btns-clasic mt-5 mb-3">
                                <div className="btn-groupss">
                                    <a
                                        href="##"
                                        className="btn btn-lg btn-orange font--medium px-lg-4 px-xl-5 mx-2 my-2"
                                    >
                                        Learn More
                                    </a>
                                    <a
                                        href="##"
                                        className="btn btn-lg btn-whites text-orange font--medium px-lg-4 px-xl-5 mx-2 my-2"
                                    >
                                        Join Classes
                                        <i className="fa-solid fa-circle-play ms-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <BannerSearch />
                    </div>
                </div>
            </div>
            {/* ============================ Hero Banner End ================================== */}
        </>
    )
}

export default HeroBanner