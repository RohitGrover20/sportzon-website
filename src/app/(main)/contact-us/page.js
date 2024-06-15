"use client";
import React, { useEffect } from "react";
import ContactForm from "./ContactForm";

function Page() {
  const handleLocationClick = () => {
    const address = "108, 1st Floor, ABC Complex, Veer Savarkar Block, Shakarpur, Laxmi Nagar, Delhi-110095";
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
      <section className="bg-light-success">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 pe-xl-5 pe-lg-4">
              <h1 className="display-2 font--bold">Contacts</h1>
              <p className="fs-5 pb-4 mb-0 mb-sm-2">
                Get in touch with us by droping messages or call us now
              </p>
              <div className="card border-0 p-4 rounded-3">
                <h2 className="h4 text-dark font--bold mb-4">India</h2>
                <ul className="p-0 m-0">
                  <li className="d-flex mb-3">
                    <i className="fa-solid fa-phone text-primary fs-5 me-2" />
                    <a className="text-muted" href="tel:011-45613001">
                      011-45613001
                    </a>
                  </li>
                  <li className="d-flex mb-3">
                    <i className="fa-solid fa-envelope-circle-check fs-5 text-primary me-2" />
                    <a className="text-muted" href="mailto:info@sportzon.in">
                      info@sportzon.in
                    </a>
                  </li>
                  <li className="d-flex mb-3">
                    <i className="fa-solid fa-location-pin text-primary fs-5 me-2" />
                    <a
                      className="text-muted"
                      href=""
                      onClick={handleLocationClick}
                    >
                      108, 1st Floor, ABC Complex, Veer Savarkar Block,
                      Shakarpur, Laxmi Nagar, Delhi-110095{" "}
                    </a>
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
      {/* <section className="bg-light-info">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-lg-4 col-xl-4 col-md-12">
              <div className="card border-0 p-4 rounded-3">
                <h2 className="h4 text-dark font--bold mb-4">India</h2>
                <ul className="p-0 m-0">
                  <li className="d-flex mb-3">
                    <i className="fa-solid fa-phone text-primary fs-5 me-2" />
                    <a className="text-muted" href="tel:+918564652932">
                      +72 8564 652 932
                    </a>
                  </li>
                  <li className="d-flex mb-3">
                    <i className="fa-solid fa-envelope-circle-check fs-5 text-primary me-2" />
                    <a
                      className="text-muted"
                      href="mailto:themezhub@support.com"
                    >
                      Support@themezhub.com
                    </a>
                  </li>
                  <li className="d-flex mb-3">
                    <i className="fa-solid fa-location-pin text-primary fs-5 me-2" />
                    <span className="text-muted">
                      4488 Harter Street Dayton, OH 45402
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-xl-4 col-md-12">
              <div className="card border-0 p-4 rounded-3">
                <h2 className="h4 text-dark font--bold mb-4">Australia</h2>
                <ul className="p-0 m-0">
                  <li className="d-flex mb-3">
                    <i className="fa-solid fa-phone text-primary fs-5 me-2" />
                    <a className="text-muted" href="tel:+918564652932">
                      +41 6936 521 458
                    </a>
                  </li>
                  <li className="d-flex mb-3">
                    <i className="fa-solid fa-envelope-circle-check fs-5 text-primary me-2" />
                    <a className="text-muted" href="mailto:helps@themezhub.com">
                      Helps@themezhub.com
                    </a>
                  </li>
                  <li className="d-flex mb-3">
                    <i className="fa-solid fa-location-pin text-primary fs-5 me-2" />
                    <span className="text-muted">
                      4048 Clinton Street Searcy, AR 72143
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-xl-4 col-md-12">
              <div className="card border-0 p-4 rounded-3">
                <h2 className="h4 text-dark font--bold mb-4">New York</h2>
                <ul className="p-0 m-0">
                  <li className="d-flex mb-3">
                    <i className="fa-solid fa-phone text-primary fs-5 me-2" />
                    <a className="text-muted" href="tel:+918564652932">
                      +91 9635 210 021
                    </a>
                  </li>
                  <li className="d-flex mb-3">
                    <i className="fa-solid fa-envelope-circle-check fs-5 text-primary me-2" />
                    <a
                      className="text-muted"
                      href="mailto:themezhub@support.com"
                    >
                      Career@themezhub.com
                    </a>
                  </li>
                  <li className="d-flex mb-3">
                    <i className="fa-solid fa-location-pin text-primary fs-5 me-2" />
                    <span className="text-muted">
                      3971 Taylor Street White Plains, NY 10601
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="clearfix"></div> */}
    </>
  );
}

export default Page;
