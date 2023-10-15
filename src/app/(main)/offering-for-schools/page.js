import Offering from "@/components/Offering";
import React from "react";

function page() {
  return (
    <>
      <section
        className="bg-cover py-10"
        style={{
          // background: "URL('/assets/img/school_bg.jpg')",
          background:
            "linear-gradient(0deg, rgba(18, 36, 90, 0.4), rgba( 0, 0, 0, 0.9)), url(/assets/img/school_bg.jpg)",
          size: "cover",
          height: "500px",
          alignItems: "center",
          verticalAlign: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-xs-12 text-white">
              <h1 className="mb-0 text-white" style={{ fontSize: "30px" }}>
                {/* {data?.title} */}
                Sportzon: The Future of Monetizing School Sports Infrastructure
              </h1>
              <p>
                Sportzon is a revolutionary new platform that allows schools to
                monetize their sports infrastructure by renting it out to the
                public. With Sportzon, schools can generate additional revenue,
                increase community engagement, and provide a valuable service to
                their local community.
              </p>
              <a href="#contact-us-schools">
                <button className="btn btn-orange">
                  Contact Us Today for a Customized Proposal
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-xs-12">
              <p>
                Sportzon is easy to use. Schools simply create a profile on the
                platform and list the sports facilities they have available for
                rent. Users can then search for and book facilities directly
                through the Sportzon website or app. Sportzon takes care of all
                the logistics, including payments and insurance.
              </p>
              <p>
                Sportzon is a win-win for everyone involved. Schools generate
                additional revenue, users have access to affordable and
                convenient sports facilities, and the community benefits from
                increased access to sports and recreation.
              </p>

              <section className="pt-0">
                <div className="container">
                  <div className="row justify-content-center">
                    <div
                      className="col-xl-6 col-lg-10 col-md-12 col-sm-12 mb-5 wow  fadeInUp animated"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInUp",
                      }}
                    >
                      <div className="sec-heading center pt-5">
                        <div className="d-inline-flex px-4 py-1 rounded-5 text-info bg-light-info font--medium mb-2">
                          <span>Our Benifits</span>
                        </div>
                        <h2>Here are some of the benefits of using Sportzon</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center gy-xl-5 gy-lg-4 gy-5 gx-xl-5 gx-lg-4 gx-3">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                      <div
                        className=" text-center wow  fadeInUp animated"
                        style={{
                          visibility: "visible",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="px-4 py-4 d-inline-flex align-items-center justify-content-center fs-1 bg-light-success text-success rounded-circle">
                          <i className="fa-solid fa-money" />
                        </div>
                        <div className="benifits-title mt-3 mb-3">
                          <h4 className="fs-5">Increased revenue</h4>
                        </div>
                        <div className="benifits-desc">
                          <p className="mb-0">
                            Schools can generate additional revenue by renting
                            out their sports facilities to the public.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                      <div
                        className=" text-center wow  fadeInUp animated"
                        style={{
                          visibility: "visible",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="px-4 py-4 d-inline-flex align-items-center justify-content-center fs-1 bg-light-warning text-warning rounded-circle">
                          <i className="fa-solid fa-users" />
                        </div>
                        <div className="benifits-title mt-3 mb-3">
                          <h4 className="fs-5">
                            Increased community engagement
                          </h4>
                        </div>
                        <div className="benifits-desc">
                          <p className="mb-0">
                            Sportzon helps schools to connect with their local
                            community and provide a valuable service.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                      <div
                        className=" text-center wow  fadeInUp animated"
                        style={{
                          visibility: "visible",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="px-4 py-4 d-inline-flex align-items-center justify-content-center fs-1 bg-light-purple text-purple rounded-circle">
                          <i className="fa-solid fa-sack-dollar" />
                        </div>
                        <div className="benifits-title mt-3 mb-3">
                          <h4 className="fs-5">Affordable and convenient</h4>
                        </div>
                        <div className="benifits-desc">
                          <p className="mb-0">
                            Sportzon makes it easy for users to find and book
                            affordable and convenient sports facilities.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                      <div
                        className=" text-center wow  fadeInUp animated"
                        style={{
                          visibility: "visible",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="px-4 py-4 d-inline-flex align-items-center justify-content-center fs-1 bg-light-danger text-danger rounded-circle">
                          <i className="fa-solid fa-rocket" />
                        </div>
                        <div className="benifits-title mt-3 mb-3">
                          <h4 className="fs-5">Easy to use</h4>
                        </div>
                        <div className="benifits-desc">
                          <p className="mb-0">
                            Sportzon is easy to use for both schools and users.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section
        className=" gray-simple position-relative"
        id="contact-us-schools"
      >
        <div className="position-absolute top-0 start-0 end-0 gray-simple ht-200" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="card border-0 rounded-5 bg-info position-relative py-xl-5 px-xl-5 px-lg-5 px-md-1 px-4">
                <div className="position-absolute top-0 start-0 z-0">
                  <img
                    src="assets/img/shape-1-soft-light.svg"
                    alt="SVG"
                    width={300}
                  />
                </div>
                <div className="position-absolute bottom-0 end-0 me-10 z-0">
                  <img
                    src="assets/img/shape-1-soft-light.svg"
                    alt="SVG"
                    width={250}
                  />
                </div>
                <div className="card-body p-xl-5 p-lg-5 p-md-4 px-0">
                  <Offering />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
