import Link from "next/link";
import React from "react";
function EventsCard(props) {
  const item = props && props.item;
  return (
    <>
      <div
        className="priocs rounded-3 bg-white p-3 m-1 position-relative "
        style={{
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
          opacity: 0.9,
          width: "300px auto",
        }}
      >  
        <div className="zoom-effect-wrapper">
          <div className="zoom-effect-img position-relative bg-image hover-zoom">
            <img
              src={`${item && item?.banner}`}
              className="img-fluid rounded-4"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
              alt="Image"
            />
            <Link href={`events/${item && item?.slug}`}>
              <button className="btn btn-orange btn-md position-absolute top-100 start-50 translate-middle">
                {item && new Date(item?.eventEndDate) >= new Date()
                  ? "Join Now"
                  : "View Now"}
              </button>
            </Link>
            <div className="position-absolute top-0 start-0 mt-3 ms-3 label text-light bg-success">
              {item?.activity}
            </div>
          </div>
        </div>
        <div className="pt-3 text-center pb-1">
          <h5 className="mt-3 text-truncate" title={item?.title}>
            <Link
              className="text-nav text-orange"
              href={`events/${item && item.slug}`}
            >
              {item && item?.title}
            </Link>
          </h5>
          <span className="theme-color">
            <i className="fas fa-map-marker-alt"></i>
            {"    "}
            {item && item?.city}, {item && item?.state}
          </span>
          <div>
            {" "}
            <i className="fas fa-calendar"></i>
            {"     "}
            {item &&
              new Date(item.eventDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year:"numeric"
              })}
              {item.eventDate !==item.eventEndDate && ` - ${new Date(item.eventEndDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}`}
          </div>
        </div>
      </div>
    </>
  );
}

export default EventsCard;
