"use client";
import Link from "next/link";
import React, { useEffect } from "react";
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
      <div className="clearfix" />
      <footer
        className="footer"
        style={{
          backgroundColor: "#808080b",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div>
          <div className="container">
            <div className="row ml-9">
              <div className="col-lg-4 col-md-4">
                <div className="footer-widget mt-3">
                  <Image
                    src="/assets/img/SportzonLogo.png"
                    className="img-footer"
                    alt="Citiskape Sports"
                    width={300}
                    height={100}
                  />
                  <div className="footer-add mt-0 pt-0">
                    <span className="foot-socials m-0 p-0">
                      <ul>
                        <li>
                          <a
                            href="https://www.facebook.com/sportzonindia/"
                            title="Facebook"
                            style={{ background: "none" }}
                            target="_blank"
                          >
                            <Image
                              src="/assets/img/Facebook_icon.png"
                              width={30}
                              height={30}
                              alt="facebook"
                            ></Image>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/company/sportzon-india/"
                            title="Linkedln"
                            style={{ background: "none" }}
                            target="_blank"
                          >
                            <Image
                              src="/assets/img/Linkedin_icon.png"
                              width={30}
                              height={30}
                              alt="linkedln"
                            ></Image>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://wa.me/9654696000"
                            title="WhatsApp"
                            style={{ background: "none" }}
                            target="_blank"
                          >
                            <i
                              className="fa fa-whatsapp"
                              aria-hidden="true"
                              style={{ fontWeight: "normal", fontSize: "36px" }}
                            ></i>
                          </a>
                        </li>

                        <a
                          href="https://www.instagram.com/sportzonindia/"
                          title="Instagram"
                          style={{ background: "none" }}
                          className="fw-bold"
                          target="_blank"
                        >
                          <li>
                            <Image
                              src="/assets/img/Instagram_icon.png"
                              width={30}
                              height={30}
                              alt="instagram"
                            ></Image>
                          </li>
                        </a>
                        <a
                          href="https://www.youtube.com/@sportzongameon"
                          title="Youtube"
                          style={{ background: "none" }}
                          target="_blank"
                        >
                          <li>
                            <Image
                              src="/assets/img/Youtube_icon.png"
                              width={30}
                              height={30}
                              alt="youtube"
                            ></Image>
                          </li>
                        </a>
                      </ul>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="footer-widget">
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

              <div className="col-lg-3 col-md-4">
                <div className="footer-widget">
                  <ul className="footer-menu">
                    <li>
                      <Link href="/">Home</Link>
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

              <div className="col-lg-2 col-md-4">
                <div className="footer-widget">
                  <ul className="footer-menu">
                    <li>
                      <Link href="/carrers">Carrers</Link>
                    </li>
                    <li>
                      <Link href="/event-gallery">Event Gallery</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <p className="mb-4">
                  © {currentYear}{" "}
                  <span>
                    {" "}
                    <a
                      href="https://www.citiskape.in/"
                      target="_blank"
                      className="text-white"
                    >
                      {" "}
                      Citiskape Sports Pvt. Ltd.
                    </a>
                  </span>{" "}
                  All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
