import React from "react";

function AboutUs() {
  return (
    <div>
      <section
        className="bg-cover"
        style={{ background: "url(/assets/img/aboutTop.jpeg)no-repeat" }}
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
              <h2 className="text-white">
                the ultimate destination for sports enthusiasts of all levels.
              </h2>
              <p className="fs-5 fw-light text-light mb-4">
                Our platform revolutionizes the way you engage with sports and
                fitness, allowing you to effortlessly book sports complexes,
                find expert coaches, and participate in thrilling public events.
                Whether you're an individual seeking a personal trainer or a
                team ready to conquer tournaments, Sportzon is here to fuel your
                passion and make sports accessible to everyone. Embrace a
                healthier and more active lifestyle with us today.
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
                      src="/assets/img/pays-3.png"
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
                      Sportzon is a mobile app that aims to make it easier for
                      people to find and participate in sports activities. It
                      does this by providing a comprehensive directory of sports
                      complexes, coaches, personal trainers, and public sports
                      events. This is particularly useful for people who are new
                      to an area or who do not have a lot of time to research
                      sports activities on their own. If you have difficulty
                      finding the time or resources to do so. This may include
                      people who work long hours, who do not have access to a
                      sports complex, or who are new to an area. The app's value
                      proposition is that it provides a one-stop shop for
                      finding and participating in sports activities. It saves
                      users the time and effort of having to research different
                      sports complexes, coaches, and events on their own.
                    </p>
                    <p className="mb-0 fs-5 fw-light">
                      The app also provides a convenient way to book and pay for
                      sports activities. It was founded by Manoj Attri, who was
                      inspired to start the company after noticing a gap in the
                      sports industry.Mr.Attri wanted to create a platform that
                      would make it easier for people to find and participate in
                      sports, regardless of their age or skill level. Sportzon
                      is a valuable resource for both individuals and
                      businesses.
                    </p>

                    <p className="mb-0 fs-5 fw-light">
                      Individuals can use the app to find sports complexes near
                      them, book court time, and find coaches and personal
                      trainers. Businesses can use the app to promote their
                      sports complexes, events, and services. Sportzon is a
                      great example of how technology can be used to improve
                      people's lives. The app makes it easier for people to find
                      and participate in sports, which can lead to a healthier
                      and happier lifestyle.
                    </p>
                    {/* <div className="exloi-link mt-4">
                      <a
                        href="JavaScript:Void(0);"
                        className="btn btn-primary font--medium rounded-5"
                      >
                        Meet Our Team
                        <i className="fa-regular fa-circle-right ms-2" />
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row justify-content-between align-items-center pt-5">
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
                      Cicero famously orated against his political opponent
                      Lucius Sergius Catilina. Occasionally the first Oration
                      against Catiline is taken for type specimens: Quo usque
                      tandem abutere, Catilina, patientia nostra? Quam diu etiam
                      furor iste tuus nos eludet.
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
            </div> */}
          </div>
        </section>
        <div className="clearfix" />
      </>
    </div>
  );
}

export default AboutUs;
