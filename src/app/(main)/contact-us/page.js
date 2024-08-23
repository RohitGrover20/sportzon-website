"use client";
import React, { useEffect } from "react";
import ContactForm from "./ContactForm";

function Page() {
  const handleLocationClick = () => {
    const address =
      "108, 1st Floor, ABC Complex, Veer Savarkar Block, Shakarpur, Laxmi Nagar, Delhi-110095";
    const encodedAddress = encodeURIComponent(address);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

    window?.open(mapsUrl, "_blank");
  };

  useEffect(() => {
    // Attach the event handler here, ensuring it runs on the client side
    const locationLink = document.getElementById("locationLink");
    if (locationLink) {
      locationLink.addEventListener("click", handleLocationClick);
    }

    // Clean up the event listener on component unmount
    return () => {
      if (locationLink) {
        locationLink.removeEventListener("click", handleLocationClick);
      }
    };
  }, []);

  return (
    <>
      <section className="theme-bg">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 pe-xl-5 pe-lg-4 text-white">
              <h1 className="display-4 font--bold text-white">Contact Us</h1>
              <p className="fs-5 pb-4 mb-0 mb-sm-2">
                Get In Touch With Us By Dropping a Message Or Call Us Now
              </p>
              <div
                className="card border-0 p-4 rounded-3"
                style={{ backgroundColor: "#05395F" }}
              >
                <h2 className="h4 text-dark font--bold mb-4 text-white">
                  India
                </h2>
                <ul className="p-0 m-0 ">
                  <li className="d-flex mb-3">
                    <i className="fa-solid fa-envelope-circle-check fs-5 text-white me-2" />
                    <a className="text-white" href="mailto:info@sportzon.in">
                      info@sportzon.in
                    </a>
                  </li>
                  <li className="d-flex mb-3">
                    <i className="fa-solid fa-phone text-white fs-5 me-2" />
                    <a className="text-white" href="tel:9654696000">
                      9654696000
                    </a>
                  </li>
                  <li className="d-flex mb-3">
                    <i className="fa-solid fa-business-time fs-5 text-white me-2" />
                    <span className="text-white">
                      Available for enquiries from 9 AM to 7 PM
                    </span>
                  </li>
                  <li className="d-flex mb-3">
                    <i className="fa-solid fa-reply fs-5 text-white me-2" />
                    <span className="text-white">
                      We aim to respond to enquiries within 1 to 3 business days
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8 col-xl-7 offset-xl-1">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <div className="clearfix"></div>
    </>
  );
}

export default Page;
