import Share from "@/components/Share";
import config from "@/config";
import { getVenuesBySlug } from "@/libs/fetchData";
import React from "react";
import BookingSection from "./BookingSection";
import BreadCrumb from "@/components/BreadCrumb";

async function VenuesBySlug({ params }) {
  const { data } = await getVenuesBySlug(params.slug);
  const venue = data;
  return (
    <div>
      <BreadCrumb
        data={[
          { title: "Venues", link: "/venues" },
          { title: venue?.title, link: `/venues/${params.slug}` },
        ]}
      />
      <section className="gray-simple">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-8 col-lg-8 col-md-12 p-0">
              {/* Post Title */}
              <h1 className="pb-2 pb-lg-3">{venue && venue.title}</h1>
              <div className="d-flex flex-wrap align-items-center justify-content-between border-bottom mb-4">
                <div className="d-flex align-items-center mb-4 me-4">
                  <span className="fs-sm me-2">
                    {venue && venue.city}, {venue && venue.state}
                  </span>
                  <span>
                    <i className="fa fa-star text-warning" />{" "}
                    {venue && venue.rating}
                  </span>
                  <a
                    className="text-primary position-relative fw-semibold p-0"
                    href="#"
                    data-scroll=""
                    data-scroll-offset={80}
                  >
                    <span className="text-success ms-2"> (Rate Venue?)</span>
                  </a>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <Share />
                </div>
              </div>

              <div className="row">
                <div
                  className="col-xl-12 col-lg-12 col-md-12 px-0"
                  id="venuebyslug-slider"
                >
                  {venue &&
                    venue.gallery &&
                    venue.gallery.map((item, index) => {
                      return (
                        <div className="single-items" key={index}>
                          <img
                            className="img-fluid"
                            src={`${config.API_URL}/venue/${item}`}
                            style={{
                              objectFit: "contain",
                              width: "100%",
                              height: "350px",
                            }}
                          />
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="card card-body bg-light mt-4">
                <h6 className="mb-0">Sports Available</h6>
                {/* <span className="fs-sm text-muted">4 days ago</span> */}
                <ul className="row gx-3 gy-4 p-0 my-1 mt-0">
                  {venue &&
                    venue.activities &&
                    venue.activities.map((item, index) => {
                      return (
                        <li
                          className="font--medium col-xl-3 col-lg-3 col-3"
                          key={index}
                        >
                          <span className="square--30 circle d-inline-flex align-items-center justify-content-center text-success bg-light-success me-2">
                            <i className="fa-solid fa-check" />
                          </span>
                          {item && item.label}
                        </li>
                      );
                    })}
                </ul>
              </div>

              <div className="card card-body  bg-light mt-4">
                <h6 className="mb-0">Amenities</h6>
                {/* <span className="fs-sm text-muted">4 days ago</span> */}
                <ul className="row gx-3 gy-4 p-0 my-1 mt-0">
                  {venue &&
                    venue.amenities &&
                    venue.amenities.map((item, index) => {
                      return (
                        <li
                          className="font--medium col-xl-3 col-lg-3 col-3"
                          key={index}
                        >
                          <span className="square--30 circle d-inline-flex align-items-center justify-content-center text-success bg-light-success me-2">
                            <i className="fa-solid fa-check" />
                          </span>
                          {item && item.label}
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className="card card-body border-0 bg-light mt-4">
                <h6 className="mb-0">Related to {venue && venue.title}</h6>
                <p className="fs-6 pt-2 pt-sm-3">
                  {venue && venue.description}
                </p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-12 col-xl-offset-1 p-0">
              <div className="blogs-sidewraps pt-lg-0 pt-4">
                <div className="blogs-sides">
                  <BookingSection venue={venue} />

                  <div className="card card-body border">
                    <h6 className="mb-0">Timings</h6>
                    <p className="fs-6 pt-2 pt-sm-3">
                      <strong>
                        Opens At{" "}
                        <span className="text-success">
                          {venue && venue.timing && venue.timing.open}
                        </span>
                      </strong>
                      <strong className="ms-3">
                        Closes At{" "}
                        <span className="text-danger">
                          {venue && venue.timing && venue.timing.close}
                        </span>
                      </strong>
                    </p>
                  </div>
                  <div className="card card-body border mt-4">
                    <h6 className="mb-0">Location</h6>
                    <p className="fs-6 pt-2 pt-sm-3">
                      {venue && venue.address}
                    </p>

                    <div className="gmap_canvas">
                      <iframe
                        className="gmap_iframe"
                        width="100%"
                        height="200px"
                        // frameBorder={0}
                        // scrolling="no"
                        // marginHeight={0}
                        // marginWidth={0}
                        src={`https://maps.google.com/maps?height=200&hl=en&q=${
                          venue && venue.address
                        }&t=p&z=14&ie=UTF8&iwloc=B&output=embed`}
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="blogs-sides mt-4 mt-lg-5">
                                    <img
                                        src="assets/img/popeyes-banner-ad.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VenuesBySlug;
