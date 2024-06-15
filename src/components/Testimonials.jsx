import React from "react";
import Rating from "./Rating";

function Testimonials(props) {
  return (
    <section className="gray">
      <div className="container" style={{ overflow: "visible" }}>
        <div
          className="row justify-content-center"
          style={{ overflow: "visible" }}
        >
          <div className="col-xl-6 col-lg-10 col-md-12 col-sm-12 mb-5">
            <div className="sec-heading text-center">
              <h1 className="display-1 text-orange text-uppercase fw-bold">
                Wall of Love
              </h1>
              <p className="fs-5">What Our Happy Customer Says</p>
            </div>
          </div>
        </div>
        <div className="row" style={{ overflow: "visible" }}>
          <div id="testimonials-slide" style={{ overflow: "visible" }}>
            {props?.testimonials?.map((item, index) => {
              const comment = item?.comment;
              const showTooltip = comment?.length > 200;
              return (
                <div className="single-items zoom-on-hover" key={index}>
                  <div
                    className="card border-0 mb-4 position-relative w-30"
                    style={{ borderRadius: "5%", overflow: "visible"  , height:"400px"}}
                  >
                    <div className="card-body d-flex flex-column align-items-center">
                      <img
                        className="rounded-circle mb-3"
                        src={item?.profile}
                        width={120}
                        height={120}
                        alt="User"
                      />
                      <div className="text-center mb-3">
                        <Rating rating={item?.rating} />
                        <h5 className="fs-4 fw-bold mb-0">{item?.fullName}</h5>
                      </div>
                      {showTooltip ? (
                        <p
                          className="card-text comment-tooltip"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title={comment}
                        >
                          {comment.substring(0, 200) + "..."}
                        </p>
                      ) : (
                        <p className="card-text">{comment}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
