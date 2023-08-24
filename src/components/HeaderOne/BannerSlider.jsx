import React from "react";

function BannerSlider(props) {
  const banners = props && props.banners;
  return (
    <div className="row">
      <div
        className="col-xl-12 col-lg-12 col-md-12 px-0 our-banner"
        id="hero-slider"
      >
        {/* <div className="our-banner" id="hero-slider"> */}
        {banners &&
          banners.map((item, index) => {
            return (
              <div
                className="single-items"
                style={{ height: "500px" }}
                key={index}
              >
                <img className="w-100" src={item.file} alt={item.title} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default BannerSlider;
