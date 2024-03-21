// import config from "@/config";
import React from "react";

function Event(props) {
  const bookings = props && props.booking;
  return (
    <div>
      {bookings && bookings?.length>0 &&
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
                  <img
                    src={`${booking.event && booking.event.banner}`}
                    className="img-fluid rounded-circle border-2 shadow-sm"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                    alt="image"
                  />
                </div>

                <div className="flex-ord-end ps-3">
                  <div className="d-inline-flex label text-success bg-light-success mb-1">
                    <span>{booking.bookingId}</span>
                  </div>
                  <h5 className="text-dark h6 mb-1">
                    {booking.event && booking.event.title}
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
                  <p>{booking && booking.event && booking.event.address}</p>
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
                          <th className="p-1">Event Type</th>
                          <th className="p-1">No. of Tickets</th>
                          <th className="p-1">Event Date</th>
                          <th className="p-1">Event Time</th>
                          <th className="p-1">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-1">
                            {booking.event && booking.event.eventType}
                          </td>
                          <td className="p-1">{booking.noOfTickets}</td>
                          <td className="p-1">
                            {new Date(
                              booking.event && booking.event.eventDate
                            ).toDateString()}
                          </td>
                          <td className="p-1">
                            <span className="me-1 ms-1">From</span>{" "}
                            {booking.event &&
                              booking.event.eventTime &&
                              booking.event.eventTime.from}
                            <span className="me-1 ms-1">to</span>
                            {booking.event &&
                              booking.event.eventTime &&
                              booking.event.eventTime.to}
                          </td>
                          <td className="p-1">Upcoming</td>
                        </tr>
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

export default Event;
