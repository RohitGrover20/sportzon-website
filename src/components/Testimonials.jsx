import React from "react";
import Rating from "./Rating";

function Testimonials(props) {
  return (
    <section className="gray pt-5 mt-4">
      <div className="container" style={{ overflow: "visible" }}>
        <div
          className="row justify-content-center"
          style={{ overflow: "visible" }}
        >
          <div className="col-xl-6 col-lg-10 col-md-12 col-sm-12 mb-2">
            <div className="sec-heading text-center">
               <h3 className="text-orange text-uppercase fw-bold">
               What Our Happy Customer Says
              </h3>
            </div>
          </div>
        </div>
        <div className="row" style={{ overflow: "visible" }}>
          <div id="testimonials-slide" style={{ overflow: "visible" }}>
            {props?.testimonials?.length>0 && props?.testimonials?.map((item, index) => {
              const comment = item?.comment;
              const showTooltip = comment?.length > 200;
              return (
                <div className="single-items zoom-on-hover" key={index}>
                  <div
                    className="card border-0 mb-4 position-relative w-30"
                    style={{ overflow: "visible"  , height:"300px" , width:"300px"}}
                  >
                    <div className="card-body d-flex flex-column align-items-center">
                      <div className="text-center mb-3">
                        <Rating rating={item?.rating} />
                      </div>
                      <div style={{height:"120px"}}>
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
                      <div className="text-center mt-5">
                        <h5 className="fs-4 fw-bold mb-0 text-dark">{item?.fullName}</h5>
                        <h6 className="fs-6 fw-bold mb-0 text-black mt-1">{item?.designation}</h6>
                      </div>
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
