import Link from "next/link";
import React from "react";

async function SimpleCard(props) {
  const item = props && props.item;
  // Check if updatedAt is within the last month
  const updatedAt = new Date(item?.createdAt);
  const lastMonth = new Date();
  lastMonth.setMonth(lastMonth.getMonth() - 1);

  const isNew = updatedAt > lastMonth;
  return (
    <>
      {/* <div
        className="rounded-3 position-relative zoom-on-hover border border-outline home-venue-card"
        style={{
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
          opacity: 0.9,
          width: "260px",
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

            <Link href={`/venues/${item && item?.slug}`}>
              <button className="btn btn-orange btn-md position-absolute top-0 end-0 m-3">
                  Book Now
              </button>
            </Link>
          </div>
        </div>
        <div className="card-body position-absolute bottom-0 start-0 w-100 text-white d-flex flex-column align-items-center">
          <h5 className="card-title text-center">{item && item?.title}{isNew && <span class="badge badge-secondary theme-bg">New</span>}</h5>
          <p className="card-text">
            {item && item?.state}
            {" , "}
            {item && item?.city}
          </p>
        </div>
      </div> */}
      <div
        className={`rounded-3 position-relative zoom-on-hover border-0 home-venue-card`}
        style={{
          opacity: 0.95,
          width: "260px",
          marginBottom: "40px",
          marginRight: "10px",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
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

            <Link href={`/venues/${item && item?.slug}`}>
              {/* <button className="btn btn-md btn-orange position-absolute top-0 end-0 m-3"> */}
              <button
                          className="btn btn-md theme-bg position-absolute top-0 end-0 m-3"
                          type="button"
                          style={{ background: "#0a5993", color: "white" }}
                        >
                Book Now
              </button>
            </Link>
          </div>
        </div>

        <div className="card-body position-absolute bottom-0 start-0 w-100 text-white d-flex flex-column align-items-center">
          <h5 className="card-title text-center mb-2">
            {item && item?.title}
            {isNew && (
              <span className="badge bg-success text-white ms-2">
              <i className="fas fa-star me-2" style={{ fontSize: "1.2em" }}></i>  New
              </span>
            )}
          </h5>
          <p className="card-text text-center mb-0">
            {item && item?.state}
            {" , "}
            {item && item?.city}
          </p>
        </div>
      </div>
    </>
  );
}

export default SimpleCard;
