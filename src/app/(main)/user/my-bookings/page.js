"use client";
import React, { useEffect, useState } from "react";
import Arena from "./Arena";
import config from "@/config";
import axios from "axios";
import Event from "./Event";

function MyBookings() {
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    axios
      .get(`${config.API_URL}/landing/bookings`, { withCredentials: true })
      .then((result) => {
        setBooking(result.data && result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="dash-wrapsw card border-0 rounded-4 mb-4">
      <div className="card-header">
        <h3>My Bookings</h3>
      </div>
      <div className="card-body px-4">
        <ul
          className="nav nav-pills lights mb-3 mt-3"
          id="pills-tab1"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-one-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-one"
              type="button"
              role="tab"
              aria-controls="pills-one"
              aria-selected="true"
            >
              <i className="me-1 fa fa-map-marker" />
              Venue/ Arena
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-two-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-two"
              type="button"
              role="tab"
              aria-controls="pills-two"
              aria-selected="false"
            >
              <i className="me-1 fa fa-calendar-check-o" />
              Events
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tab1Content">
          {/* {------------Start of Arena Section------------------} */}
          <div
            className="tab-pane fade show active"
            id="pills-one"
            role="tabpanel"
            aria-labelledby="pills-one-tab"
            tabIndex={0}
          >
            <Arena
              booking={booking.filter((item) => item.bookingType == "arena")}
            />
          </div>
          {/* {------------End of Arena Section------------------} */}
          <div
            className="tab-pane fade"
            id="pills-two"
            role="tabpanel"
            aria-labelledby="pills-two-tab"
            tabIndex={0}
          >
            <Event
              booking={booking.filter((item) => item.bookingType == "event")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyBookings;
