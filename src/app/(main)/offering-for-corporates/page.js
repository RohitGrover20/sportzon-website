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
                Empower Your Corporate Team to Get Fit Through Sports
              </h1>
              <p>
                In today's competitive business landscape, it is more important
                than ever to have a healthy and productive workforce. One of the
                best ways to achieve this is to encourage your employees to get
                fit through sports.
              </p>
              <a href="#contact-us-corporates">
                <button className="btn btn-orange">Contact Us Today</button>
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
                By encouraging your employees to get fit through sports, you can
                create a healthier and more productive workforce. You can also
                build a more positive and supportive work environment.
              </p>
              <p>
                There are a number of ways to empower your corporate team to get
                fit through sports. Here are a few ideas:
              </p>
              <ol>
                <li>Offer on-site fitness classes or sports leagues.</li>
                <li>
                  Provide employees with subsidies for gym memberships or sports
                  equipment.
                </li>
                <li>Organize corporate sports teams or tournaments.</li>
                <li>
                  Encourage employees to participate in community sports events.
                </li>
                <li>
                  Offer wellness programs that promote physical activity and
                  healthy eating.
                </li>
              </ol>

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
                          <i className="fa-solid fa-users" />
                        </div>
                        <div className="benifits-title mt-3 mb-3">
                          <h4 className="fs-5">
                            Improved employee health and well-being
                          </h4>
                        </div>
                        <div className="benifits-desc">
                          <p className="mb-0">
                            Sportzon can help corporates to improve the health
                            and well-being of their employees by providing them
                            with access to affordable and convenient sports
                            facilities. This can lead to a number of benefits,
                            including reduced absenteeism, increased
                            productivity, and improved employee morale.
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
                          <i className="fa-solid fa-arrow-down" />
                        </div>
                        <div className="benifits-title mt-3 mb-3">
                          <h4 className="fs-5">Reduced healthcare costs</h4>
                        </div>
                        <div className="benifits-desc">
                          <p className="mb-0">
                            Sportzon can help corporates to reduce their
                            healthcare costs by helping their employees to stay
                            healthy. This is because sport can help to reduce
                            the risk of chronic diseases such as heart disease,
                            stroke, and type 2 diabetes.
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
                          <i className="fa-solid fa-users" />
                        </div>
                        <div className="benifits-title mt-3 mb-3">
                          <h4 className="fs-5">
                            Increased employee engagement
                          </h4>
                        </div>
                        <div className="benifits-desc">
                          <p className="mb-0">
                            Sportzon can help corporates to increase employee
                            engagement by providing them with opportunities to
                            participate in sports and recreational activities.
                            This can help to create a more positive and
                            supportive work environment, and it can also help to
                            build stronger relationships between employees.
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
                          <i className="fa-solid fa-award" />
                        </div>
                        <div className="benifits-title mt-3 mb-3">
                          <h4 className="fs-5">Enhanced brand reputation</h4>
                        </div>
                        <div className="benifits-desc">
                          <p className="mb-0">
                            Sportzon can help corporates to enhance their brand
                            reputation by demonstrating their commitment to
                            employee health and well-being. This can make
                            corporates more attractive to potential employees
                            and customers.
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
        id="contact-us-corporates"
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
