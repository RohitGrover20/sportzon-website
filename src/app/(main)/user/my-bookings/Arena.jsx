"use client";
import React from "react";
import Link from "next/link";

function Arena(props) {
  const bookings = props && props.booking;
  return (
    <div>
      {bookings?.length > 0 &&
        bookings.map((booking, index) => {
          return (
            <div
              className="sng-ord rounded-3 mb-4 px-3 py-3"
              key={index}
              style={{ background: "#D9D9D9" }}
            >
              <div className="d-flex align-items-center position-relative">
                <a
                  className="arrow-collapse d-flex align-items-center w-100"
                  data-bs-toggle="collapse"
                  href={`#${booking?.bookingId}`}
                  role="button"
                  aria-expanded="false"
                  aria-controls={`${booking?.bookingId}`}
                >
                  <div className="flex-ord-start">
                    {booking &&
                    booking?.arena &&
                    booking?.arena?.gallery &&
                    booking?.arena?.gallery[0] ? (
                      <img
                        src={`${booking.arena.gallery[0]}`}
                        className="img-fluid rounded-circle border-2 shadow-sm"
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                        alt="image"
                      />
                    ) : (
                      <p>No Image Available</p>
                    )}
                  </div>

                  <div className="flex-ord-end ps-3 w-100 d-flex justify-content-between align-items-center">
                    <div>
                      <div className="d-inline-flex label text-white bg-orange mb-1">
                        <span>
                          {booking?.bookingId ? booking?.bookingId : "---"}
                        </span>
                      </div>
                      <h5 className="text-dark h6 mb-1 fw-bold">
                        {booking?.arena && booking?.arena?.title}
                        <span className="text-muted ms-3"></span>
                      </h5>
                      <p className="m-0 text-dark">
                        Booked at -{" "}
                        {booking.createdAt &&
                          new Date(booking.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </a>
                <Link href={`/venues/${booking?.arena?.slug}`}>
                  <button
                    className="btn btn-orange btn-md ms-auto me-5 p-2"
                    type="button"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Book Now
                  </button>
                </Link>
              </div>
              <div className="collapse" id={booking?.bookingId}>
                <div className="card card-body m-3 profile-booking-card">
                  <p className="text-dark fw-bold">
                    {booking && booking?.arena && booking?.arena?.address}
                  </p>
                  <p className="mb-1">
                    <span className="text-dark fw-bold">Order ID : </span>
                    {booking?.orderId?.length > 0 && booking?.orderId ? (
                      <span className="text-dark fw-medium ms-3">
                        #
                        {booking &&
                          booking?.orderId &&
                          booking.orderId.substring(6, 35)}
                      </span>
                    ) : (
                      "No Order ID found for this booking."
                    )}
                  </p>
                  <div className="article-desc table-responsive">
                    <table className="table table-bordered">
                      <thead className="bg-secondary text-white">
                        <tr>
                          <th className="p-1">Activity</th>
                          <th className="p-1">Court</th>
                          <th className="p-1">Date</th>
                          <th className="p-1">Slots</th>
                          <th className="p-1">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {booking &&
                          booking.court &&
                          booking.court.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td className="p-1">{item.activity}</td>
                                <td className="p-1">{item.court}</td>
                                <td className="p-1">
                                  {new Date(item.date).toDateString()}
                                </td>
                                <td className="p-1">
                                  {item.slots &&
                                    item.slots.map((slot, index) => {
                                      return (
                                        <div
                                          className="badge badge-success me-1"
                                          key={index}
                                        >
                                          {slot.label}
                                        </div>
                                      );
                                    })}
                                </td>
                                <td className="p-1">{item?.status}</td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Arena;
