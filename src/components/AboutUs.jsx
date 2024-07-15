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
            <div className="d-flex justify-content-around row">
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
                  className=" about-info1"
                >
                  {/* <Image
                    src="/assets/img/Expert-Coaching-Staffs.png"
                    className="card-img-top"
                    width={200}
                    height={130}
                    alt="Expert Coaching"
                  /> */}
                  <p className="fs-3 text-dark m-0 p-0">Expert </p> <p className="fs-3 m-0 p-0 " style={{color:"#2f85e3f2"}}>Coaching </p> <p className="fs-3 text-dark m-0 p-0">Staffs</p>
                </div>
              </div>


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
                  style={{ width: "200px", height: "130px" }}
                  className=" about-info1"
                >
                  <p className="fs-3 text-dark m-0 p-0">Community </p> <p className="fs-3 text-orange m-0 p-0">Engagement </p>
                </div>
              </div>

              {/* 2nd part */}
              {/* <div className="col d-flex flex-column align-items-center mb-3 mb-md-0 position-relative about-sec1">
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
              </div> */}
               <div className="col d-flex flex-column align-items-center mb-3 mb-md-0">
                <div className="m-4 d-flex justify-content-center">
                <Image
                      src="/assets/img/stadium-icon.png"
                      width={50}
                      height={50}
                      alt="Venue Icon"
                      style={{color:"orange"}}
                    />
                </div>
                <div
                  style={{ width: "200px", height: "130px" }}
                  className=" about-info1"
                >
                  <p className="fs-3 m-0 text-dark p-0">Top </p> <p className="fs-3 m-0 p-0" style={{color:"#2f85e3f2"}}>Notch</p> <p className="fs-3 m-0 p-0 text-dark">Venues </p>
                </div>
              </div>

              

              {/* 3rd part */}
              {/* <div className="col d-flex flex-column align-items-center mb-3 mb-md-0">
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
              </div> */}
              
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
                  className=" about-info1"
                >
                  {/* <Image
                    src="/assets/img/Expert-Coaching-Staffs.png"
                    className="card-img-top"
                    width={200}
                    height={130}
                    alt="Expert Coaching"
                  /> */}
                  <p className="fs-3 text-dark m-0 p-0">Convenient </p> <p className="fs-3 m-0 p-0 text-orange">Booking </p>
                  <p className="fs-3 text-dark m-0 p-0">Options </p>
                </div>
              </div>

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
                  style={{ width: "200px", height: "130px" }}
                  className=" about-info1"
                >
                  {/* <Image
                    src="/assets/img/Expert-Coaching-Staffs.png"
                    className="card-img-top"
                    width={200}
                    height={130}
                    alt="Expert Coaching"
                  /> */}
                  <p className="fs-3 text-dark m-0 p-0">Comprehensive </p> <p className="fs-3 m-0 p-0" style={{color:"#2f85e3f2"}}>Sports </p>
                  <p className="fs-3 text-dark m-0 p-0">Ecosystem </p>
                </div>
              </div>
            </div>

            {/* Second Row */}
          
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
