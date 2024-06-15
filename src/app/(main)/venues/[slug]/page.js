"use client";
import Share from "@/components/Share";
import { getVenuesBySlug } from "@/libs/fetchData";
import React, { useState, useEffect } from "react";
import BookingSection from "./BookingSection";
import BreadCrumb from "@/components/BreadCrumb";
import RatingCard from "@/components/RatingCard";
import Rating from "@/components/Rating";
import Link from "next/link";
import Booking from "../../booking/page";
export const revalidate = 10;

function VenuesBySlug({ params }) {
  const [venue, setVenue] = useState(null);
  const [booking, setBooking] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await getVenuesBySlug(params?.slug);
        if (isMounted) {
          setVenue(response?.data);
        }
      } catch (error) {
        console.error("Error fetching venue:", error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [params?.slug]);

  useEffect(() => {
    console.log(venue, "===venue");
  }, [venue]);

  return (
    <div>
      <BreadCrumb
        data={[
          { title: "Venues", link: "/venues" },
          { title: venue?.title, link: `/venues/${params.slug}` },
        ]}
      />
      {!booking ? (
        <section className="gray-simple">
          <div className="container">
            <div className="row" style={{ marginLeft: "0px" }}>
              {/* Left Upper Section */}
              <div className="row">
                {/* Post Title */}
                <div className="col-xl-8 col-lg-8 col-md-12 px-0">
                  <div className="d-flex">
                    <Rating rating={venue?.rating} />
                    <RatingCard type="Arena" arena={venue?._id} />
                  </div>
                  <h1 className="pb-lg-1 text-orange">{venue?.title}</h1>
                  <div className="d-lg-flex flex-wrap align-items-center justify-content-between border-bottom">
                    <div className="d-lg-flex align-items-center me-4">
                      <span className="fs-5 me-2 theme-color">
                        {venue?.city}, {venue?.state}
                      </span>
                    </div>
                    <div className="d-lg-flex align-items-center mb-4">
                      <Share />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 px-0">
                  <div className="blogs-sidewraps pt-lg-0 pt-5 pb-5 mt-5 booking-venue-section">
                    <div className="blogs-sides booking-venue-section">
                      <BookingSection venue={venue} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-xl-8 col-lg-8 col-md-12 px-0"
                    id="venuebyslug-slider"
                  >
                    {venue?.gallery?.length > 0 ? (
                      // venue?.gallery?.map((item, index) => (
                      //   <div className="single-items" key={index}>
                      //     <img
                      //       className="img-fluid rounded"
                      //       src={item}
                      //       style={{ objectFit: "cover", width: "100%", height: "350px" }}
                      //     />
                      //   </div>
                      // ))
                      <div className="single-items">
                        <img
                          className="img-fluid rounded"
                          src={venue.gallery[0]}
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "350px",
                          }}
                        />
                      </div>
                    ) : (
                      <div className="single-items">
                        <img
                          className="img-fluid rounded"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9D2qLFllWTz4a3hkbaNWkU4iEiYcNBO6zvA&s"
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "350px",
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-12">
                    <div className="card card-body border">
                      <p className="fs-5 pt-3 pt-sm-3 text-dark fw-bold">
                        {venue?.address}
                      </p>
                      <div className="gmap_canvas">
                        <iframe
                          className="gmap_iframe"
                          width="100%"
                          height="250px"
                          src={`https://maps.google.com/maps?height=200&hl=en&q=${venue?.address}&t=p&z=14&ie=UTF8&iwloc=B&output=embed`}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Tabs */}
                  <div className="container mt-4" id="book-now-section">
                    <ul className="nav nav-tabs" id="venueTabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active text-dark fs-6"
                          id="sports-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#sports"
                          type="button"
                          role="tab"
                          aria-controls="sports"
                          aria-selected="true"
                        >
                          Book a Slot{" "}
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link text-dark fs-6"
                          id="description-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#description"
                          type="button"
                          role="tab"
                          aria-controls="description"
                          aria-selected="false"
                        >
                          Details
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="venueTabsContent">
                      {/* Book a slot section */}
                      <div
                        className="tab-pane fade show active"
                        id="sports"
                        role="tabpanel"
                        aria-labelledby="sports-tab"
                      >
                        <div>
                          <Booking
                            setBooking={setBooking}
                            setPaymentInfo={setPaymentInfo}
                          />
                        </div>
                      </div>
                      {/* Details Section */}
                      <div
                        className="tab-pane fade"
                        id="description"
                        role="tabpanel"
                        aria-labelledby="description-tab"
                      >
                        <div
                          className="card card-body border-0 bg-light mt-4 p-4"
                          style={{
                            border: "1px solid #0A5A94",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          <h6 className="mb-0 fs-5 text-dark">
                            <i
                              className="fa fa-file-text text-orange fs-4"
                              aria-hidden="true"
                            ></i>
                            {"   "}
                            Description
                          </h6>
                          <p className="fs-6 pt-sm-3">{venue?.description}</p>
                          <div className="d-flex flex-row align-items-center justify-content-center">
                            <h6 className="mb-0 text-dark">
                              Timings | {"   "}
                            </h6>
                            <p className="fs-6 pt-sm-2 ms-2">
                              <strong className="fw-bold text-dark">
                                Opens At{" "}
                                <span className="text-orange">
                                  {venue?.timing?.open}
                                </span>
                              </strong>
                              <strong className="ms-3 text-dark fw-bold">
                                Closes At{" "}
                                <span className="theme-color">
                                  {venue?.timing?.close}
                                </span>
                              </strong>
                            </p>
                          </div>
                          <hr className="theme-color fs-1" />
                          <div className="mt-4">
                            <h6 className="mb-0 fs-5 text-dark">
                              <i className="fas fa-clipboard-list text-orange fs-4"></i>
                              {"    "}
                              Amenities Available
                            </h6>
                            <ul className="row gy-4 p-0 my-1 mt-0">
                              {venue?.amenities?.map((item, index) => (
                                <li
                                  className="font--medium col-xl-4 col-lg-4"
                                  key={index}
                                >
                                  <span className="square--30 circle d-inline-flex align-items-center justify-content-center text-success me-2">
                                    <i className="fa-solid fa-check-circle" />
                                  </span>
                                  {item?.label}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <hr className="theme-color fs-1" />
                          <h6 className="mb-0 fs-5 pt-2 text-dark">
                            <i
                              className="fa fa-times-circle-o theme-color fs-4"
                              aria-hidden="true"
                            ></i>
                            {"   "}
                            Cancellation
                          </h6>
                          <p className="fs-6 pt-sm-3">
                            Cancellation Of Bookings Is Allowed As Per The
                            Cancellation Policy.
                            <br />
                            <Link
                              href="/cancellation-policy"
                              className="theme-color fs-6 fw-bold text-decoration-underline"
                            >
                              View Cancellation Policy
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section
          style={{
            backgroundImage: "url(/assets/img/Confirmation-bg.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="sec-heading text-center">
            <div
              className="label d-inline-flex rounded-4 mb-2"
              style={{ background: "#D9D9D9" }}
            >
              <span className="theme-color fw-bold">Venue Booking</span>
            </div>
            {paymentInfo?.data?.bookingId?.includes("CSH") ? (
              <h2 className="mb-1 text-success">
                Reservation Confirmed{" "}
                <p className="text-dark fs-5">
                  Please pay in cash at the venue.
                </p>
              </h2>
            ) : (
              <h2 className="mb-1 text-success">
                Payment Success{" "}
                <i className="fa fa-check-circle text-success"></i>
              </h2>
            )}
            <p className="text-dark fs-5 fw-bold text-center go-to-book-btn">
              For more information{" "}
              <Link href="/user/my-bookings">
                <em className="fw-bold theme-bg btn-md text-white fs-6 ms-2">
                  Go to My Booking <i className="fa fa-arrow-right"></i>
                </em>
              </Link>
            </p>
          </div>
        </section>
      )}
    </div>
  );
}

export default VenuesBySlug;
