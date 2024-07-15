import Link from "next/link";
import React from "react";
function EventsCard(props) {
  const item = props && props.item;
  const pathname = typeof window!='undefined' && window?.location?.pathname;
  return (
    <>
      <div
      className="priocs rounded-3 bg-white p-3 m-1 position-relative "
      style={{
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
        opacity: 0.9,
        width: "300px auto"
      }}
    >
      <div className="zoom-effect-wrapper">
        <div className="zoom-effect-img position-relative bg-image hover-zoom">
          <img
            src={`${item && item.banner}`}
            className="img-fluid rounded-4"
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
            alt="Image"
          />
          <Link href={`events/${item && item.slug}`}>
            <button className="btn btn-orange btn-md position-absolute top-100 start-50 translate-middle">
            {pathname=="/event-gallery" ? "View Now": "Join Now"}
                        </button>
          </Link>
          <div className="position-absolute top-0 start-0 mt-3 ms-3 label text-light bg-success">
            {item?.activity}
          </div>
        </div>
      </div>
      <div className="pt-3 text-center pb-4">
        {/* <p className="text-secondary">
          {item && new Date(item.eventDate).toDateString()} |{" "}
          {item && item.eventTime && item.eventTime.from} -{" "}
          {item && item.eventTime && item.eventTime.to}
        </p> */}
        <h5 className="mt-3">
          <Link
            className="text-nav text-orange"
            href={`events/${item && item.slug}`}
          >
            {item && item?.title}
          </Link>
        </h5>
        <span className="theme-color">
          {item && item?.city}, {item && item?.state}
        </span>
        {/* <Link className="text-nav" href={`events/${item && item.slug}`}>
          <button className="btn btn-md btn-orange w-100 mt-4">Join Now</button>
        </Link> */}
        <Link href={`events/${item && item.slug}`}>
          <div
            style={{
              position: "absolute",
              marginLeft: "132px",
              transform: "translateX(-16%)",
              width: "50px",
              height: "50px",
              backgroundColor: "#009EE2",
              borderRadius: "50%",
              border: "1px solid #ddd",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
            className="event-circle-arrow"
          >
            <i class="fa fa-arrow-right text-white"></i>
          </div>
        </Link>
      </div>
    </div>
    </>
  );
}

export default EventsCard;
