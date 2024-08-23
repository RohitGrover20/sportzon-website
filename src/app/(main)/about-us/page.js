import React from "react";
import Link from "next/link";
function AboutUs() {
  return (
    <div>
      <section
        className="bg-cover p-5"
        style={{ background: "url(/assets/img/aboutTop.jpeg)no-repeat" }}
        data-overlay={4}
      >
        <div className="ht-70" />
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-12 col-lg-10 col-12 text-center">
              <h2 className="text-white mb-3">
                Welcome To Sportzon,
                <br />
              </h2>
              <h5 className="text-white mb-3">
                The Ultimate Destination For Sports Enthusiasts Of All Levels.
              </h5>
              <Link
                href="/contact-us"
                className="btn btn-lg px-5 theme-bg text-white fw-bold"
                style={{ background: "#0a5993" }}
              >
                Know More...
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5 about-us">
        <div className="container">
          <div className="row justify-content-between align-items-center mb-5">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="position-relative exloi py-lg-0 py-4">
                <h3
                  className="text-orange"
                  style={{
                    fontFamily:
                      '"Playfair Display", "Open Sans", Calibri, Tahoma, serif',
                  }}
                >
                  About Us
                </h3>
                <p className="mb-0 fs-6 fw-light mb-3 text-dark">
                  <strong>Sportzon</strong>, your all-encompassing sports
                  companion, extends its reach through both a dynamic website
                  and a user-friendly mobile app. Seamlessly integrating
                  technology into the world of sports, we bring you a unified
                  platform that caters to all your athletic needs, whether
                  you're exploring on the web or on the go. Discover, engage,
                  and elevate your sports experience with Sportzon - where
                  innovation meets accessibility. If you have difficulty finding
                  the time or resources to do so. This may include people who
                  work long hours, who do not have access to a sports complex,
                  or who are new to an area.
                </p>
                <p className="mb-0 fs-6 fw-light text-dark">
                  Individuals can use the Sportzon app to find nearby sports
                  complexes, book court time, and connect with coaches and
                  personal trainers. Businesses can utilize the app to promote
                  their sports complexes, events, and services. Sportzon is a
                  prime example of how technology can enhance lives by making it
                  easier for people to discover and engage in sports, ultimately
                  leading to a healthier and happier lifestyle.
                  <br />
                  <br />
                  For any inquiries or assistance, feel free to contact us via
                  email at{" "}
                  <a href="mailto:info@sportzon.in" className="fw-bold">
                    info@sportzon.in
                  </a>{" "}
                  or call our enquiry number at{" "}
                  <a href="tel:+919654696000" className="fw-bold">
                    9654696000
                  </a>
                  . Our support team is available from{" "}
                  <span className="fw-bold">9 AM to 7 PM</span>. We aim to
                  respond to enquiries within 1 to 3 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="clearfix" />
    </div>
  );
}

export default AboutUs;
