import Offering from "@/components/Offering";
import React from "react";
import Image from "next/image";
function page() {
  return (
    <>
      <section
        className="bg-cover py-10"
        style={{
          background: "url(/assets/img/corporate-building-img.png)",
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
          {" "}
          <h1
            className="mb-0 text-white offerings-heading2"
            style={{ fontSize: "35px" }}
          >
            Empower Your Corporate Team to Get Fit Through Sports
          </h1>
          <p className="offerings-para">
            In today's competitive business landscape, it is more important than
            ever to have a healthy and productive workforce. One of the best
            ways to achieve this is to encourage your employees to get fit
            through sports.
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
                      className="col-xl-6 col-lg-10 col-md-12 col-sm-12 wow fadeInUp animated"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInUp",
                      }}
                    >
                      <div className="sec-heading center">
                        <h2 className="text-dark">
                          Benefits of{" "}
                          <span className="text-orange">Sportzon</span>
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center gy-xl-5 gy-lg-4 gy-5 gx-xl-5 gx-lg-4 gx-3">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                      <div
                        className="text-center wow  fadeInUp animated theme-bg"
                        style={{
                          color: "white",
                          height: "220px",
                          alignContent: "center",
                        }}
                      >
                        <div className="px-4 py-4 d-inline-flex align-items-center justify-content-center fs-1  text-success rounded-circle">
                          <Image
                            src="/assets/img/heart-health-icon.png"
                            width="80"
                            height="80"
                            alt="revenue"
                          />
                        </div>
                        <div className="benifits-title mb-3">
                          <h4 className="fs-5 text-white">
                            Improved employee health and well-being
                          </h4>
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
                            src="/assets/img/reduce-cost-icon.png"
                            width="80"
                            height="80"
                            alt="engagement"
                          />
                        </div>
                        <div className="benifits-title mb-3 text-center">
                          <h4 className="fs-5 text-white">
                            Reduced healthcare costs
                          </h4>
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
                            src="/assets/img/employee-conn-icon.png"
                            width="80"
                            height="80"
                            alt="engagement"
                          />
                        </div>
                        <div className="benifits-title mb-3 text-center">
                          <h4 className="fs-5 text-white">
                            {" "}
                            Increased employee engagement
                          </h4>
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
                            src="/assets/img/star-icon.png"
                            width="80"
                            height="80"
                            alt="engagement"
                          />
                        </div>
                        <div className="benifits-title mb-3 text-center">
                          <h4 className="fs-5 text-white">
                            Enhanced brand reputation
                          </h4>
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
