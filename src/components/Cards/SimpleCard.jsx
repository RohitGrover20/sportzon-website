import Link from "next/link";
import React from "react";

async function SimpleCard(props) {
  const item = props && props.item;
  return (
    <>
      <div
        className="rounded-3 position-relative zoom-on-hover border border-outline home-venue-card"
        style={{
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
          opacity: 0.9,
          width: "500px",
          marginBottom: "40px",
          marginRight: "10px",
        }}
      >
        <div className="zoom-effect-wrapper">
          <div className="zoom-effect-img position-relative">
            <img
              src={
                item && item?.gallery[0]
                  ? item?.gallery[0]
                  : "https://images.pexels.com/photos/61143/pexels-photo-61143.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              }
              className="img-fluid rounded-4"
              alt="Image"
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />

            <Link href={`/venues/${item && item.slug}`}>
              <button className="btn btn-orange btn-sm position-absolute top-0 end-0 m-3">
                Book Now
              </button>
            </Link>
          </div>
        </div>
        <div className="card-body position-absolute bottom-0 start-0 w-100 text-white d-flex flex-column align-items-center">
          <h5 className="card-title">{item && item.title}</h5>
          <p className="card-text">
            {item && item.state}
            {" , "}
            {item && item.city}
          </p>
        </div>
      </div>
    </>
  );
}

export default SimpleCard;
