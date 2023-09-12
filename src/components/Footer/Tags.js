import React from "react";

function Tags() {
  return (
    <section className="bg-primary pt-4 pb-4">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="d-flex align-items-center">
              <div className="exljk-icon text-white fs-2">
                <i className="fa-solid fa-gift" />
              </div>
              <div className="exljk-caps ps-3">
                <h5 className="text-light fw-semibold">Fast Delivery</h5>
                <p className="m-0 text-light lh-base opacity-75">
                  Usually, we prefer the real thing, wine without sulfur based
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="d-flex align-items-center">
              <div className="exljk-icon text-white fs-2">
                <i className="fa-solid fa-sack-dollar" />
              </div>
              <div className="exljk-caps ps-3">
                <h5 className="text-light fw-semibold">Money Back Gaurantee</h5>
                <p className="m-0 text-light lh-base opacity-75">
                  Usually, we prefer the real thing, wine without sulfur based
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="d-flex align-items-center">
              <div className="exljk-icon text-white fs-2">
                <i className="fa-solid fa-shield-heart" />
              </div>
              <div className="exljk-caps ps-3">
                <h5 className="text-light fw-semibold">Secure Payment</h5>
                <p className="m-0 text-light lh-base opacity-75">
                  Usually, we prefer the real thing, wine without sulfur based
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="d-flex align-items-center">
              <div className="exljk-icon text-white fs-2">
                <i className="fa-solid fa-headset" />
              </div>
              <div className="exljk-caps ps-3">
                <h5 className="text-light fw-semibold">24x7 Support</h5>
                <p className="m-0 text-light lh-base opacity-75">
                  Usually, we prefer the real thing, wine without sulfur based
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tags;
