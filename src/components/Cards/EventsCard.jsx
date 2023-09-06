import Link from "next/link";
import React from "react";

function EventsCard(props) {
  const item = props && props.item;
  return (
    <div
      className="priocs rounded-0 bg-white p-3 m-1"
      style={{ border: "3px solid #eee" }}
    >
      <div className="zoom-effect-wrapper">
        <div className="zoom-effect-img position-relative">
          <img
            src={`${item && item.banner}`}
            className="img-fluid rounded-4"
            alt="Image"
          />
          <div className="position-absolute top-0 start-0 mt-3 ms-3 label text-light bg-success">
            {item?.activity}
          </div>
        </div>
      </div>
      <div className="pt-3">
        <p className="text-secondary">
          {item && new Date(item.eventDate).toDateString()} |{" "}
          {item && item.eventTime && item.eventTime.from} -{" "}
          {item && item.eventTime && item.eventTime.to}
        </p>
        <h6 className="">
          <Link className="text-nav" href={`events/${item && item.slug}`}>
            {item && item.title}
          </Link>
        </h6>
        <span className="text-orange bg-light-orange label">
          <i className="fa fa-map-marker" /> {item && item.city},{" "}
          {item && item.state}
        </span>
        <Link className="text-nav" href={`events/${item && item.slug}`}>
          <button className="btn btn-md btn-orange w-100 mt-4">Join Now</button>
        </Link>
      </div>
    </div>
  );
}

export default EventsCard;
