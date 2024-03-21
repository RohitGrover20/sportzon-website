"use client";
import React from "react";

function Arena(props) {
  const bookings = props && props.booking;
  return (
    <div>
      {bookings &&
        bookings.map((booking, index) => {
          return (
            <div
              className="sng-ord border rounded-3 mb-4 px-3 py-3"
              key={index}
            >
              <a
                className="arrow-collapse d-flex align-items-center position-relative collapsed"
                data-bs-toggle="collapse"
                href={`#${booking.bookingId}`}
                role="button"
                aria-expanded="false"
                aria-controls={`${booking.bookingId}`}
              >
                <div className="flex-ord-start">
                  {booking &&
                  booking.arena &&
                  booking.arena.gallery &&
                  booking.arena.gallery[0] ? (
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

                <div className="flex-ord-end ps-3">
                  <div className="d-inline-flex label text-success bg-light-success mb-1">
                    <span>{booking.bookingId}</span>
                  </div>
                  <h5 className="text-dark h6 mb-1">
                    {booking.arena && booking.arena.title}
                    <span className="text-muted ms-3"></span>
                  </h5>
                  <p className="m-0 text-muted">
                    Booked at -{" "}
                    {booking.createdAt &&
                      new Date(booking.createdAt).toLocaleString()}
                  </p>
                </div>
              </a>
              <div className="collapse" id={booking.bookingId} style={{}}>
                <div className="card card-body">
                  <p>{booking && booking.arena && booking.arena.address}</p>
                  <p className="mb-1">
                    Order ID:
                    <span className="text-dark fw-medium ms-3">
                      #
                      {booking &&
                        booking.orderId &&
                        booking.orderId.substring(6, 35)}
                    </span>
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
                                <td className="p-1">Upcoming</td>
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
