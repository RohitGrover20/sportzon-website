"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Tags from "./Tags";
import Image from "next/image";

function Footer() {
  const currentYear = new Date().getFullYear();
  const handleLocationClick = () => {
    const address =
      "108, 1st Floor, ABC Complex, Veer Savarkar Block, Shakarpur, Laxmi Nagar, Delhi-110095";
    const encodedAddress = encodeURIComponent(address);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

    window.open(mapsUrl, "_blank");
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
      <Tags />
      <div className="clearfix" />
      <footer className="footer bg-light">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="footer-widget mt-3">
                  <Image
                    src="/assets/img/logo/colored.png"
                    className="img-footer"
                    alt="Citiskape Sports"
                    width={300}
                    height={100}
                  />
                  <div className="footer-add">
                    <p>
                      <a href="https://www.citiskape.in/" target="_blank">
                        {" "}
                        Citiskape Sports Pvt. Ltd.
                      </a>
                      <br />
                      <a
                        className="text-muted"
                        href=""
                        onClick={handleLocationClick}
                      >
                        {" "}
                        <i className="fa-solid fa-location-pin text-success fs-6 me-2" />
                        108, 1st Floor, ABC Complex, Veer Savarkar Block,
                        Shakarpur, Laxmi Nagar, Delhi-110095{" "}
                      </a>
                    </p>
                  </div>
                  {/* <div className="foot-socials">
                    <ul>
                      <li>
                        <a href="##">
                          <i className="fa-brands fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="##">
                          <i className="fa-brands fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="##">
                          <i className="fa-brands fa-google-plus" />
                        </a>
                      </li>
                      <li>
                        <a href="##">
                          <i className="fa-brands fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="##">
                          <i className="fa-brands fa-dribbble" />
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="footer-widget">
                  <h4 className="widget-title">The Navigation</h4>
                  <ul className="footer-menu">
                    <li>
                      <Link href="/venues">Venues Booking</Link>
                    </li>
                    <li>
                      <Link href="/events">Events Booking</Link>
                    </li>
                    <li>
                      <Link href="/classes">Classes</Link>
                    </li>
                    <li>
                      <Link href="/offering-for-schools">
                        Offering for Schools
                      </Link>
                    </li>
                    <li>
                      <Link href="/offering-for-corporates">
                        Offering for Corporates
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-lg-2 col-md-4">
                <div className="footer-widget">
                  <h4 className="widget-title">Our Resources</h4>
                  <ul className="footer-menu">
                    <li>
                      <a href="http://resource.sportzon.in/news-events">
                        News & Events
                      </a>
                    </li>
                    <li>
                      <a href="http://resource.sportzon.in/blogs">Blogs</a>
                    </li>
                    <li>
                      <a href="http://resource.sportzon.in/media-gallery">
                        Media & Gallery
                      </a>
                    </li>
                    <li>
                      <a href="http://resource.sportzon.in/help-support">
                        Help &amp; Support
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title">The Company</h4>
                  <ul className="footer-menu">
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/refund-policy">Refund Policy</Link>
                    </li>
                    <li>
                      <Link href="/cancellation-policy">
                        Cancellation Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms-conditions">Terms & Conditions</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title">Download Our Apps</h4>
                  <div className="app-wrap mt-4 mb-4">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <a href="/">
                          <Image
                            src="/assets/img/light-play.png"
                            className="img-fluid"
                            alt="Download from Play Store"
                            style={{ width: "300px", height: "auto" }}
                            width={300}
                            height={10}
                          />
                        </a>
                      </div>
                      <div className="col-md-6 mb-3">
                        <a href="/">
                          <Image
                            src="/assets/img/light-ios.png"
                            className="img-fluid"
                            alt="Download from App Store"
                            style={{ width: "300px", height: "auto" }}
                            width={300}
                            height={10}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <h4 className="widget-title mt-n4">Get In Touch</h4>
                  <span className="foot-socials m-0 p-0">
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/sportzonindia/"
                          title="Facebook"
                        >
                          <i
                            className="fa-brands fa-facebook"
                            style={{ color: "#3b5998", fontSize: "30px" }}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/sportzon-india/"
                          title="Linkedln"
                        >
                          <i
                            className="fa-brands fa-linkedin"
                            style={{ color: "#0077b5", fontSize: "30px" }}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/sportzonindia/"
                          title="Instagram"
                        >
                          <i
                            className="fa-brands fa-instagram"
                            style={{ color: "red", fontSize: "30px" }}
                          />
                        </a>
                      </li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-12 col-lg-12 col-md-12 text-center">
                <p className="mb-0">
                  <a href="https://www.citiskape.in/" target="_blank">
                    Citiskape Sports Pvt. Ltd.{" "}
                  </a>{" "}
                  © {currentYear} <a href=""></a>Sportzon®
                </p>
              </div>
              {/* <div className="col-xl-8 col-lg-7 col-md-7">
                <div className="job-info-count-group">
                  <div className="single-jb-info-count">
                    <div className="jbs-y7">
                      <h5 className="ctr">6</h5>
                      <span className="theme-2-cl">K</span>
                    </div>
                    <div className="jbs-y5">
                      <p>Active users</p>
                    </div>
                  </div>
                  <div className="single-jb-info-count">
                    <div className="jbs-y7">
                      <h5 className="ctr">5</h5>
                      <span className="theme-2-cl">M</span>
                    </div>
                    <div className="jbs-y5">
                      <p>Happy Customers</p>
                    </div>
                  </div>
                  <div className="single-jb-info-count">
                    <div className="jbs-y7">
                      <h5 className="ctr">38</h5>
                      <span className="theme-2-cl">K</span>
                    </div>
                    <div className="jbs-y5">
                      <p>Followers</p>
                    </div>
                  </div>
                  <div className="single-jb-info-count">
                    <div className="jbs-y7">
                      <h5 className="ctr">100</h5>
                      <span className="theme-2-cl">+</span>
                    </div>
                    <div className="jbs-y5">
                      <p>Companies</p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
