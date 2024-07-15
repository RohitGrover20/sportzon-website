import Offering from "@/components/Offering";
import React from "react";
import Image from "next/image";
function page() {
  return (
    <>
      <section
        className="bg-cover py-10"
        style={{
          background: "url(/assets/img/School-infrastructure-img.png)",
          size: "cover",
          height: "300px",
          alignItems: "center",
          verticalAlign: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div
          className="text-white"
          style={{
            position: "absolute",
            bottom: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            width: "70%",
          }}
        >
          <h1
            className="mb-0 text-white offerings-heading"
            style={{ fontSize: "35px" }}
          >
            The Future of Monetizing School Sports Infrastructure
          </h1>
          <p className="fs-7 offerings-para">
            Sportzon is a revolutionary new platform that allows schools to
            monetize their sports infrastructure by renting it out to the
            public. With Sportzon, schools can generate additional revenue,
            increase community engagement, and provide a valuable service to
            their local community.
          </p>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-xs-12">
              <section className="pt-0">
                <div className="container">
                  <div className="row justify-content-center">
                    <div
                      className="col-xl-6 col-lg-10 col-md-12 col-sm-12 wow  fadeInUp animated"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInUp",
                      }}
                    >
                      <div className="sec-heading center">
                        <h2 className="text-dark">
                          Benefits Of{" "}
                          <span className="text-orange">Sportzon</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center gy-xl-5 gy-lg-4 gy-5 gx-xl-5 gx-lg-4 gx-3">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                      <div
                        className=" text-center wow  fadeInUp animated theme-bg"
                        style={{
                          color: "white",
                          height: "220px",
                          alignContent: "center",
                        }}
                      >
                        <div className="px-4 py-4 d-inline-flex align-items-center justify-content-center fs-1  text-success rounded-circle">
                          <Image
                            src="/assets/img/incresed-revenue-icon.png"
                            width="50"
                            height="50"
                            alt="revenue"
                          />
                        </div>
                        <div className="benifits-title mb-3">
                          <h4 className="fs-5 text-white">Increased revenue</h4>
                          <p className="m-2" style={{ fontSize: "10px" }}>
                            Schools can generate additional revenue by renting
                            out their sports facilities to the public.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                      <div
                        className=" text-center wow  fadeInUp animated bg-orange"
                        style={{
                          color: "white",
                          height: "220px",
                          alignContent: "center",
                        }}
                      >
                        <div className="px-4 py-4 d-inline-flex align-items-center justify-content-center fs-1  text-success rounded-circle">
                          <Image
                            src="/assets/img/user-group-icon.png"
                            width="70"
                            height="50"
                            alt="engagement"
                          />
                        </div>
                        <div className="benifits-title mb-3 text-center">
                          <h4 className="fs-5 text-white">
                            {" "}
                            Increased community engagement
                          </h4>
                          <p className="m-2" style={{ fontSize: "10px" }}>
                            Sportzon helps schools to connect with their local
                            community and provide a valuable service.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                      <div
                        className=" text-center wow  fadeInUp animated theme-bg"
                        style={{
                          color: "white",
                          height: "220px",
                          alignContent: "center",
                        }}
                      >
                        <div className="px-4 py-4 d-inline-flex align-items-center justify-content-center fs-1  text-success rounded-circle">
                          <Image
                            src="/assets/img/easy-to-use-icon.png"
                            width="50"
                            height="50"
                            alt="engagement"
                          />
                        </div>
                        <div className="benifits-title mb-3 text-center">
                          <h4 className="fs-5 text-white">
                            {" "}
                            Affordable and Convenient
                          </h4>
                          <p className="m-2" style={{ fontSize: "10px" }}>
                            Sportzon makes it easy for users to find and book
                            affordable and convenient sports facilities.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                      <div
                        className="text-center wow fadeInUp animated bg-orange"
                        style={{
                          color: "white",
                          height: "220px",
                          alignContent: "center",
                        }}
                      >
                        <div className="px-4 py-4 d-inline-flex align-items-center justify-content-center fs-1  text-success rounded-circle">
                          <Image
                            src="/assets/img/export-money-icon.png"
                            width="70"
                            height="50"
                            alt="engagement"
                          />
                        </div>
                        <div className="benifits-title mb-3 text-center">
                          <h4 className="fs-5 text-white">Easy to Use</h4>
                          <p className="m-2" style={{ fontSize: "10px" }}>
                            Sportzon is easy to use for both schools and users.{" "}
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
        className="position-relative"
        id="contact-us-schools"
        style={{ background: "rgb(195 195 195)" }}
      >
        <div className="position-absolute top-0 start-0 end-0" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <Offering />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
