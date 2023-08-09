
import React from 'react'

function AboutUs() {
    return (
        <div>

            <section
                className="bg-cover"
                style={{ background: "url(assets/img/aboutTop.jpeg)no-repeat" }}
                data-overlay={4}
            >
                <div className="ht-50" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-10 col-12">
                            <h1 className="text-white mb-4">
                                Welcome to Sportzon,
                                <br />
                            </h1>
                            <h2 className='text-white'>the ultimate destination for sports enthusiasts of all levels.</h2>
                            <p className="fs-5 fw-light text-light mb-4">
                                Our platform revolutionizes the way you engage with sports and fitness, allowing you to effortlessly book sports complexes, find expert coaches, and participate in thrilling public events. Whether you're an individual seeking a personal trainer or a team ready to conquer tournaments, Sportzon is here to fuel your passion and make sports accessible to everyone. Embrace a healthier and more active lifestyle with us today.
                            </p>
                            <a href="/contact" className="btn btn-primary px-5">
                                Know More..
                            </a>
                        </div>
                    </div>
                </div>
                <div className="ht-80" />
            </section>


            <>
                <section>
                    <div className="container">
                        <div className="row justify-content-between align-items-center mb-5">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                <div className="position-relative exloi">
                                    <div className="position-relative pe-4 pb-4">
                                        <img
                                            src="assets/img/pays-3.png"
                                            className="img-fluid rounded-4"
                                            alt=""
                                        />
                                    </div>
                                    <div className="position-absolute bottom-0 end-0">
                                        <img
                                            src="assets/img/img-3.png"
                                            className="img-fluid rounded-2 shadow"
                                            width={230}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                <div className="position-relative exloi py-lg-0 py-4">
                                    <div className="exloi-caption">
                                        <div className="label text-success bg-light-success d-inline-flex rounded-4 mb-2 font--medium">
                                            <span>Let's Introduce</span>
                                        </div>
                                        <h2 className="display-5 font--bold lh-base mb-3">
                                            Our Story
                                        </h2>
                                        <p className="mb-0 fs-5 fw-light mb-3">
                                            The idea for Sportzon was sparked when our co-founder, Manoj Atree, noticed a significant gap in the sports industry. Manoj Atree was always passionate about sports. But as he got older, he started to notice that it was becoming more and more difficult to find time to play sports, especially in the corporate culture. People work long hours at their jobs and do not have the time to go to the gym or find a sports complex to play at. There was a notion in society that, once an adult, only professional athletes play sports.
                                        </p>
                                        <p className="mb-0 fs-5 fw-light">
                                            Manoj decided to bridge the huge gap in the sports industry. There were very limited websites and apps that could help people find sports complexes, but they didn't offer anything else. There were no apps that could help people find coaches, personal trainers, or public sports events.
                                        </p>
                                        <div className="exloi-link mt-4">
                                            <a
                                                href="JavaScript:Void(0);"
                                                className="btn btn-primary font--medium rounded-5"
                                            >
                                                Meet Our Team
                                                <i className="fa-regular fa-circle-right ms-2" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-between align-items-center pt-5">
                            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                                <div className="position-relative exloi py-lg-0 pb-4">
                                    <div className="exloi-caption">
                                        <div className="label text-orange bg-light-orange d-inline-flex rounded-4 mb-2 font--medium">
                                            <span>Easiest Plan</span>
                                        </div>
                                        <h2 className="display-5 font--bold lh-base mb-3">
                                            Our Achievement
                                        </h2>
                                        <p className="mb-0 fs-5 fw-light">
                                            Cicero famously orated against his political opponent Lucius
                                            Sergius Catilina. Occasionally the first Oration against
                                            Catiline is taken for type specimens: Quo usque tandem abutere,
                                            Catilina, patientia nostra? Quam diu etiam furor iste tuus nos
                                            eludet.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                <div className="row row-cols-1 row-cols-sm-2 g-xl-4 g-lg-4 g-4">
                                    <div className="col">
                                        <div className="card border-0 bg-light-success rounded-4 px-3 py-3">
                                            <div className="card-body">
                                                <h3 className="fs-1">
                                                    <span className="ctr me-1">30</span>B
                                                </h3>
                                                <p className="fs-sm font--medium mb-0 text-success">
                                                    Active users
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card border-0 bg-light-warning rounded-4 px-3 py-3 mt-4">
                                            <div className="card-body">
                                                <h3 className="fs-1">
                                                    <span className="ctr me-1">42</span>B
                                                </h3>
                                                <p className="fs-sm font--medium mb-0 text-warning">
                                                    Installed Apps
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col pt-lg-3">
                                        <div className="card border-0 bg-light-danger rounded-4 px-3 py-3">
                                            <div className="card-body">
                                                <h3 className="fs-1">
                                                    <span className="ctr me-1">56</span>+
                                                </h3>
                                                <p className="fs-sm font--medium mb-0 text-danger">
                                                    Countries Use
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card border-0 bg-light-info rounded-4 px-3 py-3 mt-4">
                                            <div className="card-body">
                                                <h3 className="fs-1">
                                                    <span className="ctr me-1">27</span>B
                                                </h3>
                                                <p className="fs-sm font--medium mb-0 text-info">
                                                    Happy Customers
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="clearfix" />
            </>

        </div>
    )
}

export default AboutUs