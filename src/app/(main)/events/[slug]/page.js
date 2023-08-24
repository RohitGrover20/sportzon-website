import Share from "@/components/Share";
import React from "react";
import ExtraInfo from "./ExtraInfo";
import config from "@/config";
import Registration from "./Registration";
import { getEventBySlug } from "@/libs/fetchData";
import BreadCrumb from "@/components/BreadCrumb";

async function EventDetails({ params }) {
  const { data } = await getEventBySlug(params.slug);
  const event = data;
  const totalBooking = event.totalSlots - event.emptySlots;
  const progress = parseInt(parseFloat(totalBooking / event.totalSlots) * 100);
  return (
    <>
      <BreadCrumb
        data={[
          { title: "Events", link: "/events" },
          { title: event?.title, link: `/events/${params.slug}` },
        ]}
      />
      <section className="gray-simple">
        <div className="container">
          {/* Product Detail */}
          <div className="row justify-content-between mb-5">
            <div className="col-xl-6 col-lg-6 col-md-5 mb-3 mb-md-0">
              <img
                src={`${config.API_URL}/events/${event && event.banner}`}
                className="w-100 rounded shadow-sm"
              />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-7 col-xl-5 px-xl-5">
              {/* Top Item */}
              <div className="d-flex align-items-center pt-3 py-2">
                <span className="label bg-light-danger font--medium text-danger me-3">
                  {event && event.eventType}
                </span>
                <p className="text-primary m-0">
                  <i className="fa fa-calendar" />{" "}
                  {new Date(event.eventDate).toDateString()}{" "}
                  {event.eventTime && event.eventTime.from} to{" "}
                  {event.eventTime && event.eventTime.to}
                </p>
                {/* <span className="font--medium">V00273124</span> */}
              </div>
              {/* Item Title */}
              <h1 className=" pb-0 mb-0 lh-base" style={{ fontSize: "30px" }}>
                {event && event.title}
              </h1>
              <p className="mb-4 text-muted">
                <a
                  href={`http://maps.google.com/?q=${event && event.address}`}
                  target="_blank"
                >
                  <i className="fa fa-map" /> {event && event.address}
                </a>
              </p>

              <div className="d-none d-md-flex align-items-center pb-3 mb-1">
                <button
                  type="button"
                  className="btn btn-outline-dark disabled me-2"
                >
                  <span className="label bg-light-primary font--medium text-primary rounded-5 me-3">
                    <i className="fa fa-bolt" /> Fees
                  </span>
                  ₹ {event && event.entryFees}/ {event && event.memberType}
                </button>
                {event && event.isPrizeIncluded ? (
                  <button type="button" className="btn btn-success disabled">
                    <span className="label bg-light-dark font--medium text-white rounded-5 me-3">
                      <i className="fa fa-award" /> Prize Money
                    </span>
                    ₹{event && event.prize}
                  </button>
                ) : null}
              </div>
              <div className="mt-5">
                <div className="d-flex justify-content-between">
                  <h5 className="text-secondary">Slots Available</h5>
                  <h5 className="text-info">
                    {parseFloat(event.emptySlots)}/{event && event.totalSlots}
                  </h5>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Animated striped example"
                  aria-valuenow={progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    style={{ width: progress + "%" }}
                  />
                </div>
              </div>
              <div className="d-flex align-items-center mb-2">
                <a data-bs-toggle="modal" data-bs-target="#eventRegistration">
                  <button className="btn btn-primary me-2" type="button">
                    <i className="fa-solid fa-paper-plane me-2 ms-n1" />
                    Join Now
                  </button>
                </a>
              </div>
              <Share />
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

              <Registration event={event} />
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default EventDetails;
