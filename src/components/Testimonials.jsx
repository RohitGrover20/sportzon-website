import React from "react";
import Rating from "./Rating";

function Testimonials(props) {
  return (
    <section className="gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-10 col-md-12 col-sm-12 mb-5">
            <div className="sec-heading center">
              <div className="d-inline-flex px-4 py-1 rounded-5 text-success bg-light-success font--medium mb-2">
                <span>What People Says</span>
              </div>
              <h2>What Our Happy Customer Says</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 px-0">
            <div className="our-testimonials" id="testimonials-slide">
              {props?.testimonials?.map((item, index) => {
<<<<<<< HEAD
                return (
                  <div className="single-items" key={index}>
                    <div className="card border-0 mb-4">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
=======
                const comment = item?.comment;
            const showTooltip = comment.length > 450;
                return (
                  <div className="single-items" key={index}>
                    <div className="card border-0 mb-4">
                      <div className="card-body" style={{height:"400px"}}>
                        <div className="d-flex align-items-center mb-3 ">
>>>>>>> c49956c (changes on Home Page)
                          <img
                            className="rounded-circle"
                            src={item?.profile}
                            width={60}
                            alt="Users"
                          />
                          <div className="ps-3">
                            <div className="mb-1">
                              <h5 className="fs-6 font--medium mb-0">
                                {item?.fullName}
                              </h5>
                            </div>
                            <div className="fs-sm text-muted">
                              {item?.designation}
                            </div>
                          </div>
                        </div>
                        <Rating rating={item?.rating} />
<<<<<<< HEAD
                        <p className="card-text">{item?.comment}</p>
=======
                        {showTooltip ? (
                      <p className="card-text comment-tooltip" data-bs-toggle="tooltip" data-bs-placement="top" title={comment}>
                        {comment.substring(0, 450) + '...'}
                      </p>
                    ) : (
                      <p className="card-text">{comment}</p>
                    )}
>>>>>>> c49956c (changes on Home Page)
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
