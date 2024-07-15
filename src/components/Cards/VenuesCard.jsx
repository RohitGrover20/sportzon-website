import Link from "next/link";
import React from "react";
import Rating from "../Rating";

async function VenuesCard(props) {
  const item = props && props.item;
  return (
    <div
      className="priocs rounded-3 bg-white p-3 m-1 position-relative
       "
      style={{
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
        opacity: 0.9,
        width: "300px auto",
        marginBottom: "40px",
      }}
    >
      <div className="zoom-effect-wrapper">
        <div className="zoom-effect-img">
          <img
            src={
              item && item.gallery[0]
                ? item.gallery[0]
                : "https://images.pexels.com/photos/61143/pexels-photo-61143.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            className="img-fluid rounded-4"
            alt="Image"
            style={{ width: "100%", height: "180px", objectFit: "cover" }}
          />
          <Link href={`/venues/${item && item.slug}`}>
            <button
              className="btn btn-orange btn-md position-absolute top-50 start-50 translate-middle"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              {/* {item?.slug === "sportzon-wave-city"
                ? "Book Now"
                : "Coming Soon !"}{" "} */}
                Book Now
            </button>
          </Link>
        </div>
      </div>
      <div className="pt-3 mt-lg-2 px-2">
        <h6
          className="mb-1 mt-2 text-center"
          style={{
            maxWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <Link
            href={`/venues/${item && item?.slug}`}
            className="d-inline-block text-truncate text-orange fw-bold"
            data-bs-toggle="tooltip"
            title={item && item?.title}
          >
            {item && item?.title}
          </Link>
        </h6>
        <p className="theme-color text-center">
          {item && item?.state}
          {" , "}
          {item && item?.city}
        </p>

        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="theme-color">Rating</div>
            <Rating rating={item?.rating} />
          </div>
          <div className="col-lg-6 col-sm-6 col-xs-6 p-0 text-end">
            <div className="text-orange fw-bold"> Rs. 499 </div>
            <div className="theme-color"> Onwards </div>
          </div>
        </div>
      </div>
      {/* Half Circle */}
      <Link href={`/venues/${item && item?.slug}`}>
        <div
          style={{
            position: "absolute",
            bottom: "-25px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "50px",
            height: "50px",
            backgroundColor: "#009EE2",
            borderRadius: "50%",
            border: "1px solid #ddd",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <i class="fa fa-arrow-right text-white"></i>
        </div>
      </Link>
    </div>
  );
}

export default VenuesCard;
