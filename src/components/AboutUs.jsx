import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <section className="about-sec">
        <div
          style={{
            backgroundImage: 'url("/assets/img/World_Map_img.png")',
            backgroundPosition: "center",
            width: "100vw",
            height: "auto",
          }}
        >
          <div className="container text-center">
            {/* First Row */}
            <div className="d-flex justify-content-around mt-5 mb-5 row">
              {/* 1st part */}
              <div className="col d-flex flex-column align-items-center mb-3 mb-md-0">
                <div className="m-4 d-flex justify-content-center">
                  <Image
                    src="/assets/img/people-icon.png"
                    width={50}
                    height={50}
                    alt="People Icon"
                  />
                </div>
                <div
                  style={{ width: "200px", height: "130px" }}
                  className="d-flex justify-content-center align-items-center about-info1"
                >
                  <Image
                    src="/assets/img/Expert-Coaching-Staffs.png"
                    className="card-img-top"
                    width={200}
                    height={130}
                    alt="Expert Coaching"
                  />
                </div>
              </div>

              {/* 2nd part */}
              <div className="col d-flex flex-column align-items-center mb-3 mb-md-0 position-relative about-sec1">
                <div className="d-flex justify-content-center">
                  <Image
                    src="/assets/img/blue-bg.png"
                    className="card-img-top"
                    layout="responsive"
                    width={150}
                    height={250}
                    alt="Blue Background"
                  />
                </div>
                <div className="position-absolute top-50 start-50 translate-middle text-center">
                  <div className="mb-2 d-flex justify-content-center">
                    <Image
                      src="/assets/img/venue-icon.png"
                      width={50}
                      height={50}
                      alt="Venue Icon"
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <Image
                      src="/assets/img/Top-Notch-Venues-img.png"
                      layout="responsive"
                      width={150}
                      height={150}
                      alt="Top Notch Venues"
                    />
                  </div>
                </div>
              </div>

              {/* 3rd part */}
              <div className="col d-flex flex-column align-items-center mb-3 mb-md-0">
                <div className="m-4 d-flex justify-content-center">
                  <Image
                    src="/assets/img/Booked-icon.png"
                    width={50}
                    height={50}
                    alt="Booked Icon"
                  />
                </div>
                <div
                  style={{ width: "200px", height: "130px" }}
                  className="d-flex justify-content-center align-items-center about-info1"
                >
                  <Image
                    src="/assets/img/Convenient-Booking-Option-Img.png"
                    className="card-img-top"
                    width={200}
                    height={130}
                    alt="Convenient Booking"
                  />
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="d-flex justify-content-around mt-5 mb-5 row">
              {/* 1st part */}
              <div className="col d-flex flex-column align-items-center mb-3 mb-md-0">
                <div className="m-4 d-flex justify-content-center">
                  <Image
                    src="/assets/img/communtiy-icon.png"
                    width={50}
                    height={50}
                    alt="Community Icon"
                  />
                </div>
                <div
                  style={{ width: "270px", height: "100px" }}
                  className="d-flex justify-content-center align-items-center about-info2"
                >
                  <Image
                    src="/assets/img/Community-Engagement-Img.png"
                    className="card-img-top"
                    width={270}
                    height={100}
                    alt="Community Engagement"
                  />
                </div>
              </div>

              {/* 2nd part */}
              <div className="col d-flex flex-column align-items-center mb-3 mb-md-0 position-relative about-sec1">
                <div className="d-flex mb-2 justify-content-center">
                  <Image
                    src="/assets/img/orange-bg.png"
                    className="card-img-top"
                    layout="responsive"
                    width={150}
                    height={250}
                    alt="Orange Background"
                  />
                </div>
                <div className="position-absolute top-50 start-50 translate-middle text-center">
                  <div className="mb-2 d-flex justify-content-center">
                    <Image
                      src="/assets/img/cost-effective-icon.png"
                      width={50}
                      height={50}
                      alt="Cost Effective Icon"
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <Image
                      src="/assets/img/Cost-effective-solutions-Img.png"
                      layout="responsive"
                      width={150}
                      height={150}
                      alt="Cost Effective Solutions"
                    />
                  </div>
                </div>
              </div>

              {/* 3rd part */}
              <div className="col d-flex flex-column align-items-center mb-3 mb-md-0">
                <div className="m-4 d-flex justify-content-center">
                  <Image
                    src="/assets/img/ecosystem-icon.png"
                    width={50}
                    height={50}
                    alt="Ecosystem Icon"
                  />
                </div>
                <div
                  style={{ width: "300px", height: "100px" }}
                  className="d-flex justify-content-center  align-items-center about-info2"
                >
                  <Image
                    src="/assets/img/sports-ecosystem-Img.png"
                    className="card-img-top"
                    width={300}
                    height={100}
                    alt="Sports Ecosystem"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
