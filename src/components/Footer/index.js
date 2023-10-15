import Link from "next/link";
import React from "react";
import Tags from "./Tags";

function Footer() {
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
                  <img
                    src="/assets/img/logo/colored.png"
                    className="img-footer"
                    alt=""
                  />
                  <div className="footer-add">
                    <p>
                      Collins Street West, Victoria Near Bank Road
                      <br />
                      Australia QHR12456.
                    </p>
                  </div>
                  <div className="foot-socials">
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
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
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
              <div className="col-lg-2 col-md-4">
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
                    {/* <li>
                      <a href="##">Affiliate Program</a>
                    </li> */}
                    <li>
                      <a href="http://resource.sportzon.in/help-support">
                        Help &amp; Support
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
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
                  <h4 className="widget-title">Download Apps</h4>
                  <div className="app-wrap">
                    <p>
                      <a href="/">
                        <img
                          src="/assets/img/light-play.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </p>
                    <p>
                      <a href="/">
                        <img
                          src="/assets/img/light-ios.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-4 col-lg-5 col-md-5">
                <p className="mb-0">
                  © 2023 Sportzon® Design by Yesteq Ventures.
                </p>
              </div>
              <div className="col-xl-8 col-lg-7 col-md-7">
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
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
