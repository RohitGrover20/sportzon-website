import React from "react";
import Image from "next/image";
import HomeSearchBar from "../Header/HomeSearchBar";
function BannerSlider() {
  return (
    <div className="row">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 position-relative">
            <div
              className="position-absolute start-47 text-left ml-5"
              style={{ top: "20%" }}
            >
              <div className="banner-title">
                <h1
                  className="w-100 text-uppercase fs-7 display-1 text-white"
                  style={{
                    fontSize: "7vw",
                    maxWidth: "50vw",
                    marginLeft: "5vw",
                    letterSpacing: "-1px",
                  }}
                >
                  What's Your
                </h1>
                <h1
                  className="text-uppercase display-1 mt-n4 fw-bold text-white"
                  style={{
                    maxWidth: "90vw",
                    fontSize: "12vw",
                    marginLeft: "5vw",
                    letterSpacing: "-1px",
                  }}
                >
                  Game ?
                </h1>
                <h2
                  className="position-absolute text-white"
                  style={{
                    maxWidth: "13em",
                    marginLeft: "5vw",
                    marginTop: "110px auto",
                    fontSize: "3vw",
                  }}
                >
                  Click to find the perfect sport for you!
                </h2>
              </div>
              <div style={{ marginTop: "160px", marginLeft: "5vw" }}>
                <HomeSearchBar />
              </div>
            </div>
            <Image
              src="/assets/img/homebannerimage.png"
              width={1000}
              height={1000} // Set a fixed height for the aspect ratio
              layout="responsive" // Set the layout to responsive
              alt="banner"
              className="w-100 banner-image" // Make the image responsive within its container
              style={{ height: "50px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSlider;