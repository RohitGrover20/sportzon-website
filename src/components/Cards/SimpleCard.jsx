import { getArenaRating } from "@/libs/fetchData";
import Link from "next/link";
import React from "react";
import Rating from "../Rating";

async function SimpleCard(props) {
  const item = props && props.item;
  const { data } = await getArenaRating(item?._id);
  return (
    <div
      className="priocs rounded-0 bg-white p-3 m-1"
      style={{ border: "3px solid #eee" }}
    >
      <div className="zoom-effect-wrapper">
        <div className="zoom-effect-img">
          <img
            src={item && item.gallery && item.gallery[0]}
            className="img-fluid rounded-4"
            alt="Image"
          />
        </div>
      </div>
      <div className="pt-3 mt-lg-2 px-2">
        <div className="d-flex justify-content-between">
          {/* <span className="text-warning bg-light-warning label ms-2"><i className='fa fa-star' /> 4.5</span> */}
        </div>
        <h6 className="mb-2 mt-2">
          <Link href={`/venues/${item && item.slug}`}>
            {item && item.title}
          </Link>
        </h6>
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

            <Rating rating={data} />
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
