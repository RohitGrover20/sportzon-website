"use client";
import Share from "@/components/Share";
import React, { useState, useEffect } from "react";
import ExtraInfo from "./ExtraInfo";
import Registration from "./Registration";
import { getEventBySlug } from "@/libs/fetchData";
import BreadCrumb from "@/components/BreadCrumb";
import Link from "next/link";
export const revalidate = 10;
function EventDetails({ params }) {
  const [paymentcfm, setPaymentCfm] = useState(false);
  const [event, setEvent] = useState();
  useEffect(() => {
    const fetchEventData = async () => {
      const eventData = await getEventBySlug(params.slug);
      setEvent(eventData?.data);
    };

    fetchEventData();
  }, [params?.slug]);
  return (
    <>
      <BreadCrumb
        data={[
          { title: "Events", link: "/events" },
          { title: event?.title, link: `/events/${params.slug}` },
        ]}
      />
      {paymentcfm?.code == "booked" ? (
        <section
          style={{ backgroundImage: "url(/assets/img/Confirmation-bg.png)" }}
        >
          <div className="sec-heading text-center">
            <div
              className="label d-inline-flex rounded-4 mb-2"
              style={{ background: "#D9D9D9" }}
            >
              <span className="theme-color fw-bold">Venue Booking</span>
            </div>

            {paymentcfm?.data?.bookingId && (
              <h2 className="mb-1 text-success">
                Payment Success <i class="fa fa-check-circle text-success"></i>
              </h2>
            )}
            <p className="text-dark fs-5 fw-bold text-center go-to-book-btn">
              For more information{" "}
              <Link href={"/user/my-bookings"}>
                <em className="fw-bold theme-bg btn-md text-white fs-6 ms-2">
                  Go to My Booking {"    "}
                  <i className="fa fa-arrow-right"></i>
                </em>
              </Link>
            </p>
          </div>
        </section>
      ) : (
        <section className="gray-simple">
          <div className="container">
            {/* Upper Section */}
            <div className="row">
              <div className="col-xl-8 col-lg-8 col-md-12 px-0 event-join-btn">
                <span
                  className="label font--medium text-success me-3"
                  style={{ background: "lightgrey" }}
                >
                  {event && event?.eventType}
                </span>
                <h1 className="pb-lg-1 text-orange">{event?.title}</h1>
                <div className="d-lg-flex flex-wrap align-items-center justify-content-between border-bottom">
                  <div className="d-lg-flex align-items-center me-4">
                    <span className="fs-5 me-2 theme-color">
                      {event?.city}, {event?.state}
                    </span>
                  </div>
                  <div className="d-lg-flex align-items-center mb-4">
                    <Share />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 px-0 pb-0 mb-0 d-flex align-items-center justify-content-center event-join-btn">
                <div className="d-flex align-items-center justify-content-center pb-0 mb-0">
                  {event?.eventDate &&
                    new Date(event.eventDate) > new Date() && (
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#eventRegistration"
                      >
                        <button
                          className="btn btn-lg theme-bg"
                          type="button"
                          style={{ background: "#0a5993", color: "white" }}
                        >
                          <i className="fa-solid fa-paper-plane me-2 ms-n1" />
                          Join Now
                        </button>
                      </a>
                    )}
                </div>
              </div>
            </div>
            {/* Product Detail */}
            <div className="row justify-content-between mb-5">
              {/* Left Section */}
              <div className="col-xl-8 col-lg-8 col-md-5 mb-3 mb-md-0">
                <img
                  src={`${event && event?.banner}`}
                  height="460px"
                  width={"100%"}
                  style={{ objectFit: "cover" }}
                  className="w-100 rounded shadow-sm"
                  alt="Event Image"
                />
              </div>
              {/* Right Section */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-xl-4 px-xl-5">
                <div className="card card-body border">
                  <div className="pb-0 mb-0">
                    <p className="m-0 fs-6 theme-color">
                      <i
                        className="fa fa-calendar"
                        style={{ color: "orange" }}
                      />{" "}
                      {event?.eventDate &&
                        new Date(event.eventDate).toDateString()}{" "}{" - "}
                       {event?.eventEndDate &&
                        new Date(event.eventEndDate).toDateString()}{" "}
                    </p>
                    <p className="m-0 fs-6 theme-color">
                      <i
                        className="fa fa-clock"
                        style={{ color: "orange" }}
                      />{" "}Timings -  
                      {event?.eventTime && event?.eventTime?.from} to{" "}
                      {event?.eventTime && event?.eventTime?.to}
                    </p>
                  </div>
                  <hr />
                  <p
                    className="fs-6 text-truncate text-dark fw-bold"
                    title={event?.address}
                    style={{ cursor: "pointer" }}
                  >
                    {event?.address}
                  </p>
                  <div className="gmap_canvas">
                    <iframe
                      className="gmap_iframe"
                      width="100%"
                      height="250px"
                      src={`https://maps.google.com/maps?height=200&hl=en&q=${event?.address}&t=p&z=14&ie=UTF8&iwloc=B&output=embed`}
                    />
                  </div>
                  <hr />
                  <div
                    className="d-lg-inline-flex align-items-center justify-content-center"
                    style={{ height: "40px" }}
                  >
                    <button
                      type="button"
                      className="btn btn-outline-dark disabled btn-md"
                    >
                      <span className="label bg-light-primary font--medium text-primary rounded-5 me-3">
                        <i className="fa fa-bolt" /> Fees
                      </span>
                      <span className="text-orange fw-bold fs-5">
                        ₹ {event && event?.entryFees}/{" "}
                        {event && event?.memberType}
                      </span>
                    </button>
                    {event && event?.isPrizeIncluded ? (
                      <button
                        type="button"
                        className="btn btn-success disabled"
                      >
                        <span className="label theme-bg font--medium text-white rounded-5 me-3">
                          <i className="fa fa-award theme-bg" /> Prize Money
                        </span>
                        <span>₹{event && event?.prize}</span>
                      </button>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <ExtraInfo event={event} />
          </div>
          <div
            className="modal fade"
            id="eventRegistration"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="eventRegistration"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-centered login-pop-form modal-md"
              role="document"
            >
              <div className="modal-content" id="eventRegistrationModal">
                <span
                  className="mod-close"
                  data-bs-dismiss="modal"
                  aria-hidden="true"
                  id="registrationClose"
                >
                  <i className="fas fa-close" />
                </span>

                <Registration event={event} setPaymentCfm={setPaymentCfm} />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default EventDetails;
