import Link from "next/link";
import React from "react";
import Rating from "../Rating";

async function SimpleCard(props) {
  const item = props && props.item;
  return (
    <div
<<<<<<< HEAD
      className="priocs rounded-0 bg-white p-3 m-1"
      style={{ border: "3px solid #eee" }}
=======
      className="priocs rounded-3 bg-white p-3 m-1
       "
      style={{
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)", // Add a box shadow
        opacity: 0.9,
        width: "300px",
        marginBottom: "20px"
      }}
>>>>>>> c49956c (changes on Home Page)
    >
      <div className="zoom-effect-wrapper">
        <div className="zoom-effect-img">
          <img
<<<<<<< HEAD
            src={item && item.gallery && item.gallery[0]}
            className="img-fluid rounded-4"
            alt="Image"
=======
            src={
              item && item.gallery[0]
                ? item.gallery[0]
                : "https://images.pexels.com/photos/61143/pexels-photo-61143.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            className="img-fluid rounded-4"
            alt="Image"
            style={{ width: "100%", height: "180px", objectFit: "cover" }}
>>>>>>> c49956c (changes on Home Page)
          />
        </div>
      </div>
      <div className="pt-3 mt-lg-2 px-2">
        <div className="d-flex justify-content-between">
          {/* <span className="text-warning bg-light-warning label ms-2"><i className='fa fa-star' /> 4.5</span> */}
        </div>
<<<<<<< HEAD
        <h6 className="mb-2 mt-2">
          <Link href={`/venues/${item && item.slug}`}>
            {item && item.title}
          </Link>
        </h6>
=======
        <h6
          className="mb-2 mt-2"
          style={{
            maxWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <Link
            href={`/venues/${item && item.slug}`}
            className="d-inline-block text-truncate"
            data-bs-toggle="tooltip"
            title={item && item.title}
          >
            {item && item.title}
          </Link>
        </h6>

>>>>>>> c49956c (changes on Home Page)
        <span className="text-success bg-light-success label">
          <i className="fa fa-map-marker" /> {item && item.city},{" "}
          {item && item.state}
        </span>

        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 col-sm-6 col-xs-12">
            {/* <div className="d-flex justify-content-around">
                            {item && item.activities && item.activities.map((item, index) => {
                                return (
                                    <small key={index}>{item.value}</small>
                                )
                            })} */}
            {/* <img src="assets/sport-icon/cricket.png" style={{ width: "20px", height: "20px" }} />
                            <img src="assets/sport-icon/football.png" style={{ width: "20px", height: "20px" }} />
                            <strong>+1 More</strong> */}
            {/* </div> */}

            <Rating rating={item?.rating} />
            {/* <div className="d-flex align-items-center">
              <div className="d-flex align-items-center small">
                <span className="fa-solid fa-star text-warning me-1" />
                <span className="fa-solid fa-star text-warning me-1" />
                <span className="fa-solid fa-star text-warning me-1" />
                <span className="fa-solid fa-star text-warning me-1" />
                <span className="fa-solid fa-star text-muted" />
              </div>
              
            </div> */}
          </div>
          <div className="col-lg-6 col-sm-6 col-xs-6 p-0 text-end">
            <Link href={`/venues/${item && item.slug}`}>
              <button className="btn btn-md btn-primary">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleCard;
